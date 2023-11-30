import inquirer from "inquirer"

const userString=await inquirer.prompt([{
    name:'string',
    type:"input",
    message:'Enter a  string you want to reverse'
}])
const result = reverseString(userString.string);
console.log('Reverse of',userString,'is',result);
function reverseString(userString:string){
    return(userString.split('').reverse().join(''));
}