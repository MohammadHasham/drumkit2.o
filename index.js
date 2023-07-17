/***** ---------------------------------------for button press-------------------------------------*********/

var numofButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);
    buttonAnimatiom(this.innerHTML);

  });
}

/**------------------------------------********for keyboard press**********************/

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimatiom(event.key);

});

/*************funvtion for making sound **************************/

function makeSound(choose) {

  switch (choose) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      alert("press wrong key");

  }
}

/*******************************function for animation****************************/

function buttonAnimatiom(currentKey) {
  var selectedClass = document.querySelector("." + currentKey);
  selectedClass.classList.add("pressed");

  setTimeout(function() {
    selectedClass.classList.remove("pressed");
  }, 50);
}

gsap.from(".w", { ease: "sine.inOut", rotation : 720, opacity: 0, x: 1000, duration: 3});
gsap.from(".a", { ease: "sine.inOut", rotation : 720, opacity: 0, x: -1000, duration: 3});
gsap.from(".s", { ease: "sine.inOut", rotation : 720, opacity: 0, x: 1000, duration: 3});
gsap.from(".d", { ease: "sine.inOut", rotation : 720, opacity: 0, x: -1000, duration: 3});
gsap.from(".j", { ease: "sine.inOut", rotation : 720, opacity: 0, x: 1000, duration: 3});
gsap.from(".k", { ease: "sine.inOut", rotation : 720, opacity: 0, x: -1000, duration: 3});
gsap.from(".l", { ease: "sine.inOut", rotation : 720, opacity: 0, x: 1000, duration: 3});
/********* 
gsap.to("#titl", {duration: 1.5, y: -20, repeat: -1, yoyo: true, ease: "sine.inOut"});

gsap.to("#titl", {
  duration: 1.5,
  opacity: 0.3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  scrollTrigger: {
      trigger: "#herosection",
      start: "top bottom",
      toggleActions: "play pause play pause"
  }
});
****/
gsap.to("#title", {
  duration: 1.5,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  scrollTrigger: {
      trigger: "#herosection",
      start: "top bottom",
      toggleActions: "play pause play pause"
  }
});
