import inquirer from "inquirer";
let n1:number;
let n2:number;
let x:Number;
const userValues=await inquirer.prompt([{
    name:'n1',
    type:"input",                 //problem: was using single block of statement to receive both input.
message:'Enter first value',},
{
    name: "n2",
    type:"input",
message:'Enter second value'
}
])
const result=add(Number(userValues.n1),Number(userValues.n2)); //here the problem was it was performing concatenation,after using Number outside it started adding
console.log('sum of',userValues.n1, 'and',userValues.n2,'is', result);
function add(n1:number, n2:number){
return(n1+=n2);
}
