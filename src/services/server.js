import express from 'express'; // Importamos librería para crear servidores
import mysql2 from 'mysql2'; // Importamos la librería para usar MySQL
import cors from 'cors'; // Permite el intercambio de recursos entre el frontend y backend
import jwt from 'jsonwebtoken'; // Importamos la librería para crear y verificar tokens JWT
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv'; // Importamos la librería para manejar variables de entorno
dotenv.config();

const app = express(); // Crea la aplicación Express
app.use(cors()); // Habilita la comunicación entre el frontend y backend
app.use(express.json()); // Manejar servidor en formato JSON

const db = mysql2.createPool({ // Configuración de la base de datos
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'reminder_db', 
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0 
});

const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey"; // Clave secreta para firmar los tokens JWT

app.post('/register', async (req, res) => {
    const { first_name, last_name, gender, location, phone_number, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10); // Encriptar la contraseña

        const [result] = await db.promise().query(
            'INSERT INTO users (first_name, last_name, gender, location, phone_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)', // Consulta SQL para insertar un nuevo usuario
            [first_name, last_name, gender, location, phone_number, email, password]
        );
        res.json({ message: "Usuario registrado con éxito", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
});

app.post ('/login', async (req,res) => {
    const {email, password} = req.body;
    try {
        const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]); // Consulta SQL para buscar el usuario por email
        if (users.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const user = users[0];
        const passwordMatch = await bcrypt.compare (password, user.password); // Compara la contraseña ingresada con la almacenada en la base de datos
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign ({id_user: user.id_user}, SECRET_KEY, {expiresIn: '1h'}); // Genera un token JWT
        res.json({ message: 'Inicio de sesión exitoso', token }); // Devuelve el token al cliente

    } catch (error) {
        res.status(500).json({ error: error.message });
    };
});

const verifyToken = (req, res, next) => {
    const token = req.header ['authorization']; // Obtiene el token del encabezado de autorización
    if (!token) {
        return res.status(403).json({ message: 'Token requerido' });
    }

    jwt.verify (token.split (' ')[1], SECRET_KEY, (error, decoded)=> {
        if (error) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.id_user = decoded.id_user; // Almacenamos el id del usuario
        next(); // Funcion de express que permite continuar con la siguiente función de middleware 
    });
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
