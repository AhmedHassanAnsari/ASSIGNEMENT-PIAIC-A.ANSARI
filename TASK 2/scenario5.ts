import inquirer from "inquirer";

const userValue=await inquirer.prompt([{
    name:'temp',
    type:'input',
    message:'Enter temperature in celsius'
}])
const result=tempCelsius(userValue.temp);
console.log( userValue.temp,'degree celsius',"in Farenheit is",result,"degrees Fahrenheit");

function tempCelsius(Ctemp:number){
return(9/5*Ctemp+32);
    }