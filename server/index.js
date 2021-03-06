const express = require("express")
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const db = require("./db/user");
const url_db = require("./db/url");

const PORT = 4200;
const app = express();

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }));


// --> Register user
app.post("/register", async (req, res) => {
    const { email, password, name } = req.body;

    if (email == undefined || password == undefined || name == undefined)
        return res.status(500).json();

    const user = await db.getUser(email);


    if (user.length != 0) return res.status(501).json();

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) return res.status(500).json();

        const user = {
            email: email,
            password: hash,
            name: name
        }
        const result = await db.createUser(user);
        return res.status(200).json({ id: result[0] });
    });
});

// --> user login --> return JWT
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (email == undefined || password == undefined)
        return res.status(500).json();

    const user = await db.getUser(email);

    if (user[0] == undefined)
        return res.status(500).json();

    bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) return res.status(500).json();

        if (result) {
            const token = jwt.sign({
                email: email
            }, "IDK", {
                expiresIn: "24h"
            });
            return res.status(200).json({
                token: token,
                user: user[0]
            });
        } else {
            return res.status(500).json();
        }
    })
})

app.patch("/update-user/", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(401).json();
    }

    const { email, name, urls } = req.body;

    if (email == undefined || name == undefined)
        return res.status(500).json();

    const user = {
        name: name
    }

    result = await db.updateUser(user, email);

    return res.status(200).json();
})

app.post("/get", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(402).json();
    }

    const { email } = req.body;

    user = await db.getUser(email);

    return res.status(200).json(user);
});

// URL HANDLING!
app.post("/new-url", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(402).json();
    }

    const {id, permament_url, redirect_url, title } = req.body;

    if (id == undefined || permament_url == undefined 
        || redirect_url == undefined || title == undefined)
        return res.status(500).json();

    const packet = {
        id: id,
        permament_url: permament_url,
        redirect_url: redirect_url,
        title: title
    }

    let transaction = await url_db.insertNewUrl(packet);

    return res.status(200).json(packet);
})

app.get("/get-urls", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(402).json();
    }
    const { id } = req.body;

    if (id == undefined)
        return res.status(500).json();

    let urls = await url_db.getUrlsById(id);

    return res.status(200).json(urls);
})

app.patch("/update-redirect-url", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(402).json();
    }

    const {permament_url, redirect_url} = req.body;

    let updated = await url_db.updateRedirectUrl(permament_url, redirect_url);

    return res.status(200).json(updated);
})

app.delete("/delete-url", async (req, res) => {
    // check if token is valid
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "IDK");
        req.user_data = decoded;
    } catch (error) {
        return res.status(402).json();
    }

    const {permament_url} = req.body;

    if(permament_url == undefined)
        return res.status(500).json();

    let status = await url_db.deleteUrl(permament_url);

    return res.status(200).json(status);
})

// Start listening
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`);
});
