const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname,)));
app.use(express.json());

// Kết nối MySQL
const dbConfig = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DB || 'appdb'
};

// Route chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API lấy danh sách users
app.get('/api/users', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM users');
        await connection.end();

        res.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// API thêm user mới
app.post('/api/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );
        await connection.end();

        res.json({ id: result.insertId, name, email });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to add user' });
    }
});

// Health check
app.get('/health', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute('SELECT 1');
        await connection.end();
        res.json({ status: 'OK', database: 'Connected' });
    } catch (error) {
        res.status(500).json({ status: 'Error', database: 'Disconnected' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});