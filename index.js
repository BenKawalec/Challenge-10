const generateHTML = require('./src/generate');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = []; 
 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Team manager name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter a manager");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter manager ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Manager's email")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Manager's office number")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Employee name?");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee's ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Employee's email")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Employee's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Employee's github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

  
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

