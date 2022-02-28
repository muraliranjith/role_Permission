const express = require('express')
var router = express.Router();
const { createEmployee, getEmployees, updateEmployees, deleteEmployees, getOneEmployee, register } = require('../controllers/user.controller')
// const { checkRole } = require('../middlewares/auth')

// router.post('/create', checkRole(['user','agent']), createEmployee);
router.post('/user', createEmployee)
      .post('/firebaseRegister', register)
      .get('/user', getEmployees)
      .get('/user/:id', getOneEmployee)
      .put('/user/:id', updateEmployees)
      .delete('/user/:id', deleteEmployees)



module.exports = router