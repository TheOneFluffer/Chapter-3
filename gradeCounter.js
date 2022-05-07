//Allow user input
var type = require('readline-sync');

//Declare Variable
var Score;
Score = type.question("Please enter score: ");
Score = parseInt(Score);
//Switch case for logic

//if else for logic
if (Score < 50)
{
    console.log("Your grade is F");
}

else if (Score >= 50 && Score < 60)
{
    console.log("Your grade is D");
}

else if (Score >= 60 && Score < 70)
{
    console.log("Your grade is C");
}

else if (Score >= 70 && Score < 80)
{
    console.log("Your grade is B");
}

else if (Score >= 80)
{
    console.log("Your grade is A");
}