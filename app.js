const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

const checkAuth = function(req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("Esta logado, pode continuar");
        next();
    } else {
        console.log("Nao esta logado");
        res.status(401).send("Não autorizado");
    }
};


app.get("/", function(req, res) {
    res.sendFile(basePath + "/index.html");
});


app.get("/sobre", function(req, res) {
    res.sendFile(basePath + "/sobre.html");
});


app.get("/contato", function(req, res) {
    res.sendFile(basePath + "/contato.html");
});


app.use(function(req, res) {
    res.status(404).sendFile(basePath + "/404.html");
});

app.listen(8181, function(erro) {
    if (erro) {
        console.log("Erro!");
    } else {
        console.log("Servidor iniciado ");
    }
});
