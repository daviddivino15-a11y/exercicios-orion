const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW()');
    res.json({ message: 'API extra funcionando!', db_time: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'error', details: err.message });
  }
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));