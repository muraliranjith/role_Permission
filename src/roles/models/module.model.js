const mongoose = require('mongoose')

var moduleSchema = new mongoose.Schema({
    module_Name: {
        type: String,
        allowNull: false,
        unique: true
    },
    Create: {
        type: Boolean
    },
    View: {
        type: Boolean
    },
    Delete: {
        type: Boolean
    },
    Edit: {
        type: Boolean
    },
}, { timestamps: true });
var ModulesPer = mongoose.model('Modules', moduleSchema)
module.exports = {
    ModulesPer
}