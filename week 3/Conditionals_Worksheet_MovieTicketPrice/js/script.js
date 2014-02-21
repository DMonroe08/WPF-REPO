/**
 * Created by DanielleMonroe on 2/20/14.
 */


var age = prompt("How old are you?"); //gives the age of the customer
var discountPrice = age <= 10 || age >= 55; //if the age of the customer fall in these perimeters, than the discounted price is given
var regularFee = age > 10 || age < 55; //if the age of the customer falls in these perimeters than than the regular price is given

var time = prompt ("When will you be joining us for a show?");
var matinee = time >= 3 && time <= 5; //the discounted price is given

if(age == discountPrice || matinee){
    //the discounted price is given
    console.log("The ticket price is $7.");
}else {
    console.log("The ticket price is $12 ");
}