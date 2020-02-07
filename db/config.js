require("dotenv").config({ encoding: "utf8" });

//database config MYSQL + KNEX
module.exports = knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.BACKEND_DB_HOST,
    user: process.env.BACKEND_DB_USER,
    password: process.env.BACKEND_DB_PASSWORD,
    database: process.env.BACKEND_DB_NAME
  }
});

//database config to MONGODB + MONGOOSE
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
