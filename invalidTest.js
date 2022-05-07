//Allow user input
var input = require('readline-sync');
//declare variable
var first, second;
first = input.question("Please enter 1st number: ");
first = parseInt(first);
second = input.question("Please enter 2nd number: ");
second = parseInt(second);
//Brain of the operation
if (first > second)
{
    console.log("1st number is bigger");
}
else if (second > first)
{
    console.log("2nd number is bigger");
}
else if (first == second)
{
    console.log("Both numbers are equal");
}

else
{
    console.log("Sorry wrong input. Please try again. Good bye!");
}
