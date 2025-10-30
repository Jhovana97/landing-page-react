import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portafolio", 
});

db.connect((err) => {
    if (err) console.error("Error al conectar a MySQL:", err.message);
    else console.log(" Conectado a MySQL");
});

// Ruta para obtener proyectos
app.get("/api/proyectos", (req, res) => {
    db.query("SELECT * FROM proyectos", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Servidor escuchando en puerto 5000
app.listen(5000, () => console.log("Servidor backend corriendo en http://localhost:5000"));
