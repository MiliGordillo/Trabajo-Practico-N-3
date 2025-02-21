import express from 'express';

const app = express();
const PORT = 3000;

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad; // Captura el parámetro de consulta "edad"
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
