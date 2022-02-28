const { ObjectId } = require('mongodb')

const { createFiles, queryFiles, updateFiles, deleteFiles } = require('../services/permission.service')

const CreatePermission = async (req, res) => {
    var result = await createFiles(req.body)
    res.status(200).json({ message: "Created Succesfully", Data: result })

}
const getUserPermission = async (req, res) => {
    var result = await queryFiles()
    res.status(200).json({ result })
}
const getOneUserPermission = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    var result = await queryFiles(id)
    res.status(200).json({ result })
}
const updatePermission = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await updateFiles(id, req.body)
    res.status(200).json({ message: "update successfully" })
}
const deletePermission = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await deleteFiles(id)
    res.status(200).json({ message: "Deleted Succesfully" })
}

module.exports = {
    CreatePermission,
    getUserPermission,
    getOneUserPermission,
    updatePermission,
    deletePermission
}