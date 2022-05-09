//Allow user input
var input = require('readline-sync');
//creating variable
var Rank, Monies;
//Asking user to type in rank:
Rank = input.question("Please enter your rank: ");
Rank = parseInt(Rank);
//Switch case logic for the program
if (isNaN(Rank))
{
    console.log("Please key in a number");
}
else
{
switch (Rank)
{
    case 1:
        Monies = 1000;
        break;
    case 2:
        Monies  = 800;
        break;
    case 3:
        Monies = 700;
        break;
    case 4:
        Monies = 300;
        break;
    case 5:
        Monies = 300;
        break;
    default:
        Monies = 20;
        break;
}
console.log("Your prize money is $" + Monies);
}
