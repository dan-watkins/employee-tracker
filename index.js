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
      console.log(answers.department);
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

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
