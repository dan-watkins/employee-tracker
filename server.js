const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "sample_db",
  },
  console.log("connected to db")
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
