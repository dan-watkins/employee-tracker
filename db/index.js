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

function addDepartment(department) {
  const params = department
  const sql = `INSERT INTO department (department_name)
  VALUES (?)`
  db.query(sql, params, (err, departments) => {
    if (err) {
      console.log(err)
    }
    console.table(departments);
  })
}

function getAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary, role.department_id, department.department_name
  FROM role
  INNER JOIN department on role.department_id = department.id;`;
  db.query(sql, (err, roles) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    console.table(roles);
  });
}

// WHEN I choose to view all employees
// employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function getAllEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id 
  FROM employee
  INNER JOIN role on role.id = employee.role_id
  INNER JOIN department on department.id = role.department_id`;
  db.query(sql, (err, employees) => {
    if (err) {
      return res.status(500).json({ message: "error", error: message });
    }
    console.table(employees);
  });
}

module.exports = { getAllDepartments, getAllRoles, getAllEmployees, addDepartment };
