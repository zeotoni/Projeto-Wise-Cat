const http = require("http");
const express = require("express");
// const { header } = require("express/lib/request");
const app = express();
const cors = require("cors");
app.use(cors({
    origin: "*"
    
}));

app.get("/", (req, res) => {
    res.send("<h1>Servidor rodando com ExpressJS</h1>")
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));



