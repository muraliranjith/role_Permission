const { User } = require('../models/user.model')

const createFiles = async (payload) => {

    return await User.create(payload);
}
const queryFiles = async (data) => {
    return await User.find({ email: data });
}
const queryOneFiles = async (_id) => {
    return await User.findById({ _id });
}
const updateFiles = async (_id) => {
    return await User.findByIdAndUpdate(_id)
}
const deleteFiles = async (_id) => {

    return await User.findByIdAndDelete(_id);
}

module.exports = {
    createFiles,
    queryFiles,
    updateFiles,
    deleteFiles,
    queryOneFiles,
}