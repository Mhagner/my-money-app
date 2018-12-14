const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

//metodo para apresentar eventuais erros do banco de dados
const sendErrorsFormDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

//metodo de login
const login = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFormDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            //gerar um token com validade de 1 dia
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })
            //envia os dados de acesso
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['Usuário/Senha inválidos']})
        }
    })
}

//metodo para validar o token
const validateToken = (req, res, next ) => {
    const token = req.body.token || ''

    //descodifica o token e compara com a chave armazenada o env
    jwt.verify(token, env.authSecret, function(err, decoded){
        return res.status(200).send({ valid: !err })
    })
}

//Metodo de cadastro de um novo usuário
const signup = (req, res, next ) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirmPassword || ''

    //valida se o e-mail está de acordo com a regra
    if(!email.match(emailRegex)){
        return res.status(400).send({errors: ['O e-mail informado está inválido']})
    }
    //valida se a senha está de acordo com a regra
    if(!password.match(passwordRegex)){
        return res.status(400).send({
            errors: ['Senha deve ter: 1 letra maíscula, 1 número, 1 letra minúscula, um caractere (@#$%) e tamanho entre 6 e 20'] 
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    //compara senha informada no campo de confirmação da senha está de acordo com a informada no campo senha
    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
        return res.status(400).send({ errors: ['Senhas não conferem']})
    }


    User.findOne({email}, (err, user) => {
        if(err){
            return sendErrorsFormDB(res, err)
        //valida se o usupario já existe no banco
        }else if(user){
            return res.status(400).send({ errors: ['Usuário já cadastrado']})
        }else{
            //cria um novo usuário
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err => {
                if(err){
                    return sendErrorsFormDB(req, err)
                }else{
                    //após o cadastro, chama o metodo para logar o usuário automaticamente já aproveitando os dados de cadastro
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }


