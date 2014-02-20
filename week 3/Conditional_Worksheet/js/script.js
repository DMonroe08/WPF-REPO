/**
 * Created by DanielleMonroe on 2/20/14.
 */

//must be 250 lbs or more to enter contest

var heavyEnough = 285; //the weight of a contestant
var lightWeight = 249; //the weight of another contestant
var justRight = 250; //the minimum weight allowed to enter contest

if(heavyEnough > justRight){
    //allowed to enter the contest
    console.log("Good luck!");
}else{
    //too light
    console.log("Chunk up and try again next year");
}
