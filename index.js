const express = require('express');
const app = express();
const port = 3000;

app.get('/api/saludo', (req, res) => {
    res.json({ message: '¡Hola! Tu API está funcionando desde un solo archivo' });
});

app.get('/api/nombre', (req, res) => {
    res.json({ nombre: 'Carolina García' });
});

app.get('/api/escuela', (req, res) => {
    res.json({ escuela: 'Universidad Tecnológica de Torreón' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
