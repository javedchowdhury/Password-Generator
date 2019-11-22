//Generate random password
function generate() {

    //set password lenght/complexity
var complexity = document.getElementById("slider").value;

//possible password values
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";

//create for loop to choose password characters
for (var i = 1; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
}

//add password textbox/display area
document.getElementById("display").value = password;

//add password to previously generae passwords section
document.getElementById("lastNums").innerHTML += password + "<br />"

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";


//function to set length based on slider position
document.getElementById("slider").oninput = function(){

if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "Length:" + document.getElementById("slider").value;
} else{
    document.getElementById("length").innerHTML = "Lenght: 1";
}
}

//function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");

}

