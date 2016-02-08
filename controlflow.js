
/*What number's bigger?*/

var n1 = prompt("Pick the first number.");

var n2 = prompt("Pick the second number.");

var ans = greaterNum(n1, n2);

function greaterNum(n1, n2) {
	if(n1 > n2){
		return n1;
	} 
	else{
		return n2;
	}
}

alert("The greater number of " + n1 + " and " + n2 + " is " + ans + ".");

/*The World Translator*/

var lan = prompt("What language would you like? (en, sp, fr)");

var l1 = "en";

var l2 = "sp";

var l3 = "fr";

var selLan = helloLanguage(l1, l2, l3);

function helloLanguage(l1, l2, l3) {
	if(lan == l2){
		return "Hola, Mundo";
	} else if(lan == l3){
		return "Bonjour, Le Monde";
	} else {
		return "Hello, World";
	}
}

alert(selLan);

/*The Grade Assigner*/

var score = prompt("What was your score?");

var grade = theGrade(score)

function theGrade(score){
	if (score >=90){
		return "A";
	} else if(score >= 80){
		return "B";
	} else if(score >= 70){
		return "C";
	} else if(score >= 60){
		return "D";
	} else if(score >= 0){
		return "F";
	} else{
		return "error";
	}
}

alert("You got a(n) " + grade + "!");


/*The Pluralizer*/

var num = prompt("How many?");

var noun = prompt("Of what?");

var answer = amount(num);

function amount(num){
	if(num == 1){
		return noun;
	} else{
		return noun + "s";
	}
}

alert("You've got " + num + " " + answer + ".");


/*The even/odd reporter*/

for (var i = 0; i <= 20; i++) {
	if(i % 2 === 0){
		console.log('#' + i + ' is even.');
	} else{
		console.log('#' + i + ' is odd.');
	}
}