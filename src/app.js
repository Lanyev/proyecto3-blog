const express = require("express");
const app = express();
app.use(express.json());

const postRouter = require("./posts/posts.router");

const db = require("./utils/database");

app.use("/api/v1", postRouter);

db.authenticate()
    .then(() => {
        console.log("las credenciales son correctas");
    })
    .catch((error) => {
        console.log(error);
    });
db.sync()
    .then(() => {
        console.log("la base de datos se sincronizo");
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/", (req, res) => {
    res.json({
        message: "server ok",
    });
});

app.listen("9000", () => {
    console.log("star server");
});

module.exports = app;
