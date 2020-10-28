"use strict";

var background = document.getElementById("background");
var dropDownMenu = document.getElementById("dropdown-content");
var hamburger = document.getElementById("hamburger");
var homeBackground = document.getElementById("home");
var blueBackground = document.getElementById("blue");
var redBackground = document.getElementById("red");
var greenBackground = document.getElementById("green");
var orangeBackground = document.getElementById("orange");
var purpleBackground = document.getElementById("purple");
var changeText = document.getElementById("myText"); // dropdown menu click:

hamburger.addEventListener("click", function () {
  dropDownMenu.classList.toggle("active");
}); // veranderingen van achtergrond:

homeBackground.addEventListener("click", function () {
  background.className = "home-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is beige";
}); // BLAUW

blueBackground.addEventListener("click", function () {
  background.className = "blue-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is blue";
}); // ROOD

redBackground.addEventListener("click", function () {
  background.className = "red-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is red";
}); // GROEN

greenBackground.addEventListener("click", function () {
  background.className = "green-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is green";
}); // ORANJE

orangeBackground.addEventListener("click", function () {
  background.className = "orange-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is orange";
}); // PAARS

purpleBackground.addEventListener("click", function () {
  background.className = "purple-background";
  dropDownMenu.classList.remove("active");
  changeText.innerHTML = "This background is purple";
});