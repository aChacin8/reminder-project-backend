import express from 'express'; // Importamos librería para crear servidores
import mysql2 from 'mysql2'; // Importamos la librería para usar MySQL
import cors from 'cors'; // Permite el intercambio de recursos entre el frontend y backend
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
import jwt from 'jsonwebtoken'; // Importamos la librería para crear y verificar tokens JWT
import bcrypt from 'bcrypt'; // Importamos la librería para encriptar contraseñas

const app = express(); // Crea la aplicación Express
app.use(cors()); // Habilita la comunicación entre el frontend y backend
app.use(express.json()); // Recibe datos en formato JSON

const db = mysql2.createPool({ // Configuración de la base de datos
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'reminder_db', 
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0 
});

app.post('/register', async (req, res) => {
    const { first_name, last_name, gender, location, phone_number, email, password } = req.body;

    try {
        const [result] = await db.promise().query(
            'INSERT INTO users (first_name, last_name, gender, location, phone_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [first_name, last_name, gender, location, phone_number, email, password]
        );
        res.json({ message: "Usuario registrado con éxito", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post ('/login', async (req,res) => {
    const {email, password} = req.body;
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
