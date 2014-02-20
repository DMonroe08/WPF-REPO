//last Chance for Gas

var mpg = 25; //miles per gallon the car will burn off gas
var reading = 50; //the amount, in percent, of gas left in the car
var cap = 12; //the capacity of the gas tank
var miles = 200; //the amount of miles to the next gas station
var tank = reading/100 * cap; //the amount of gas left in the tank

if(tank * mpg < miles){
    //stop for gas
    console.log("You only have X gallons of gas in your tank, better get gas now while you can!");
}else{
    //plenty of gas
    console.log("Yes you can make it without stopping for gas!");
