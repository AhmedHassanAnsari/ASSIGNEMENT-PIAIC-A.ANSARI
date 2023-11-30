//TASK1
const fruitChoices = [{ name: 'Apples', price: 200 },
    { name: 'Banana', price: 300 },
    { name: 'Watermelon', price: 100 },
    { name: 'Grapes', price: 300 }];
const vegetableChoices = [{ name: 'Fresh Spinach', price: 100 },
    { name: 'Fresh Bell Peppers (Per Piece)', price: 100 },
    { name: 'Fresh Cucumbers', price: 150 },
    { name: 'Fresh Carrots', price: 100 }];
import inquirer from 'inquirer';
const userDemand = await inquirer.prompt([
    {
        type: "input",
        name: 'GROCERY',
        message: 'what you want to buy(fruit/vegetable)?'
    }
]);
if (userDemand.GROCERY == 'fruit') { //here it check if user wanted to buy fruit,if it matches fruit then block of statement inside if are executed
    console.log('You opted to buy fruit,we have following fruits availabe and prices are mentioned');
    console.log(fruitChoices);
    const optFruit = await inquirer.prompt([
        {
            type: 'list',
            name: 'selected',
            message: 'select the fruit, you want to buy',
            choices: fruitChoices.map(choice => choice.name),
        }
    ]);
    console.log(`${optFruit.selected} is added to your cart`);
    const userResponse = await inquirer.prompt([
        {
            name: 'response',
            type: 'list',
            message: 'press yes if you want to generate a bill',
            choices: ["yes", 'no']
        }
    ]);
    let price;
    if (userResponse.response === 'yes') { //used to generate bill on user respond
        const selectedFruitIndex = fruitChoices.findIndex(choice => choice.name === optFruit.selected);
        const result = tBill(fruitChoices, selectedFruitIndex);
        console.log('Your bill is', result);
        const discountedResult = discount(result); // for calling discount function
        console.log(discountedResult); //to show total bill if discount is applied
    }
    else {
        console.log('Return to list for more selection');
    }
}
else if (userDemand.GROCERY == 'vegetable') //these statements will be  executed if consumer want to buy vegetable
 {
    console.log('You opted to buy vegetable,we have following vegetable availabe and prices are mentioned');
    console.log(vegetableChoices);
    const optVegetable = await inquirer.prompt([
        {
            name: 'selected',
            type: 'list',
            message: "select vegetable,you want to buy",
            choices: vegetableChoices.map(choice => choice.name),
        }
    ]);
    console.log(`${optVegetable.selected}'added to cart'`); //to ensure consumer item is added to cart
    const userResponse = await inquirer.prompt([
        {
            name: 'response',
            type: 'list',
            message: 'press yes if you want to generate a bill',
            choices: ['yes', "no"]
        }
    ]);
    if (userResponse.response == "yes") {
        const selectedVegetableIndex = vegetableChoices.findIndex(choice => choice.name === optVegetable.selected);
        const result = tBill(vegetableChoices, selectedVegetableIndex);
        console.log('your bill is', result);
        const discountedResult = discount(result);
        console.log(discountedResult); //to show total bill after discount
    }
    else {
        console.log('Return to list for more selection');
    }
}
else {
    console.log("NOT AVAILABLE"); // if consumer enter other thing than fruit/vegetable than this statement will be executed
}
//this is a function where all the processing for callculating total bill will be performed
function tBill(choices, selectedIndex) {
    if (selectedIndex >= 0 && selectedIndex < choices.length) {
        const totalBill = choices[selectedIndex].price; //for accessing the price of the item selected by consumer
        return totalBill;
    }
    else {
        console.log('Invalid index.');
        return 0;
    }
}
//for discount
function discount(result) {
    let discountedResult;
    //now this function will take total bill and check the condition and based on its result it will whether calculate discounted total and return or skip the discount if total bill is less than 150rs
    if (result >= 150) {
        discountedResult = result - 50;
        return `After discount totalBill is ${discountedResult}`;
    }
    else {
        return (result);
    }
}
//to ask the consumer the payment method
const payMethod = await inquirer.prompt([{
        name: "method",
        message: 'if you want to pay with cash enter 0 and if you want to pay with card enter 1'
    }]);
//check for what user has entered and based on it give the message.
for (let i = 0; i < 1; i++) {
    for (let r = 0; r < 1; r++) {
        if (payMethod.method == 0) {
            console.log('You opt to pay with cash');
        }
        else {
            console.log('You opt to pay with card');
        }
    }
    /*In task 1,main problem was in getting the total bill based on user choice*/
}
