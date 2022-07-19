require('dotenv').config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

//seccion de coneccion a la base de datos
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.error(error);
});

database.once("connected", () => {
    console.log("Base de datos conectada.");
});

//seccion de aplicacion 

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(
        `Servidor express ejecutándose en http://${process.env.HOST}:${process.env.PORT}/`
    );
});