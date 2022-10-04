const express = require("express");
const Post = require("../models/Post");
const roteador = express.Router();

roteador.get("/", (req, res) => {
    res.render("./pages/painel-posts");
});

roteador.post("/", async (req, res) => {
    let novoPost = new Post();
    novoPost.titulo = req.body.titulo;
    novoPost.descricao = req.body.descricao;
    novoPost.conteudo = req.body.conteudo;
    novoPost.linkCapa = req.body.linkCapa;
    novoPost.categoria = req.body.categoria;
    try {
        novoPost = await novoPost.save();
        res.redirect("/")
    } catch(e) {
        throw e
    }
})

module.exports = roteador;