//Allow user input
var type = require('readline-sync');

//creating variables
var Salary, Years, Increment;

//variable of years
Years = type.question("Please enter your year(s) of service: ");
Years = parseInt(Years);
NaN = 0;
console.log(Years);
//variable of old salary
Salary = type.question("Please enter your salary: $");
Salary = parseInt(Salary);
//Brain of the operation
//Check if years is 0
if (Years <= 0 || Years == NaN )
{
    if (Salary < 500)
    {
        console.log("Sorry invalid input(s). Please try again. Good bye!");
    }

    else if (Salary <= 0)
    {
        console.log("Sorry invalid input(s). Please try again. Good bye!");
    }
}

//Less than 10 years and less than $1000 
if (Years < 10)
{
    if (Salary < 1000)
    {
        Increment = 100;
        console.log("Congratulations, your increment is : $" + Increment);
    }
    //$1000 or less than $2000
    else if (Salary >= 1000 && Salary < 2000)
    {
        Increment = 200;
        console.log("Congratulations, your increment is : $" + Increment);
    }
    //$2000 or more
    else if (Salary > 2000)
    {
        Increment = 300;
        console.log("Congratulations, your increment is : $" + Increment);
    }
}

else if (Years >= 10)
{
    if (Salary < 1000)
    {
        Increment = 200;
        console.log("Congratulations, your increment is : $" + Increment);
    }
    //$1000 or less than $2000
    else if (Salary >= 1000 && Salary < 2000)
    {
        Increment = 300;
        console.log("Congratulations, your increment is : $" + Increment);
    }
    //$2000 or more
    else if (Salary > 2000)
    {
        Increment = 400;
        console.log("Congratulations, your increment is : $" + Increment);
    }
}