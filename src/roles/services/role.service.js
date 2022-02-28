const { Role } = require('../models/role.model')


const createFiles = async (payload) => {
    return await Role.create(payload);
}
const queryFiles = async (data) => {
    return await Role.find({ email: data });
}
const queryOneFiles = async (_id) => {
    return await Role.findById({ _id });
}
const updateFiles = async (_id) => {
    return await Role.findByIdAndUpdate(_id)
}
const deleteFiles = async (_id) => {

    return await Role.findByIdAndDelete(_id);
}


module.exports = {
    createFiles,
    queryFiles,
    updateFiles,
    deleteFiles,
    queryOneFiles,
}