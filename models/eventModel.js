const mongoose = require('mongoose')

const schedularSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'text is required'
    },
    dateTime: {
        type: Date,
        required: 'dateTime is required'
    }
    
})
module.exports = mongoose.model('shedulr', schedularSchema)