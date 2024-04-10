#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 10023;
// console.log("your current balance is 10000")
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAns.pin === myPin) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "balance check"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please type amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your balance is: " + myBalance);
    }
    else if (operationAns.operation === "balance check") {
        console.log("your current balance is " + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "Fastcash",
                message: "please select amount",
                type: "list",
                choices: ["2000", "4000", "6000", "8000"]
            }
        ]);
        myBalance -= fastcashAns.Fastcash;
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
