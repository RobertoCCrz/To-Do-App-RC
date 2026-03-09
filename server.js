const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/tareasDB")
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});