const background = document.getElementById("background");
const dropDownMenu = document.getElementById("dropdown-content");

const hamburger = document.getElementById("hamburger");
const homeBackground = document.getElementById("home")
const blueBackground = document.getElementById("blue");
const redBackground = document.getElementById("red");
const greenBackground = document.getElementById("green");
const orangeBackground = document.getElementById("orange");
const purpleBackground = document.getElementById("purple");

let changeText = document.getElementById("myText");

// dropdown menu click:

hamburger.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active");
})


// veranderingen van achtergrond:

homeBackground.addEventListener("click", () => {
    background.className="home-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is beige"
})

// BLAUW

blueBackground.addEventListener("click", () => {
    background.className="blue-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is blue";
})

// ROOD

redBackground.addEventListener("click", () => {
    background.className="red-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is red";
})


// GROEN

greenBackground.addEventListener("click", () => {
    background.className="green-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is green";
})

// ORANJE

orangeBackground.addEventListener("click", () => {
    background.className="orange-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is orange";
})

// PAARS

purpleBackground.addEventListener("click", () => {
    background.className="purple-background";
    dropDownMenu.classList.remove("active");
    changeText.innerHTML = "This background is purple";
})
