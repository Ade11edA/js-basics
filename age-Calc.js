document.querySelector('form').addEventListener('submit', checkAge);


const license = 18;
const jrop = 16;
const rental = 25;

function checkAge(e){
    e.preventDefault();
    let myAge = document.querySelector('input').value;
    let message = `<ul>`;

    console.log("If you're " + myAge + " then...")
    if (myAge < license && myAge >= jrop ) {
        message += `<li>you can have a JrOp License</li>`;
    }
    if (myAge>= license && myAge < rental) {
        message += `<li>you can have a regular license, but not rent a car</li>`;
    }
    if (myAge>= rental) {
        message += `<li>you can rent a car and have a regular license</li>`;
    }
    if (myAge< jrop){
        message +=`<li>you're too young to drive</li>`;
    }
    message += `</ul>`
    document.querySelector('#output').innerHTML = message;
}