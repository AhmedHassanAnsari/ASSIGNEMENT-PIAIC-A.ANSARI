import inquirer from "inquirer";
const userValue=await inquirer.prompt([{
    name:'n1',
    type:"input",
    message:"Enter a number to check whether it is a even or odd Number",
}])
const result=check(userValue.n1);
console.log( userValue.n1,'is a',result);
function check(n1:number){
    if(n1%2==0)
    return('even number');
else{
    return('odd number')
}
}