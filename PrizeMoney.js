//Allow user input
var input = require('readline-sync');
//creating variable
var Rank, Other;
Other = 6;
//Asking user to type in rank:
Rank = input.questionInt("Please enter your rank: ");
//Switch case logic for the program
switch (Rank)
{
    case 0:
        console.log("Please key in a number");
        break;
    case 1:
        console.log("Your prize money is $1000.");
        break;
    case 2:
        console.log("Your prize money is $800.");
        break;
    case 3:
        console.log("Your prize money is $700.");
        break;
    case 4:
        console.log("Your prize money is $300.");
        break;
    case 5:
        console.log("Your prize money is $300.");
        break;
    default:
        console.log("Your prize money is $20.");
        break;
}