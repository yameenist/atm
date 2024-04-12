#! /usr/bin/env node

import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js";

let myBalance = 20000;
let myPin = 10023;

// console.log("your current balance is 10000")

let pinAns = await inquirer.prompt(
    
        {
            name :"pin",
            message : "enter your pin",
            type : "number",
        }
    
    );

    if (pinAns.pin === myPin)
     {

        console.log("correct pin code !!!")
          
        let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select option",
                type : "list",
                choices : ["withdrawal", "fast cash", "balance check"]
            }
        ]    

        );

        console.log(operationAns);
        if (operationAns.operation == "withdrawal") 
        
    {
        let cashwithdrawal = await inquirer.prompt(
            [
                {
                    name : "withdrawal",
                    message : "Enter the amount you want to withdrawal",
                    type : "number"

                }
            ]
            );
            
                if (myBalance >= cashwithdrawal.withdrawal)
               {
                  myBalance -= cashwithdrawal.withdrawal;
        console.log("your total balance is: " + myBalance)
               }
        else (console.log("Sorry insufficient balance")
        )
        }
        
        else if (operationAns.operation === "balance check") {
            console.log("your current balance is " + myBalance)
            
        }

        else if (operationAns.operation === "fast cash") {

            let fastcashAns = await inquirer.prompt(
                [
                    {
                        name : "Fastcash",
                        message : "please select amount",
                        type : "list",
                        choices : ["2000", "4000", "6000", "8000"]
                    }
                ]
            );
            myBalance -= fastcashAns.Fastcash;
            console.log("your balance is: " + myBalance) 
        }
         
    }

    else {console.log("Incorrect pin code!!!")
    }

  