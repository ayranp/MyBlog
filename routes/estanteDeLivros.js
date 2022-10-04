const express = require("express");
const Post = require("../models/Post");
const roteador = express.Router();


roteador.get("/", async (req, res) => {
    const posts = await Post.find().sort({dataCriacao: "desc"});
    res.render("./pages/estanteDeLivros", {posts: posts});
});


module.exports = roteador;

