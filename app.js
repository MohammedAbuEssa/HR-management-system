"use strict"
export let employees=[];
let header=document.getElementById("h3");
let div1E1=document.getElementById("card");
let myForm=document.getElementById("employeeForm");




export function Employee(fullName,department,level,imageURL,){
this.salary=0;
this.id=0;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageURL=imageURL;
this.salaryLevel(level);
this.idGenerater();
employees.push(this);
let netSalary=this.salary/7.5;
}


if (myForm) {
    myForm.addEventListener('submit',handleSubmit);
}


function handleSubmit(event) {
    event.preventDefault();
    let employeeName=event.target.eName.value;
    let employeeDep=event.target.department.value;
    let employeeLev=event.target.level.value;
    let employeeImg=event.target.image.value;
    console.log(employeeLev);
    let employeeNew= new Employee(employeeName,employeeDep,employeeLev,employeeImg);
employeeNew.render();
// employeeNew.tableRender();
saveData(employees);
}


Employee.prototype.idGenerater=function () {
let uniqueId=0;
uniqueId=Math.floor(Math.random() * (9999-1000-1)+1000);
this.id=uniqueId;
console.log(uniqueId);

}


Employee.prototype.salaryLevel=function (level){
   
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


function headerRender() {
    const h3E1=document.createElement("h3");
    h3E1.textContent=`HR-management-system`;
    if (header) {
        header.appendChild(h3E1);
    }

  
}

headerRender();

function saveData(data) {
    // localStorage.setItem("employees",employees);  Worng  
    let stringifyData=JSON.stringify(data);
    localStorage.setItem("employees",stringifyData);
}

function getData() {
   let retriveData= localStorage.getItem("employees");
   let arrayData=JSON.parse(retriveData);
if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
        new Employee(arrayData[i].fullName,arrayData[i].department,arrayData[i].level,arrayData[i].imageURL);
        employees[i].render();
        
    }
}




}

Employee.prototype.render=function(){

    // document.write(`<h4>The employee name is ${this.fullName} and his/her salary is ${this.salary}</h4>`);
// div1E1.style.display="flex";
// div1E1.style.flexWrap="wrap";
// div1E1.style.flexDirection="column";
if (div1E1) {
    div1E1.style.backgroundColor="#50757a";
}



const imgE1=document.createElement("img");
imgE1.src=this.imageURL;
imgE1.style.height="10em";
imgE1.style.borderRadius="50%";
if (div1E1) {
    div1E1.appendChild(imgE1); 
}

    const employeeInfo=document.createElement("h4");
    employeeInfo.textContent= `Name: ${this.fullName} - ID: ${this.id}`;
    if (div1E1) {
        div1E1.appendChild(employeeInfo);
    }

    // const brE1=document.createElement("br");
    // div1E1.appendChild(brE1);
    const employeeInfo2=document.createElement("h4");
    employeeInfo2.textContent= `Department: ${this.department} - Level: ${this.level} ${this.salary}`;
    if (div1E1) {
        div1E1.appendChild(employeeInfo2);
    }


}





// let ghazi= new Employee(1000,'Ghazi Samer','Administration','Senior',"./assets/img_avatar.png");
// let lana= new Employee(1001,'Lana Ali','Finance','Senior',"./assets/img_avatar.png");
// let tamara= new Employee(1002,'Tamara Ayoub','Marketing','Senior',"./assets/img_avatar.png");
// let safi= new Employee(1003,'Safi Walid','Administration','Mid-Senior',"./assets/img_avatar.png");
// let omar= new Employee(1004,'Omar Zaid','Development','Senior',"./assets/img_avatar.png");
// let rana= new Employee(1005,'Rana Saleh','Development','Junior',"./assets/img_avatar.png");
// let hadi= new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior',"./assets/img_avatar.png");




for (let index = 0; index < employees.length; index++) {
    employees[index].render();
    // console.log( employees[index]);
    
}


getData();
















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