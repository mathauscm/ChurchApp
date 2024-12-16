const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
