const { Permission } = require('../models/permission.model')


const createFiles = async (payload) => {
    return await Permission.create(payload);
}
const queryFiles = async (_id) => {
    return await Permission.find({ _id });
}
const updateFiles = async (_id) => {
    return await Permission.findByIdAndUpdate(_id)
}
const deleteFiles = async (_id) => {

    return await Permission.findByIdAndDelete(_id);
}

module.exports = {
    createFiles,
    queryFiles,
    updateFiles,
    deleteFiles,
}