const express = require("express");
const mongoose = require("mongoose");
const rotaEstanteDeLivros = require("./routes/estanteDeLivros");
const roteadorMaisLidos = require("./routes/maisLidos");
const roteadorContato = require("./routes/contato");
const roteadorLogin = require("./routes/login");
const roteadorPainelPosts = require("./routes/painel-posts");
const Posts = require("./models/Post");
const app  = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    const terror = await Posts.find({categoria: "Terror"});
    const ciencias = await Posts.find({categoria: "Ciencias"});
    const fantasia = await Posts.find({categoria: "Fantasia"});
    const autoAjuda = await Posts.find({categoria: "Auto Ajudo"});
    
    const posts = await Posts.find().sort({createdAt: "desc"})
    res.render("./pages/home", { 
        posts: posts,
        terror: terror.length,
        ciencias: ciencias.length,
        fantasia: fantasia.length,
        autoAjuda: autoAjuda.length
    });
});

app.use("/estante-de-livros", rotaEstanteDeLivros);
app.use("/mais-lidos", roteadorMaisLidos);
app.use("/contato", roteadorContato);
app.use("/login", roteadorLogin);
app.use("/painel-posts", roteadorPainelPosts);

app.listen(process.env.PORT || 5000, (erro) => {
    if (erro) {
        throw erro;
    }
    else {
        console.log("Servidor Rodando Em: http://localhost:5000");
    }
})
