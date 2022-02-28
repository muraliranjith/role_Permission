const express = require('express')
var router = express.Router();
const { CreatePermission, getUserPermission, updatePermission, deletePermission,getOneUserPermission } = require('../controllers/permission.controller')

router.post('/CreatePermission', CreatePermission)
    .get('/getUserPermission', getUserPermission)
    .get('/getOneUserPermission', getOneUserPermission)
    .put('/updatePermission', updatePermission)
    .delete('/deletePermission', deletePermission)

module.exports = router