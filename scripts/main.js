//Makes a reference to HTML img into myImage
var myImage = document.querySelector("img");

//Make the variable's onclick property equal to a function
myImage.onclick = function(){
    //Retrive img's src attribute
    var mySrc = myImage.getAttribute("src");
    
    //Used an If-Else statement to check the src of the image
    if(mySrc === "images/group-photo.JPG") {
        myImage.setAttribute("src", "images/self-picture.JPG");
    } else {
        myImage.setAttribute("src", "images/group-photo.JPG");
    }
}

//using querySelector to pick button and h1 from HTML
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

//Function that prompts the user for their name
function setUserName() {
    var myName = prompt("Please enter your name.");
    
    /* localStorage api allows us to store data in browser to 
        retrieve later. setItem function creates and stores the
        data called name which sets its value to myName */
    localStorage.setItem("name", myName);
    
    //textContent sets the heading to a new string
    myHeading.innerHTML = "Welcome, " + myName;
}

//Checks if the name data exists or not
if(!localStorage.getItem("name")) {
    setUserName(); //calls setUserName function if no name data
} else {
    var storedName = localStore.getItem("name");
    myHeading.innerHTML = "Welcome, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}