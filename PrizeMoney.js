//Allow user input
var input = require('readline-sync');
//creating variable
var Rank, Other, Monies;
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
        Monies 1000;
        break;
    case 2:
        Monies 800;
        break;
    case 3:
        Monies 700;
        break;
    case 4:
        Monies 300;
        break;
    case 5:
        Monies 300;
        break;
    default:
        Monies 20;
        break;
}
console.log("Your prize money is $" + Monies);
