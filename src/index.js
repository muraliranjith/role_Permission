const mongoose = require('mongoose')
const body_parser = require('body-parser')
const express = require('express');
const config = require('./config/index');
var app = express()

const User = require('./user/models/user.model')
const modulePer = require('./roles/models/module.model')
const permission = require('./roles/models/permission.model')
const Role = require('./roles/models/role.model')
const userRouters = require('../src/user/routers/user.routers')
const userRoles = require('../src/roles/routers/role.routers')
const userModule = require('../src/roles/routers/module.routers')
const userPermission = require('./roles/routers/permission.routes')

mongoose.connect(config.DB, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("mongodb Connection Successfully"); }
    else { console.log("Error in DB Connection :", err); }
})

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());
app.use('/api/user', userRouters)
app.use('/api/role', userRoles)
app.use('/api/module', userModule)
app.use('/api/permission', userPermission)




app.listen(config.PORT, () => {
    console.log(`Express Server started at port http://localhost:${config.PORT}/api`);
})


module.exports = {
    User,
    modulePer,
    permission,
    Role
}