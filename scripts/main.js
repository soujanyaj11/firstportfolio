//UPDATING PERSONAL SITE//
//This code switches between two images.

let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/silhouette-woman-professional-clip-art-png-favpng-LKiWGvnW8qVy8veG9L7neCG7r.jpg') {
      myImage.setAttribute('src','images/welcome.jpg');
    } else {
      myImage.setAttribute('src','images/silhouette-woman-professional-clip-art-png-favpng-LKiWGvnW8qVy8veG9L7neCG7r.jpg');
    }
}
/*
//Get the User's Name and store it in the browser’s local storage.

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let yourName = prompt('Please enter your name.');
  localStorage.setItem('name', yourName);
  myHeading.textContent = 'Hi ' + yourName + ' Welcome to my page';
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back ' + storedName + ', glad you are back';
}


myButton.onclick = function() {
  setUserName();
} */

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || !isNaN(myName)) {
     setUserName();
}else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my website, ' + myName;






