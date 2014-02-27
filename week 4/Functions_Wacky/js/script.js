/**
 * Created by DanielleMonroe on 2/27/14.
 */

//Functions Wacky

var gummyBears = function(candy, time){
    //how many gummy bears are eaten in an hour
    var perHour = candy * time; //the amount of candy times the amount of hours
  console.log(perHour);
}

gummyBears(20, 6);

var candy = alert("Do you like candy? Well of course you do! Who doesn't like candy?!");

var howMany = prompt("How many pieces of candy do will you eat in one hour?");

if(howMany < 10){
    //the amount of candy that can be eaten in an hour without it being to much
    console.log("Enjoy!");
}else if(howMany >= 10){
    //the amount of candy that is too much to be eaten in an hour
    console.log("Woah! Slow it down!");
}

