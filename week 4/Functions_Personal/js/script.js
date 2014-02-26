/**
 * Created by DanielleMonroe on 2/26/14.
 */
//Functions Assignment - Personal

var trip = prompt("How many miles to you travel to work?"); //tells how far the trip to or from work is

var store = prompt("How many miles from work is the store?"); //tells how far the store is from work

function errand(){
    //how far will it be to go to work, the store, and back home
    var round = trip + store
    console.log(round);
}

errand();