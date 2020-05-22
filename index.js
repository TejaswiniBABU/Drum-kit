
// document.querySelector("button").addEventListener("click", function(){
//   var audio = new Audio("sounds/Tom.mp3");
//   audio.play();
// }
// );

// makes sound when button is clicked
var numerOfDrums = document.querySelectorAll(".drum").length;
var i;

for (i=0 ; i<numerOfDrums ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", clickSound);
  function clickSound() {
    var buttonInnerHTML = this.innerHTML;
    playMusic(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }

};

//function that respons to key presse

document.addEventListener("keydown", function(event)
{
  playMusic(event.key);
  buttonAnimation(event.key)
}
);



// function making sound
function playMusic(key)
{
  switch (key)
{
case "w" :
  var tom1 = new Audio("sounds/tom1.mp3");
  tom1.play();
break
case "a" :
  var tom2 = new Audio("sounds/tom2.mp3");
  tom2.play();
break
case "s" :
  var tom3 = new Audio("sounds/tom3.mp3");
  tom3.play();
break
case "d" :
  var tom4 = new Audio("sounds/tom4.mp3");
  tom4.play();
break
case "j" :
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
break
case "k" :
  var stick = new Audio("sounds/stick.mp3");
  stick.play();
break
case "l" :
  var cymbal  = new Audio("sounds/cymbal.mp3");
  cymbal.play();
break
}
};




function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout( function() {
  activeButton.classList.remove("pressed");
}  , 100);
}

