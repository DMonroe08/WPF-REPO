/**
 * Created by DanielleMonroe on 2/20/14.
 */


//will I go shopping

var bank = 2000; //amount of money in my bank account
var bills = 1500; //the amount of money my bills will cost

if((bank-bills) <= 300){
    //savings
    console.log("Save some money and go shopping next month.");
}else if((bank - bills) <299){
    //time for a shopping spree
    console.log("Not enough funds to splurge.");
}
