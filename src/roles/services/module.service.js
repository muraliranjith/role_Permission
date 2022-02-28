const {ModulesPer} = require('../models/module.model')


const createFiles = async (payload) => {
    return await ModulesPer.create(payload);
}
const queryFiles = async (data) => {
    return await ModulesPer.find({ email: data });
}
const queryOneFiles = async (_id) => {
    return await ModulesPer.findById({ _id });
}
const updateFiles = async (_id) => {
    return await ModulesPer.findByIdAndUpdate(_id)
}
const deleteFiles = async (_id) => {

    return await ModulesPer.findByIdAndDelete(_id);
}

module.exports = {
    createFiles,
    queryFiles,
    updateFiles,
    deleteFiles,
    queryOneFiles,
}