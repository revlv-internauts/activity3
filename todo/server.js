const express = require('express');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const csvWriter = createCsvWriter({
    path: path.join(__dirname, 'public', 'todo.csv'),
    header: [
        {id: 'task', title: 'Task'},
        {id: 'completed', title: 'Completed'}
    ]
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post('/api/tasks', async (req, res) => {
    try {
        const { task, completed } = req.body;
        await csvWriter.writeRecords([{ task, completed }]);
        res.json({ success: true, message: 'Task saved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error saving task' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
