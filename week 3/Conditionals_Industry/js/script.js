/**
 * Created by DanielleMonroe on 2/20/14.
 */

//making a page for a camp


var oldEnough = 8; //the minimum age to be able to go to the camp
var tooYoung = 7; //age that is too young to go to the camp
var maxAge = 15; //the maximum age allowed to be able to go to the camp

//if the child's age is between 8 and 15 they can go to the camp

if(tooYoung){
    //child can not go to the camp
    console.log("Sorry but your child is not old enough to go the this camp.");
}else if(oldEnough){
    //child can go to the camp
    console.log("Your child is old enough to attend this camp!");
}


