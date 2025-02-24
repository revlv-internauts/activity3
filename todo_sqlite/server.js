const fs = require('fs')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3');

const path = require('path');
const PORT = 42069
const app = express();
const DATABASE_PATH = 'todos.db'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const db = new sqlite3.Database(DATABASE_PATH, (err) => {
	if (err) {
		console.error('Error opening database', err.message);
	} else {
		console.log('Connected to the SQLite database');
		db.run(`CREATE TABLE IF NOT EXISTS todos (
		id INTEGER PRIMARY KEY,
		name TEXT NOT NULL,
		is_completed INTEGER DEFAULT 0
		)`);
	}
});

function getTodos(callback) {
	const sql = `SELECT id, name, is_completed as isCompleted FROM todos`;
	db.all(sql, [], (err, rows) => {
		if (err) {
			console.error('Error querying database', err.message);
			callback([]);
		} else {
			callback(rows);
		}
	});
}

app.get('/', function(_, resp) {
	resp.sendFile(path.join(__dirname, 'public',  '/index.html'));
});

app.get('/todos', function(req, resp) {
	getTodos((todos) => {
	resp.json({ data: todos })
	});
});

app.post('/todos', function(req, resp) {
	const todo = {
		id: +new Date(),
		name: req.body.name,
		is_completed: false
	};

	const sql = `INSERT INTO todos (id, name, is_completed) VALUES (?, ?, ?)`;
	db.run(sql, [todo.id, todo.name, todo.is_completed], function(err) {
		if (err) {
			console.error('Error inserting todo', err.message);
			return resp.status(500).json({error: 'Failed to save todo' });
		}
		getTodos((todos) => {
			resp.json({ data: todos });
		});
	});
});

app.listen(PORT, function() {
	console.log(`Running on ${PORT}`)
});
