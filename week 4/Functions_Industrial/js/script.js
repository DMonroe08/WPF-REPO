/**
 * Created by DanielleMonroe on 2/26/14.
 */
//Functions Industrial

//Planning a trip

var vacation = prompt("Thinking about a trip to Paris? Great!");
var patrons = prompt("How many of you will be joining us in beautiful Paris?");


function cost(){
    var price = 2500; //price per person for the trip
    var total = price * patrons; //how much the total trip will cost for the amount of patrons
    console.log("It will cost" + total + "for your trip.");
}

cost();

discount = (patrons < 5) ?  "Add people for a discount." : "You get a 10% discount"
    //determines if whether or not there will be a discount
console.log(discount);
