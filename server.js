const express = require("express");
const connection = require("./config/connection");
const PORT = process.env.PORT || 3001;
const app = express();

connection.mysql();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
