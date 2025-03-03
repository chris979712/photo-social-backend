require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI,{
    userNewParser: true, useUnifiedTopology: true})
    .then(()=>console.log("MongoDBConectado"))
    .catch((err)=> console.error("Error de conexion: ",err));

const photoRoutes = require("./routes/photoReoutes");
app.use("/api/photos",photoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));