const express = require('express')
 
module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleServices')
    BillingCycle.register(router, '/billingCycles')
}