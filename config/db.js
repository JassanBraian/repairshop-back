const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo conexion: ${connection.connection.host}`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

module.exports = connectDB;
