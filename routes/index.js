const express = require("express");

const departmentRouter = require("./departments");
const employeeRouter = require("./employees");
const roleRouter = require("./roles");

const app = express();

app.use("/departments", departmentRouter);
app.use("/employees", employeeRouter);
app.use("/roles", roleRouter);

module.exports = app;
