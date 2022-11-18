let employees = [];

function Employee (name,jTitle, salary, status) {
    this.name = name;
    this.jobTitle = jTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name: " + name + " Job Title: " + jTitle + " Salary: " + salary + " Status: " + this.status);
    }
} 

var employee1 = new Employee("Sara", "Secretary", "$50,000");
var employee2 = new Employee("John", "Janitor", "$60,000");
var employee3 = new Employee("Alex", "Teacher", "$100,000", "Part-Time");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);
