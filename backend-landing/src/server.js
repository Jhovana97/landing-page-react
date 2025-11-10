const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portafolio",
});

db.connect((err) => {
    if (err) {
        console.error("❌ Error al conectar con MySQL:", err);
    } else {
        console.log("✅ Conectado a MySQL correctamente.");
    }
});

app.get("/", (req, res) => {
    res.json({ message: "Servidor backend funcionando correctamente 🚀" });
});

app.get("/api/proyectos", (req, res) => {
    const query = "SELECT * FROM proyectos";
    db.query(query, (err, results) => {
        if (err) {
            console.error("❌ Error al obtener proyectos:", err);
            res.status(500).json({ error: "Error al obtener los proyectos" });
        } else {
            res.json(results);
        }
    });
});

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
