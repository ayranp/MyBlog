const express = require("express");
const Posts = require("../models/Post");
const roteador = express.Router();



roteador.get("/", async (req, res) => {
    const terror = await Posts.find({categoria: "Terror"});
    const ciencias = await Posts.find({categoria: "Ciencias"});
    const fantasia = await Posts.find({categoria: "Fantasia"});
    const autoAjuda = await Posts.find({categoria: "Auto Ajudo"});
    
    const posts = await Posts.find().sort({numLeitores: "desc"})
    res.render("./pages/maisLidos", { 
        posts: posts,
        terror: terror.length,
        ciencias: ciencias.length,
        fantasia: fantasia.length,
        autoAjuda: autoAjuda.length
    })
})


module.exports = roteador;