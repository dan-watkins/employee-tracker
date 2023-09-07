const db = require("../config/connection").mysql();

function getAllDepartments() {
  const sql = `SELECT id, department_name FROM department`;
  db.query(sql, (err, departments) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    console.table(departments);
  });
}

function getAllRoles() {
  const sql = `SELECT id, title, salary, department_id FROM role`;
  db.query(sql, (err, roles) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    console.table(roles);
  });
}

function getAllEmployees() {
  const sql = `SELECT id, first_name, last_name, role_id, manager_id FROM employee`;
  db.query(sql, (err, employees) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    console.table(employees);
  });
}

module.exports = { getAllDepartments, getAllRoles, getAllEmployees };
