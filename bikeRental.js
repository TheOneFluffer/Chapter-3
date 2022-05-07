//Allow user input
var input = require('readline-sync');

//Create variables
var Discount, Bike, Hours, Fee, DiscountedFee;
Hours = 0;
const Sseater = 5.5;
const Dseater = 7.8;
Fee = 0.0;

//Start of the program
Bike = input.questionInt("Welcome to Speed Wheels, the freshest, hottest bikes of Singapore!\n Enter bicycle type: \n (1) Single Seater\t (2) Double Seater\n >> ");

//if else statement to run the code
/*if (Bike > 2)
{
    console.log("Sorry, you can only type in 1 or 2 only!");
}
//This is the logic for first bike, the second is just a copy with different price
else if (Bike == 1)
{
    Hours = input.questionInt("Enter number of hours rented: ");
    if (Hours <= 0)
    {
        console.log("Sorry, you cannot put 0 or negative numbers!");
    }
    else if (Hours >= 1 && Hours < 3)
    {
        Fee = Sseater * Hours;
        console.log("Total Rental Fee: $" + Fee);
    }
    else if (Hours >= 3)
    {
        Fee = Sseater * Hours;
        Discount = Fee * 0.30;
        DiscountedFee = Fee - Discount;
        console.log("Total Rental Fee: $" + DiscountedFee);
    }
}

else if (Bike == 2)
{
    Hours = input.questionInt("Enter number of hours rented: ");
    if (Hours <= 0)
    {
        console.log("Sorry, you cannot put 0 or negative numbers!");
    }
    else if (Hours >= 1 && Hours < 3)
    {
        Fee = Dseater * Hours;
        console.log("Total Rental Fee: $" + Fee);
    }
    else if (Hours >= 3)
    {
        Fee = Dseater * Hours;
        Discount = Fee * 0.30;
        DiscountedFee = Fee - Discount;
        console.log("Total Rental Fee: $" + DiscountedFee);
    }
}*/
//switch case method
switch (Bike)
{
    case 1:
        Hours = input.questionInt("Enter number of hours rented: ");
        if (Hours <= 0)
        {
            console.log("Sorry, you cannot put 0 or negative numbers!");
        }
        else if (Hours >= 1 && Hours < 3)
        {
            Fee = Sseater * Hours;
            console.log("Total Rental Fee: $" + Fee);
        }
        else if (Hours >= 3)
        {
            Fee = Sseater * Hours;
            Discount = Fee * 0.30;
            DiscountedFee = Fee - Discount;
            console.log("Total Rental Fee: $" + DiscountedFee);
        }
        break;
    case 2:
        Hours = input.questionInt("Enter number of hours rented: ");
        if (Hours <= 0)
        {
            console.log("Sorry, you cannot put 0 or negative numbers!");
        }
        else if (Hours >= 1 && Hours < 3)
        {
            Fee = Dseater * Hours;
            console.log("Total Rental Fee: $" + Fee);
        }
        else if (Hours >= 3)
        {
            Fee = Dseater * Hours;
            Discount = Fee * 0.30;
            DiscountedFee = Fee - Discount;
            console.log("Total Rental Fee: $" + DiscountedFee);
        }
        break;
    default:
        console.log("Sorry, you cannot put 0 or negative numbers!");
        break;
}