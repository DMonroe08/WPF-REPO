/**
 * Created by DanielleMonroe on 2/25/14.
 */

//Circumference

var r = prompt("What is the radius of your circle?");

function circumference(){
    //circumference is radius times pie
    var radius = r; //this is the number placed in my the prompt for the radius
    var pie = 3.14; //this is how much pie equals
    var circumference = radius * pie; //this is the equation to calculate circumference
    console.log("The circumference of the circle is" +  circumference);
}

circumference();


//Stung!

var pounds = prompt("How much does the victim weigh in pounds? ");
//this is how much the victim weighs according to what is placed into the prompt

function killed(){
    var stings = 8.666666667; //this is how many bee stings it takes to kill an animal per pound
    var lbs = pounds; //this number will be given by the prompt and will tell how many pounds the victim is
    var stung = stings * lbs; //the equation to calculate how many stings it will take to kill an animal
    
}
