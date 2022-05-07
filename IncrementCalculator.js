//Allow user input
var type = require('readline-sync');

//creating variables
var Salary, Years;

//variable of years
Years = type.question("Please enter your year(s) of service: ");
Years = parseInt(Years);

//variable of old salary
Salary = type.question("Please enter your salary: $");
Salary = parseInt(Salary);

//Brain of the operation

if (isNaN(Years) || Years <= 0)
{
    console.log("Sorry invalid input(s). Please try again. Good bye!");
}
else
{
    if (isNaN(Salary) || Salary <= 0)
    {
        console.log("Sorry invalid input(s). Please try again. Good bye!");
    }
    else
    {
        if (Years < 10)
        {
            if (Salary < 1000)
            {
                console.log("Congratulations, your increment is : $100");
            }
            else if (Salary >= 1000 && Salary < 2000)
            {
                console.log("Congratulations, your increment is : $200");
            }
            else if (Salary >= 2000)
            {
                console.log("Congratulations, your increment is : $300");
            }
        }
        else if (Years >= 10)
        {
            if (Salary < 1000)
            {
                console.log("Congratulations, your increment is : $200");
            }
            else if (Salary >= 1000 && Salary < 2000)
            {
                console.log("Congratulations, your increment is : $300");
            }
            else if (Salary >= 2000)
            {
                console.log("Congratulations, your increment is : $400");
            }
        }
    }
}