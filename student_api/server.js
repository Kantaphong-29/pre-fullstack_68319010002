require('dotenv').config();

const express = require('express');
const cors = require('cors');
const studentRoutes = require('./src/routes/student.route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message : 'Kanta is Running'})
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on http://localhost:${PORT}');
})