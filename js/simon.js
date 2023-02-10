alert("hello working");
var level=0;
var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var started=false;

$(document).keypress(function(){
  if(!started){
    $("h1").text("Level "+level);
    newSequence();
    started=true;
  }
});

$(".btn").click(function(){
  animatePress(this.id); //animation
  playSound(this.id);
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length -1);
  });


function newSequence(){
  userClickedPattern=[];
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#'+randomChosenColour).fadeOut() .fadeIn();
  playSound(randomChosenColour); //not working
}


function playSound(colour){
  //give audio to each button
  var x=("sounds/simonSounds/"+colour +".mp3");
  var audio=new Audio(x);
  audio.play();
}

function animatePress(currentColour){
  var cButton=("#"+currentColour);
  $(cButton).addClass("pressed");
  setTimeout(function(){$(cButton).removeClass("pressed");},200);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    if(gamePattern.length==userClickedPattern.length){
    newSequence();
    level++;
    $("h1").text("Level- "+level);
  }}
  else{
    $("h1").text("Game Over, Press any key to start");
    var gameOver=new Audio("sounds/simonSounds/wrong.mp3");
    gameOver.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    startOver();
  }
}

function startOver(){
  gamePattern=[];
  started=false;
  level=0;
}
