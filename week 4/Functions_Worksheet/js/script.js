/**
 * Created by DanielleMonroe on 2/25/14.
 */


var r = prompt("What is the radius of your circle?");

function circumference(){
    //circumference is radius times pie
    var radius = r;
    var pie = 3.14;
    var circumference = radius * pie;
    console.log(circumference);
}

circumference();