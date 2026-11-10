const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'rootpassword',
  database: process.env.DB_NAME || 'orion_db',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'Exercício 3 com integração à base de dados a funcionar!',
      db_time: result.rows[0].now,
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro de ligação à base de dados', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor a executar na porta ${PORT}`);
});