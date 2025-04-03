const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend
app.use(bodyParser.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto a tu usuario de MySQL
  password: '', // Cambia esto a tu contraseña de MySQL
  database: 'datos_usuarios' // Cambia esto al nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Ruta para guardar datos
app.post('/guardar', (req, res) => {
  const { nombre, correo, edad } = req.body;

  if (!nombre || !correo || !edad) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  const query = 'INSERT INTO usuarios (nombre, correo, edad) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, edad], (err, result) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      res.status(500).send('Error al guardar los datos.');
    } else {
      res.status(201).send('Datos guardados exitosamente.');
    }
  });
});

app.get('/mostrar', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener los datos:', err);
      res.status(500).send('Error al obtener los datos.');
    } else {
      res.json(result);
    }
  });
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


//para ejecutar: node server.js