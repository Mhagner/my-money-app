const _ = require('lodash')

//tratamento das mensagens de erro da API
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

const parseErrors = (errorsNode) => {
    const errors = []
    _.forIn(errorsNode, error => errors.push(error.message))
    return errors
}