//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
 var numwin = 0;
 var you = "";
 var com = "";
 var winner = "";
 var choises = ["rock","paper","scissors"];
  
//FUNCTIONS

function forceLower(){
 var x = $("#type").val().toLowerCase();
 console.log(x);
}
 
function check() {
    forceLower();
var x = $("#type").val().toLowerCase();
  if(x=== "rock"){
          return true;
  } else if(x=== "paper"){
          return true;
  } else if(x=== "scissors"){
          return true;
  } else if(x=== "dog"){
          return false;
  } 
}

function computerChoise() {
 var decider = Math.floor(Math.random()*3);
 console.log(decider);
 console.log(choises[decider]);
  com = choises[decider];
 console.log(com);
 return com;
 //if( decider === 0){
 //       return com = "rock";
 //} else if ( decider === 1){
 //       return com = "paper";
 //} else if ( decider === 2){
 //       return com = "scissors";
 //}
}

function decideWinner(){
 if (you === "rock" && com === "paper"){
        $("#fate").html("congrates you get to die");
 } else if (you === "rock" && com === "rock"){
        $("#fate").html("welp . . . try again");
 } else if (you === "rock" && com === "scissors"){
        $("#fate").html(" congrates you get to live");
        numwin ++;
 } else if (you === "paper" && com === "rock"){
        $("#fate").html(" congrates you get to live another day");
        numwin ++;
 } else if (you === "paper" && com === "paper"){
        $("#fate").html("welp . . . try again");
 } else if (you === "paper" && com === "scissors"){
        $("#fate").html("com congrates you get to die");
 } else if (you === "scissors" && com === "rock"){
        $("#fate").html(" congrates you get to die");
 } else if (you === "scissors" && com === "paper"){
        $("#fate").html(" congrates you get to live");
        numwin ++;
 } else if (you === "scissors" && com === "scissors"){
        $("#fate").html("welp . . . try again");
 } else if (you === "dog"){
        $("#fate").html("What? How'd you do that? Oh my! You have been granted infite wisedom through your recognition of the superior species.");
        //doesn't actually get activated
 }
}

// DOCUMENT READY FUNCTION
/*global $*/
    $(document).ready(function() {
        console.log("human");
        console.log(computerChoise());
        $("#submit").click(function(){
           if (x === "dog"){
                winner === "you";
                $("#fate").html("Good cause dog beats everything and don't you question it!");
                $("body").append("<button>" + "<a href='die.html'>" + "Cats should be extinct and click here if you want to know why" + "</a>" + "</button>");
                $("#you").html("you : " + x);
                $("#com").html("Computers pick : " + computerChoise());
           } else if(check()){
               var x = $("#type").val().toLowerCase();
                $("#counter").html("Games won : " + numwin);
                you = x;
                console.log(you);
                $("#you").html("you : " + x);
                $("#com").html("Computers pick : " + computerChoise());
                decideWinner();
           } else {
                console.log("invalid");
                $("#fate").html("How dare you. Next time read the instruction. You pleb. Also it's invalid.");
           }
           
        });
        
        
    });