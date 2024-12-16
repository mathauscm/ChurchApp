const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho absoluto para o banco de dados
const DB_PATH = path.resolve(__dirname, 'database', 'ARA.sqlite');

// Conectar ao banco SQLite
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        return console.error('Erro ao conectar ao banco ARA.sqlite:', err.message);
    }
    console.log('Conexão com ARA.sqlite estabelecida com sucesso!');
});

// Consulta com JOIN entre 'verse' e 'book'
db.serialize(() => {
    const query = `
        SELECT book.name AS book_name, verse.chapter, verse.verse, verse.text
        FROM verse
        INNER JOIN book ON verse.book_id = book.id
        LIMIT 1
    `;

    db.each(query, (err, row) => {
        if (err) {
            console.error('Erro ao consultar dados:', err.message);
        } else {
            console.log(`Livro: ${row.book_name}, Capítulo: ${row.chapter}, Versículo: ${row.verse}, Texto: ${row.text}`);
        }
    });
});

// Fechar a conexão
db.close((err) => {
    if (err) {
        return console.error('Erro ao fechar a conexão:', err.message);
    }
    console.log('Conexão com ARA.sqlite encerrada.');
});
