const restful = require('node-restful')
const mongoose = restful.mongoose

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true } 
})

const managentPaymentSchema = new mongoose.Schema({
    dateReceived: { type: Date, required: true },
    valueDue: { type: Number, required: true },
})

const receiptSchema = new mongoose.Schema({
    maturity: { type: Date, required: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    received: { type: Number, required: true },
    managentPayments: [managentPaymentSchema]
})

const managementSchema = new mongoose.Schema({
    monthAndYear: { type: String, required: true },
    contemplatedMonth: { type: String, required: true, uppercase: true },
    contemplateDay: { type: Date, required: true },
    status: { type: String, required: false, uppercase: true,
        enum: ['ABERTO', 'PAGO'] },
    receivableValue: { type: Number, required: true },
    valueReceived: { type: Number, required: true },
    receipts: [receiptSchema]
})

const groupSchema = new mongoose.Schema({
    description: { type: String, required: true },
    initialDate: { type: Date, required: true },
    baseValue: { type: Number, required: true },
    valueCorrection: { type: Number, required: true },
    dayDue: { type: Number, required: true },
    dayConteplation: { type: Number, required: true},
    participants: [participantSchema],
    managements: [managementSchema]
})

module.exports = restful.model('Group', groupSchema)