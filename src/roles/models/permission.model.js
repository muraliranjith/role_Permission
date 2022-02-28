const mongoose = require('mongoose')

var PermissionSchema = new mongoose.Schema({
    perm_name: [
        {
            type: String,
            allowNull: false,
            enum: ["create", "edit", "delete", "view",'update']
        }
    ],
    // role_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Role',
    // }
}, { timestamps: true });
var Permission = mongoose.model('Permission', PermissionSchema)
module.exports = {
    Permission
}