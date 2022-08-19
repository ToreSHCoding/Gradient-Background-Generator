var css = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.getElementById("gradient");
var randomGrad = document.getElementById("random-gradient");

function initialColors() {
  color1.value = "#FF0000";
  color2.value = "#FFFF00";

  setGradient();
}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColors() {
  let randomColor1 =  Math.floor(Math.random()*16777215).toString(16);
  let randomColor2 =  Math.floor(Math.random()*16777215).toString(16);
  color1.value = "#" + randomColor1;
  color2.value = "#" + randomColor2;

  setGradient();
}

function colorAnimation() {
  
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomGrad.addEventListener("click", randomColors)



initialColors();
