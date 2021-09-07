require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/status', (req, res) => {
  res.send('Server running...');
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
