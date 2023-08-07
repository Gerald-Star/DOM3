//FUNCTIONS

//FUNCTIONS

// function greetPeople() {
//   alert("Greetings, People");
// }

//this function won't run because it is not called.

// function howOld(name, age) {
//   alert(name + " is " + age + " years old");
// }

// howOld("Manni, 43");
// howOld("Grace, 30");

//SECOND USAGE OF ALERT
// var family; // add a global variable
// function addTen(value) {
//   family = "Mark";
//   alert(value);
//   var sum = value + 10;
//   return sum + 4;
// }

// alert(addTen(46));
// alert(family);

// //greetPeople(); //call the function, this is a function without argument

var people = ""; // global variable
function Greetings(name) {
  // passes one argument
  //var people = "Greetings " + name; to get both names, we make the var to be on top of the function- global function
  people += "Greetings " + name + "<br />"; // add <br> here to make space
  document.getElementById("person").innerHTML = people + "<br />";
}

//you can call this as much as you want
Greetings("Bob");
Greetings("Mary");
Greetings("Jenis");

// FUNCTION THAT OUTPUTS A VALUE

//LOCAL VERSUS GLOBAL SCOPE
// The two fundamental scopes in Javascript

//Local scope variables -is declared inside the function and cannot be accessed anywhere outside of myFunction function
// Global scope variables - are visible and can be accessed everywhere including inside myFunction
var x = 25; // global scope variable
var y = 50; // global scope variable
function myFunction() {
  //Can access x and y
  var z = 4; // local scope variable and cannot be accessed anywhere else except inside the function
}

// cannot access z because it is

//let is a block scope variable
let plums = 30;
{
  let plums = 15;
  let oranges = 20;
}

// plums is 30.
// apples is undefined
// oranges is undefined

// function myFunction() {
//   //var and let work the same in a function, can only be accessed inside the function
// }

//const

function greetingsNow(userName) {
  let message = "Hello, " + userName + "!";
  message += " it's going to be a great time" + "<br/>";
  message += "Never mind, " + userName + " everything is good.";
  return message;
  // document.getElementById("greeting").innerHTML = message;
}

// greetingsNow("Mary");
// create a let here

let myMessage = greetingsNow("Mary");
document.getElementById("greeting").innerHTML = myMessage;

//what's is new in ES6?
//Default function

function multiply(a, b) {
  return a * b;
}

alert(multiply(2, 4));

// 2 example: multiply

function multiply(x = 1, y = 2) {
  return x * y;
}

alert(multiply(10)); // 10 is assigned to x and y remains 2,
//output is 20

//REST PARAMETERS
function output(...params) {
  alert(params.length);
  for (i = 0; i < params.length; i++) {
    alert(params[i]);
  }
}

output(10.2, 8.5, 7.1, 6.5, 1.1);

// FUNCTION CONSTRUCTOR/ CONSTRUCTOR FUNCTION -you pass new to the function

let greetings = new Function("name", "return ( 'Greetings ' + name)");
var greet2 = greetings("Mann");
alert(greet2);

//LAMBDA FUNCTION- this function uses arrow notations
var cube = (myValue) => myValue * myValue * myValue * myValue;
document.getElementById("arrow").innerHTML = cube(3);

let team = new Map();
team.set("pitcher", "David Cone");
team.set("catcher", "Jorge Posada");
team.set("right", "Dave");
alert(team.get("catcher"));
alert(team.get("right"));

//OR
let music = new Map();
music.set("pop", "Bonny M");
music.set("RnB", "Tony Braxton");
music.set("Afro", "Buna Boy");
music.set("Fugi", "Sunny Okosun");

alert(music.get("RnB"));

//pass an array into the constructor

let family = new Map([
  ["mother", "Florence"],
  ["father", "Chima"],
  ["son", "Bobo"],
  ["daughter1", "Titi"],
  ["daughter2", "Perfect"],
]);

alert(family.get("mother"));
// alert(family.get("father"));

// loop through the family to get all the information
for (let r of family.entries()) {
  //possible to loop through family.keys, .values and set alert(r)
  // alert(r);
  // alert(r[0]);
  alert(r[0] + ": " + r[1]);
}

//SET DATA STRUCTURE
let songs = new Set();
songs.add("Don't loose hope");
songs.add("Believe in God");
songs.add("Trust in God");

let gpas = new Set([4.0, 3.82, 2.244, 3.1]);

let states = new Set().add("London").add("Liverpool").add("Manchester");
if (states.has("London")) {
  alert("Present");
}
gpas.delete(4.0);

for (let state of states) {
  alert(state);
}
