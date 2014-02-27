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

var howMany = prompt("How many pieces of candy do will you eat in one hour?");

if(howMany < 8){
    console.log("Enjoy!");
}else if(howMany >= 8){
    console.log("Woah! Slow it down!");
}

