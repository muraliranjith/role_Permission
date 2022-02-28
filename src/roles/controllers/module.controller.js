const { ObjectId } = require('mongodb')

const { createFiles, queryFiles, updateFiles, deleteFiles, queryOneFiles, } = require('../services/module.service')

const CreateModule = async (req, res) => {
    var result = await createFiles(req.body)
    res.status(200).json({ message: "Created Succesfully", Data: result })

}
const getModule = async (req, res) => {
    var result = await queryFiles()
    res.status(200).json({ result })
}
const getOneModule = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    var result = await queryOneFiles(id)
    res.status(200).json({ result })
}
const updateModule = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await updateFiles(id, req.body)
    res.status(200).json({ message: "update successfully" })
}
const deleteModule = async (req, res) => {
    var id = new ObjectId(req.params.id || req.body.id)
    await deleteFiles(id)
    res.status(200).json({ message: "Deleted Succesfully" })
}

module.exports = { CreateModule, getModule, getOneModule, updateModule, deleteModule }