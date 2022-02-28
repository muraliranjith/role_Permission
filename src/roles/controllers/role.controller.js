const { ObjectId } = require('mongodb')

const { createFiles, queryFiles, updateFiles, deleteFiles, queryOneFiles, } = require('../services/role.service')

const CreateRole = async (req, res) => {
    var result = await createFiles(req.body)
    res.status(200).json({ message: "Created Succesfully", Data: result })

}
const getUserRoles = async (req, res) => {
    var result = await queryFiles()
    res.status(200).json({ result })
}
const getOneRole = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    var result = await queryOneFiles(id)
    res.status(200).json({ result })
}
const updateRole = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await updateFiles(id, req.body)
    res.status(200).json({ message: "update successfully" })
}
const deleteRole = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await deleteFiles(id)
    res.status(200).json({ message: "Deleted Succesfully" })
}

module.exports = {
    CreateRole,
    getUserRoles,
    getOneRole,
    updateRole,
    deleteRole
}