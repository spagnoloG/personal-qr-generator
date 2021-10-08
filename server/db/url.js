const knex = require("./knex")

const insertNewUrl = (packet) => {
    return knex("url").insert(packet);
};

const getUrlsById = (id) => {
    return knex("url").where("id", id).select("*");
}

const updateRedirectUrl = (permamemnt_url, redirect_url) => {
    return knex("url").where("permament_url", permamemnt_url)
        .update({ redirect_url: redirect_url });
}

const deleteUrl = (permamemnt_url) => {
    return knex("url").where("permament_url", permamemnt_url).del();
}

module.exports = {
    insertNewUrl,
    getUrlsById,
    updateRedirectUrl,
    deleteUrl
}