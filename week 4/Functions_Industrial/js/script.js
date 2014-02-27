/**
 * Created by DanielleMonroe on 2/26/14.
 */
//Functions Industrial

//Planning a trip

var patrons = prompt("How many of you will be joining us in beautiful Paris?");


function cost(){
    var price = 2500;
    var total = price * patrons;
    console.log("It will cost" + total + "for your trip.");
}

cost();

