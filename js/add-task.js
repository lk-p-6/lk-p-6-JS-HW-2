'use strict';

// variables
const string = '--125968843224013587240124';

// main
if(isNaN(Number(string))){
    console.log("Error: not a number!"); // checking if string contains a number 
} else {
    let result = "";
    for(let i = 0; i < string.length; i++){
        result += string.charAt(i) < 5 ? "0" : "1"; 
    }
    console.log(result);
}