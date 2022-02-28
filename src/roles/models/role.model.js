const mongoose = require('mongoose')

var RoleSchema = new mongoose.Schema({

    Role_Name: {
        type: String,
        allowNull: false,
    },
    Module_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Modules',
        }
    ],
}, { timestamps: true });
var Role = mongoose.model('Role', RoleSchema)
module.exports = {
    Role
}