const express = require('express')
const auth = require('./auth')
 
module.exports = function(server){
    /*
    **Rotas protegidas por token JWT (privadas)
    **
    */
    const protectApi = express.Router()
    server.use('/api', protectApi)
    protectApi.use(auth)

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleServices')
    BillingCycle.register(protectApi, '/billingCycles')

    //rotas de grupo
    const Group = require('../api/group/groupServices')
    Group.register(protectApi, '/groups')

    /*
    **Rotas abertas (publicas)
    **
    */
    const openApi = express.Router()    
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}