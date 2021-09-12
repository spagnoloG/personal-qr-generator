const knex = require("./knex")

const createUser = (user) => {
    return knex("user").insert(user);
};

const getAllUsers = () => {
    return knex("user").select("*");
}

const deleteUser = (id) => {
    return knex("user").del();
}

const updateUser = (user, email) => {
    return knex("user").where("email", email).update(user);
}

const getUser = (email) => {
    return knex("user").select("*").where("email", email)
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUser
}