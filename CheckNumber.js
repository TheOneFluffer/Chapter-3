//Allow user input
var input = require('readline-sync');
//creating variables
var Integer, Divisible1, Divisible2;
Integer = input.question("Enter an integer: ");
Divisible1 = Integer % 5;
Divisible2 = Integer % 6;
//Starting off

if (Integer <= 0 || isNaN(Integer))
{
    console.log("Please enter an integer!");
}

else if (Divisible1 == 0 && Divisible2 == 0)
{
    console.log(Integer + " is divisible by both 5 and 6.");
}

else if (Divisible1 == 0 || Divisible2 == 0)
{
    console.log(Integer + " is divisible by 5 or 6, but not both");
}

else if (Divisible1 > 0 && Divisible2 > 0)
{
    console.log(Integer + " is not divisible by 5 or 6");
}