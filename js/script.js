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
 var you = "";
 var com = "";
 var winner = "";
 var choises = ["rock","paper","sissors"];
  
//FUNCTIONS
 
function check() {
  if($("#type").val()=== "rock"){
          return true;
  } else if($("#type").val()=== "paper"){
          return true;
  } else if($("#type").val()=== "sissor"){
          return true;
  } else {
          return false;
  }
}

function computerChoise() {
 var decider = Math.ceil(Math.random()*3);
 console.log(decider);
 if( decider === 1){
        return com = "paper";
 } else if ( decider === 2){
        return com = "rock";
 } else if ( decider === 3){
        return com = "sissor";
 }
}

function decideWinner(){
 if (you === "rock" && com === "paper"){
        $("#fate").html("congrates you get to die");
 } else if (you === "rock" && com === "rock"){
        $("#fate").html("welp . . . try again");
 } else if (you === "rock" && com === "sissor"){
        $("#fate").html(" congrates you get to live");
 } else if (you === "paper" && com === "rock"){
        $("#fate").html(" congrates you get to live another day");
 } else if (you === "paper" && com === "paper"){
        $("#fate").html("welp . . . try again");
 } else if (you === "paper" && com === "sissor"){
        $("#fate").html("com congrates you get to die");
 } else if (you === "sissor" && com === "rock"){
        $("#fate").html(" congrates you get to die");
 } else if (you === "sissor" && com === "paper"){
        $("#fate").html(" congrates you get to live");
 } else if (you === "sissor" && com === "sissor"){
        $("#fate").html("welp . . . try again");
 }
}

// DOCUMENT READY FUNCTION
/*global $*/
    $(document).ready(function() {
        console.log("human");
        console.log(computerChoise());
        $("#submit").click(function(){
           if(check()){
                you = $("#type").val();
                console.log(you);
                $("#you").html("you : " + ($("#type").val()));
                $("#com").html("Computers pick : " + computerChoise());
                decideWinner();
           } else {
                console.log("invalid");
           }
           
        });
        
    });