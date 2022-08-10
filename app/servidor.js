const http = require("http");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
app.use(cors({
    origin: "*",
    Headers: 'Set-Cookie: flavor=choco; SameSite=None; Secure'
}));

app.get("/", (req, res) => {
    res.send("<h1>Servidor rodando com ExpressJS</h1>")
});

http.createServer(app).listen(port, () => console.log("Servidor rodando local na porta 3000"));



