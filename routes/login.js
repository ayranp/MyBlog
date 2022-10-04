const express = require("express");
const roteador = express.Router();

roteador.get("/", (req, res) => {
    res.render("./pages/login");
});

module.exports = roteador;