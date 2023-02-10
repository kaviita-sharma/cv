
var numberOfButtons=document.querySelectorAll('.drum').length;
for(var i=0; i<numberOfButtons; i++){
document.querySelectorAll('.drum')[i].addEventListener('click' , function(){
  var button1= this.innerHTML;
  makeSound(button1);
  buttonAnimation(button1);
});
} //ending for loop

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key)});//event listener for keypress



function makeSound(key){ //function for making sounds
  switch (key) {
    case "w":
      var crash = new Audio("sounds/drumKitsounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickbass = new Audio("sounds/drumKitsounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "s":
      var snare = new Audio("sounds/drumKitsounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/drumKitsounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/drumKitsounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/drumKitsounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4=new Audio("sounds/drumKitsounds/tom-4.mp3");
      tom4.play();
      break;
    default:console.log(this.innerHTML);

  }}


  function buttonAnimation(currentkey){
      var activeButton=document.querySelector("."+currentkey);
      activeButton.classList.add("pressed");
      setTimeout(function(){activeButton.classList.remove("pressed")},100);

  }
  //var audio = new Audio("sounds/tom-1.mp3");
  //audio.play();
  //this.style.color=white;
  //alert(this);
  //var value= this.innerHTML;
