const { ObjectId } = require('mongodb')


const { createFiles, queryFiles, updateFiles, deleteFiles, queryOneFiles } = require('../services/user.service')
const { Role } = require('../../roles/models/role.model')
const firebase = require('../../config/firebase.db');
// const Student = require('../models/register');
const firestore = firebase.firestore();
const bcrypt = require('bcrypt')



//construtor

// save

// err

// success

// return new Promise(resolve => {

// apidoc

/**
 * populate - inline & outline
 * multi populate
 * multi level populate
 * multi level nested populate
 * nested populate
 * nested multi level populate
 * select , sort , paginate, filter , match, map, limit
 */
const register = async () => {
    const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    }
    const roles = await firestore.collection('student').doc().set(payload);
    res.status(200).json({ message: "User Created", roles })
}

const createEmployee = async (req, res) => {

    const user1 = await queryFiles(req.body.email)
    if (user1 == '') {
        const role = req.body.role;
        if (role) {
            const roles = await Role.find({ Role_Name: role }).populate('Module_id')// key to populate
            await createFiles(req.body)
            res.status(200).json({ message: "User Created", roles })
            // res.json(user);
        } else {
            res.status(200).send("please enter your role")
        }
    } else {
        res.status(200).send("email is already required")
    }
}
const getEmployees = async (req, res) => {
    var Employee = await queryFiles()
    res.status(200).json({ Employee })
}
const getOneEmployee = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    var Employee = await queryOneFiles(id)
    res.status(200).json({ Employee })
}
const updateEmployees = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await updateFiles(id, req.body)
    res.status(200).json({ message: "update successfully" })
}
const deleteEmployees = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await deleteFiles(id)
    res.status(200).json({ message: "Deleted Succesfully" })
}

module.exports = {
    createEmployee,
    getEmployees,
    updateEmployees,
    deleteEmployees,
    getOneEmployee,
    register
}