alert("Bienvenue dans l'antre du chat.");
let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/CatPhotogenicLooking.jpg") {
    myImage.setAttribute("src", "images/EvilCat.jpg");
  } else {
    myImage.setAttribute("src", "images/CatPhotogenicLooking.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    let myName = prompt("Veuillez saisir un nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Voici un chat nommé " + myName;
  }

if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Voici un chat nommé " + storedName;
  }
  
  myButton.addEventListener("click", function () {
    setUserName();
  });
  
