var num = 0,
  num2 = 2;

// first
var side = 2,
  side2 = 3;

if (side === side2) console.log("Squere:" + side * side2);
else console.log("rectangle:" + side * side2);

// Second

var year = 1995;

console.log("Your Age:", 2022 - year);

//   third

var list = [];

for (var i = 0; i < 6; i++)
  list[i] = prompt("Please Enter 6 Ingredients One At a Time");

for (var i = 0; i < 6; i++) console.log(list[i]);

// thord

var day = 4;

if (day > 0 && day < 6) console.log("WorkDay");
else if (day === 6 || day === 7) console.log("Weekend");
else console.log("PLease Enter Day From 1-7");

//   Fifth

function entername(name) {
  var name = prompt("PLz Enter Name:");
  return name;
}
1;

var names = [];

for (var i = 0; i < 6; i++) {
  names[i] = entername();
  if (i % 2) console.log(names[i]);
}