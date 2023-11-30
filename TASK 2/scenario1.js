import inquirer from "inquirer";
let n1;
let n2;
let x;
const userValues = await inquirer.prompt([{
        name: 'n1',
        type: "input",
        message: 'Enter first value',
    },
    {
        name: "n2",
        type: "input",
        message: 'Enter second value'
    }
]);
const result = add(Number(userValues.n1), Number(userValues.n2)); //here the problem was it was performing concatenation,after using Number outside it started adding
console.log('sum of', userValues.n1, 'and', userValues.n2, 'is', result);
function add(n1, n2) {
    return (n1 += n2);
}
