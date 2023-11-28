console.log("Hello World");
//weird scope - don't use
//var x = 5;

//regular old variable
//you can change the value
let y = 6;
y= 10;

// this is a constant cannot be changed
const z = 7;

console.log(y,z);
console.log(z+y);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y**z); //This is exponent
console.log(y%z);//This does division but returns the remainder

remainder = y%z;
if (remainder>0) {
    console.log("The answer is " + Math.floor(y/z) + " with the remainder of " + y%z);   
}
else{
    console.log("The answer is " + y/z);
}

let fname = "Adel"; // this is a string
let lname = "Benchemam";

console.log(fname + " " + lname);
console.log(`${fname} ${lname}`);
console.log(`${fname} ${9*5}`);
console.log(lname + 6);

let user = "Adel";
let pass = "woo";
if (user == "Adel"){
    console.log("you are " + user);
}
user = "Adele";
if (user == "Adel"){
    console.log("you are" + user);
}else{
    console.warn("DENIED");
}
user = "Adel";
if (user == "Adel" && pass == "woo"){
    console.log("you are " + user + " and your pass is " + pass);
}else{
    console.warn("DENIED");
}

const license = 18;
const jrop = 16;
const rental = 25;


function checkAge(myAge){
    console.log("If you're " + myAge + " then...")
    if (myAge < license && myAge >= jrop ) {
        console.log("you can have a JrOp License"); 
    }
    if (myAge>= license) {
        console.log("you can have a regular license");
    }
    if (myAge>= rental) {
        console.log("you can rent a car");
    }
    if (myAge< jrop){
        console.log("you're too young to drive");
    }
}
checkAge(5);
checkAge(23);
checkAge(678);
checkAge(15);