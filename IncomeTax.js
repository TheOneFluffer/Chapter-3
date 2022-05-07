//Allow user input
var input = require('readline-sync');

//Create variables
var Citizenship, Income, Tax;
var Tax = 0;
var statusC = "C";
var statusf = "F";
Citizenship = input.question("Please enter C for Citizen or F for Foreigner : ");

//if else statement to test if it is upper or lower case C or F.
if (Citizenship == "C" || Citizenship == "c")
{
    //nestled if statement to perform the operation for citizens
    console.log("Your status is Citizen. Please proceed.\n");
    Income = input.questionFloat("Please enter your annual income: $");
    if (Income <= 0)
    {
        console.log("Sorry, please key in a number greater than 0. Good bye!");
    }
    else if (Income < 10000.00)
    {
        Tax = 100;
        console.log("Tax computed for Citizen status for $" + Income + " is $" + Tax);
    }

    else if (Income >= 10000.00 && Income < 25000.00)
    {
        Tax = Income * 0.05;
        console.log("Tax computed for Citizen status for $" + Income + " is $" + Tax);
    }

    else
    {
        Tax = Income * 0.15;
        console.log("Tax computed for Citizen status for $" + Income + " is $" + Tax);
    }
}

else if (Citizenship == "F" || Citizenship == "f")
{
    //If foreigners are exempted from taxes
    //console.log("You are exempted from tax.");
    //nestled if statement to perform the operation for foreigners
    console.log("Your status is Foreigner. Please proceed.\n");
    Income = input.questionFloat("Please enter your annual income: $");
    if (Income <= 0)
    {
        console.log("Sorry, please key in a number greater than 0. Good bye!");
    }
    else if (Income < 8000.00)
    {
        Tax = 150;
        console.log("Tax computed for Foreigner status for $" + Income + " is $" + Tax);
    }

    else if (Income >= 8000.00 && Income <= 15000.00)
    {
        Tax = Income * 0.10;
        console.log("Tax computed for Foreigner status for $" + Income + " is $" + Tax);
    }

    else
    {
        Tax = Income * 0.20;
        console.log("Tax computed for Foreigner status for $" + Income + " is $" + Tax);
    }
}
else
{
    console.log("Sorry, wrong input. Please try again. Good bye!");
}