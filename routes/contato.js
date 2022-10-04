const express = require("express");
const roteador = express.Router();


roteador.get("/", (req, res) => {
    res.render("./pages/contato");
});

module.exports = roteador;