const express = require('express')
var router = express.Router();
const { CreateRole, getUserRoles, getOneRole, updateRole, deleteRole } = require('../controllers/role.controller')

router.post('/role', CreateRole)
      .get('/role', getUserRoles)
      .get('/role/:id', getOneRole)
      .put('/role/:id', updateRole)
      .delete('/role/:id', deleteRole)

module.exports = router