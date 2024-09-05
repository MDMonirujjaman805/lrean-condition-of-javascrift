// syntax .....
let x = 15;
let y = 15;
let z = 15;
let m = x + y + z;
console.log(m);


// IF Statement..........

let age1 = 18;
if (age1 >= 18) {
  console.log( "You can vote");
}
else{
  console.log( "You cannot vote");
}


// mode .............

let mode = "dark";
let color;

if (mode === "light"){
  color = 'balck';
}
else{
  color = 'cupcofee';
}
console.log ( color);


// even or odd ...........

let num1 = 12;
if(num1 % 2 === 0){
  console.log(num1,'is even');
}
else{
  console.log(num1,"is odd");
}




// if, else if, else ......

let salary = 20000;
if (salary >= 2000){
  console.log('low');
}
else if (salary < 15000){
  console.log("medium");
}
else if (salary < 28000){
  console.log("min-medium");
}
else{
  console.log('perpact');
}


// Tarnary operators .........
// preparer ......
// simpler,compact if-else.......
let age = 18;
let result1 = age <= 18 ? 'vote' : 'no vote';
console.log(result1);

// not preparer ......
let roll1 = 1;
roll1 < 5 ? console.log('good'):console.log( 'bed');

// alert ............
alert('Hello World, I am coming!');


// prompt ...........

let idintey = prompt('hello! what is your name?');
console.log(idintey);
let name = prompt('hello! what is your addresses?');
console.log(name);
let roll = prompt('hello! what is your roll?');
console.log(roll);


// Practice1 multiple of 5........

let num3 = prompt('hello! give me a number.');
if (num3 % 5 === 0){
console.log(num3, 'is a multiple of 5');
}
else{
  console.log(num3, "is a NOT multiple of 5");
}


// Practice task 2..........

let num4 = 40;

if (num4 >= 90 && num4 <= 100){
  console.log('grade A')
}
else if (num4 >= 70 && num4 <= 89){
  console.log('grade B')
}
else if (num4 >= 60 && num4 <= 69){
  console.log('grade C')
}
else if (num4 >= 50 && num4 <= 59){
  console.log('grade D')
}
else if
  (num4 >= 0 && num4 <= 49){
    console.log('grade F')
  }



// Practice task 2..........apna college

let num2 = prompt( 'Enter a number 0-100');
let grade ;

if (num2 >= 90 && num2 <= 100){
  grade = 'A';
}
else if (num2 >= 70 && num2 <= 89){
  grade = 'B';
}
else if (num2 >= 60 && num2 <= 69){
  grade = 'C';
}
else if (num2 >= 50 && num2 <= 59){
  grade = 'D';
}
else if (num2 >= 0 && num2 <= 49){
  grade = 'F';
  }
  console.log("according to your scores, your grade was:",grade);


let num = 8;
let result = num >= 80 ? 'grade a': 'grade b';
console.log(result);