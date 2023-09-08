const lib = require("./db/index.js");
const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "main",
    message: "What would you like to do?",
    choices: [
      {
        name: "View All Departments",
        value: "VIEW_ALL_DEPARTMENTS",
      },
      {
        name: "View All Roles",
        value: "VIEW_ALL_ROLES",
      },
      {
        name: "View All Employees",
        value: "VIEW_ALL_EMPLOYEES",
      },
      {
        name: "Add a Department",
        value: "ADD_A_DEPARTMENT",
      },
      {
        name: "Add a Role",
        value: "ADD_A_ROLE",
      },
      {
        name: "Add an Employee",
        value: "ADD_AN_EMPLOYEE",
      },
      {
        name: "Update Employee Role",
        value: "UPDATE_EMPLOYEE_ROLE",
      },
      {
        name: "Quit",
        value: "QUIT",
      },
    ],
  },
  {
    when: (answers) => answers.main === "ADD_A_DEPARTMENT",
    type: "input",
    name: "department",
    message: "Enter Department Name",
  },
  {
    when: (answers) => answers.main === "ADD_A_ROLE",
    type: "input",
    name: "roleName",
    message: "Enter Name",
  },
  {
    when: (answers) => answers.roleName != null,
    type: "input",
    name: "roleSalary",
    message: "Enter Salary",
  },
  {
    when: (answers) => answers.roleSalary != null,
    type: "input",
    name: "roleDepartment",
    message: "Enter Department",
  },
  {
    when: (answers) => answers.main === "ADD_AN_EMPLOYEE",
    type: "input",
    name: "employeeFirst",
    message: "Enter First Name",
  },
  {
    when: (answers) => answers.employeeFirst != null,
    type: "input",
    name: "employeeLast",
    message: "Enter Last Name",
  },
  {
    when: (answers) => answers.employeeLast != null,
    type: "input",
    name: "employeeRole",
    message: "Enter Role",
  },
  {
    when: (answers) => answers.employeeRole != null,
    type: "input",
    name: "employeeManager",
    message: "Enter Manager",
  },
  {
    when: (answers) => answers.main === "UPDATE_EMPLOYEE_ROLE",
    type: "input",
    name: "updateRole",
    message: "Select new Role for employee",
  },
];

function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    validateAnswer(answers);
  });
}

function validateAnswer(answers) {
  switch (answers.main) {
    case "VIEW_ALL_DEPARTMENTS":
      lib.getAllDepartments();
      break;
    case "VIEW_ALL_ROLES":
      lib.getAllRoles();
      break;
    case "VIEW_ALL_EMPLOYEES":
      lib.getAllEmployees();
      break;
    case "ADD_A_DEPARTMENT":
      lib.addDepartment(answers.department);
    case "ADD_A_ROLE":
      lib.addRole(answers.roleName, answers.roleSalary, answers.roleDepartment);
      break;
    case "ADD_AN_EMPLOYEE":
      lib.addEmployee(
        answers.employeeFirst,
        answers.employeeLast,
        answers.employeeRole,
        answers.employeeManager
      );
      break;
    case "QUIT":
      console.log("Bye!");
      process.exit();
  }
  setTimeout(() => {
    askQuestions(questions);
  }, 1000);
}

function init() {
  askQuestions(questions);
}

init();
