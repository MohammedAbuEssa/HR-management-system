import { employees,Employee } from "./app.js";


let tr1=document.getElementById("firstRow");
let tr2=document.getElementById("seRow");
let tr3=document.getElementById("thRow");
let tr4=document.getElementById("fuRow");
let tr5=document.getElementById("footer");


function departmentEmployeesNum(departmentName) {
    let sum=0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department==departmentName) {
            sum++;
        }
        
    }
    console.log(sum);
    return sum;
}

function departmentSalaryAvg(departmentName) {
    let salaryAvg=0;
    let sum=0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department==departmentName) {
            salaryAvg+=employees[i].salary;
            sum++;
        }
        
    }
    salaryAvg=salaryAvg/sum;

    return salaryAvg;
}

function departmentSalaryTotal(departmentName) {
    let salaryTotal=0;
    let sum=0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department==departmentName) {
            salaryTotal+=employees[i].salary;
            sum++;
        }
        
    }
    return salaryTotal;
}



//  Employee.prototype.tableRender= function(){
// Administration
const numOfAdTeam=document.createElement("td");
numOfAdTeam.textContent= departmentEmployeesNum("Administration");
tr1.appendChild(numOfAdTeam);

const salaryAvgAd=document.createElement("td");
salaryAvgAd.textContent= departmentSalaryAvg("Administration");
tr1.appendChild(salaryAvgAd);

const salaryTotalAd=document.createElement("td");
salaryTotalAd.textContent= departmentSalaryTotal("Administration");
tr1.appendChild(salaryTotalAd);
//Marketing
const numOfMaTeam=document.createElement("td");
numOfMaTeam.textContent= departmentEmployeesNum("Marketing");
tr2.appendChild(numOfMaTeam);

const salaryAvgMa=document.createElement("td");
salaryAvgMa.textContent= departmentSalaryAvg("Marketing");
tr2.appendChild(salaryAvgMa);

const salaryTotalMa=document.createElement("td");
salaryTotalMa.textContent= departmentSalaryTotal("Marketing");
tr2.appendChild(salaryTotalMa);
//Development
const numOfDeTeam=document.createElement("td");
numOfDeTeam.textContent= departmentEmployeesNum("Development");
tr3.appendChild(numOfDeTeam);

const salaryAvgDe=document.createElement("td");
salaryAvgDe.textContent= departmentSalaryAvg("Development");
tr3.appendChild(salaryAvgDe);

const salaryTotalDe=document.createElement("td");
salaryTotalDe.textContent= departmentSalaryTotal("Development");
tr3.appendChild(salaryTotalDe);
//Finance
const numOfFiTeam=document.createElement("td");
numOfFiTeam.textContent= departmentEmployeesNum("Finance");
tr4.appendChild(numOfFiTeam);

const salaryAvgFi=document.createElement("td");
salaryAvgFi.textContent= departmentSalaryAvg("Finance");
tr4.appendChild(salaryAvgFi);

const salaryTotalFi=document.createElement("td");
salaryTotalFi.textContent= departmentSalaryTotal("Finance");
tr4.appendChild(salaryTotalFi);
//Footer
const numOfTeam=document.createElement("td");
numOfTeam.textContent=departmentEmployeesNum("Administration")+ departmentEmployeesNum("Marketing")+departmentEmployeesNum("Development")+departmentEmployeesNum("Finance");
tr5.appendChild(numOfTeam);

const salaryAvgTeam=document.createElement("td");
salaryAvgTeam.textContent=departmentSalaryAvg("Administration")+ departmentSalaryAvg("Marketing")+departmentSalaryAvg("Development")+departmentSalaryAvg("Finance");
tr5.appendChild(salaryAvgTeam);

const salaryTotalTeam=document.createElement("td");
salaryTotalTeam.textContent=departmentSalaryTotal("Administration")+ departmentSalaryTotal("Marketing")+departmentSalaryTotal("Development")+departmentSalaryTotal("Finance");
tr5.appendChild(salaryTotalTeam);
//  }

console.log(employees);
