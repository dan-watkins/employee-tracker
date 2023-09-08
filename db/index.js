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
  const params = department;
  const sql = `INSERT INTO department (department_name)
  VALUES (?)`;
  db.query(sql, params, (err, departments) => {
    if (err) {
      console.log(err);
    }
    console.table(departments);
  });
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

function addRole(role, salary, department) {
  const params = [role, salary, department];
  const sql = `INSERT INTO role (title, salary, department_id)
  VALUES (?, ?, ?)`;
  db.query(sql, params, (err, roles) => {
    if (err) {
      console.log(err);
    }
    console.table(roles);
  });
}

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

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee(first, last, role, manager) {
  const params = [first, last, role, manager];
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES (?, ?, ?, ?)`;
  db.query(sql, params, (err, employee) => {
    if (err) {
      console.log(err);
    }
    console.table(employee);
  });
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
};
