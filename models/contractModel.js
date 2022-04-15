const mongoose = require('mongoose')

const contractSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: [true, 'A Contract must have data']
    }
})

const Contract = mongoose.model('Contract', contractSchema)

module.exports = Contract