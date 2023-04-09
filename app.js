"use strict"
let employees=[];

function Employee(id,fullName,department,level,imageURL,){
this.salary=0;
this.id=id;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageURL=imageURL;
this.salaryLevel= function (level){
    console.log(level);
switch (level) {
    case "Senior":
        this.salary=Math.floor(Math.random() * (2000-1500-1)+1500);
        break;
case "Mid-Senior":
    this.salary=Math.floor(Math.random() * (1500-1000-1)+1000);
    break;
    case "Junior":
        this.salary=Math.floor(Math.random() * (1000-500-1)+500);
        break;

    default:

        break;
}

}

this.salaryLevel(level);
employees.push(this);

let netSalary=this.salary/7.5;
}

Employee.prototype.render=function(){
    document.write(`<h4>The employee name is ${this.fullName} and his/her salary is ${this.salary}</h4>`);
}


let ghazi= new Employee(1000,'Ghazi Samer','Administration','Senior');
let lana= new Employee(1001,'Lana Ali','Finance','Senior');
let tamara= new Employee(1002,'Tamara Ayoub','Marketing','Senior');
let safi= new Employee(1003,'Safi Walid','Administration','Mid-Senior');
let omar= new Employee(1004,'Omar Zaid','Development','Senior');
let rana= new Employee(1005,'Rana Saleh','Development','Junior');
let hadi= new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior');




for (let index = 0; index < employees.length; index++) {
    employees[index].render();
    // console.log( employees[index]);
    
}




























//Testing

// let Test="Junior";
// let asalary=0;
// switch (Test) {
//     case "Senior":
//         asalary=Math.floor(Math.random() * (2000-1500-1)+1500);
//         break;
// case "Mid-Senior":
//     asalary=Math.floor(Math.random() * (1500-1000-1)+1000);
//     break;
//     case "Junior":
//         asalary=Math.floor(Math.random() * (1000-500-1)+500);
//         break;

//     default:
//         break;
// }

// console.log(asalary);