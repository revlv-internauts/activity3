const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const PORT = 42069;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)");
    db.run("CREATE TABLE todos (id INTEGER PRIMARY KEY, name TEXT, user_id INTEGER)");
    
    bcrypt.hash('1234', 10, (err, hash) => {
        db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['gene', hash]);
    });
});

function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json({ error: "Unauthorized" });
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (err || !user) return res.status(400).json({ success: false });
        bcrypt.compare(password, user.password, (err, match) => {
            if (match) {
                req.session.userId = user.id;
                res.json({ success: true, redirect: '/index.html' });
            } else {
                res.status(400).json({ success: false });
            }
        });
    });
});

app.post('/logout', (req, res) => {
    req.session.destroy(() => res.json({ success: true }));
});

app.get('/todos', isAuthenticated, (req, res) => {
    db.all("SELECT * FROM todos WHERE user_id = ?", [req.session.userId], (err, rows) => {
        res.json(rows);
    });
});

app.post('/todos', isAuthenticated, (req, res) => {
    const { name } = req.body;
    db.run("INSERT INTO todos (name, user_id) VALUES (?, ?)", [name, req.session.userId], () => {
        res.json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});

