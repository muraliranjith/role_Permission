const express = require('express')
var router = express.Router();
const { CreateModule, getModule, getOneModule, updateModule, deleteModule } = require('../controllers/module.controller')

router.post('/module', CreateModule)
    .get('/module', getModule)
    .get('/module/:id', getOneModule)
    .put('/module/:id', updateModule)
    .delete('/module/:id', deleteModule)

module.exports = router