// 0. The Fortune Teller

var children = prompt("How many children will you have?");

var partner = prompt("What is your partner's name?");

var livingIn = prompt("Where will you live?");

var job = prompt("What job will you have?");

alert("You will be a " + job + " in " + livingIn + ", and married to " + partner + " with " + children + " kids.");


// 1. The Age Calculator

var currentYear = prompt("What year is it?");

var birthYear = prompt("What year were you born?");

var age = currentYear - birthYear;

var age1 = age - 1;

alert("They are either " + age + " or " + age1 + ".");


// 2. The Lifetime Supply Calculator

var currentAge = prompt("How old are you?");

var maxAge = prompt("Until what age do you want the lifetime supply?");

var perDay = prompt("How much of the snack will you eat per day?");

var lifeAmount = ((maxAge - currentAge) * 365) * perDay;

alert("You will need " + lifeAmount + " to last you until the ripe old age of " + maxAge + ".");


// 3. The Geometrizer

var radius = prompt("What is the radius of the circle?");

var diameter = 2 * radius

var circumference = diameter * 3.14

var area = (radius * radius) * 3.14

alert("The circumference is " + circumference + ".");

alert("The area is " + area + ".");


// 4. The Temperature Converter

var celsius = prompt("What temperature is it in Celsius?");

var convertF = ((celsius * 9) / 5) +32

alert(celsius + "\xB0" + "C " + "is " + convertF + "\xB0" + "F.");

var farenheit = prompt("What temperature is it in Farenheit?");

var convertC = ((farenheit - 32) * 5) / 9

alert(celsius + "\xB0" + "C " + "is " + convertF + "\xB0" + "F.");