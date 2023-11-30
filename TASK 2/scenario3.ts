import inquirer from "inquirer";

const userValue=await inquirer.prompt([{
    name:"w",
    type:"input",
    message:"enter width of rectangle",
},
{
    name:'h',
    type:"input",
    message:"enter height of rectangle",
}])
const result=calculateArea(userValue.w,userValue.h);
console.log('Area of Rectangle is',result,'square units');
function calculateArea(Width:number,height:number){
    return(Width*height);
}
