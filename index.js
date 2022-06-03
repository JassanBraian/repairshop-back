const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//Routes
const userRoutes = require('./routes/userRoutes');

connectDB();
dotenv.config();

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
})
