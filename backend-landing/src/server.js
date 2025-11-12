const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "portafolio",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Error al conectar con MySQL:", err);
    } else {
        console.log("✅ Conectado a MySQL correctamente.");
        connection.release(); // Liberamos la conexión
    }
});


app.get("/", (req, res) => {
    res.json({ message: "Servidor backend funcionando correctamente " });
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

//ruta crear 
app.post("/api/proyectos", (req, res)=> {
    const { titulo, descripcion, detalles, imagen, link } = req.body;

    //llevar los datos a la base de datos
    const query = "INSERT INTO proyectos (titulo, descripcion, detalles, imagen, link) VALUES (?, ?, ?, ?,?)";
    db.query(query, [titulo, descripcion, detalles, imagen, link], (err, results) => { {
        if (err) {
            console.error("❌ Error al crear proyecto:", err);      
            res.status(500).json({ error: "Error al crear el proyecto" });
        } else {
            res.status(201).json({ message: "Proyecto creado correctamente", datos: req.body });
        }       
    }});
}) 



const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
