var var1 = "";
var var2 = "";
var calc = "";
var n1 = get("1");
var n2 = get("2");
var n3 = get("3");
var n4 = get("4");
var n5 = get("5");
var n6 = get("6");
var n7 = get("7");
var n8 = get("8");
var n9 = get("9");
var n0 = get("0");
var addition = get("+");
var substraction = get("-");
var multiplication = get("*");
var division = get("/");
var percent = get("%");
var dot = get(".");
var equal = get("=");
var result = get("result");
var screen = get("screen");
var button = get("button");
var numbers = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n0];

function add(a,b) {
	var1 = a+b;
	return a+b;
};

function multiply(a,b) {
	var1 = a*b;
	return a*b;
};

function divide(a,b) {
	var1 = a/b;
	return a/b;
};

function substract(a,b) {
	var1 = a-b;
	return a-b;
};

function cent(a) {
	return a/100;
}

function get(id) {
	return document.getElementById(id);
};

function set(name) {
	if (var1 === "" || var1 === "-") {
		var1 += name.textContent;
		screen.textContent = var1;
	} else if (calc === "") {
		var1 += name.textContent;
		screen.textContent = var1;
	} else if (var2 === "" || var2 === "-") {
		var2 += name.textContent;
		screen.textContent += " " + var2;
	} else {
		var2 += name.textContent;
		screen.textContent += name.textContent;
	}
};

for (var i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function(){
		set(this);
	};
};

addition.onclick = function() {
	screen.textContent += " " + addition.textContent;
	calc = add;
	var2 = "";
};

substraction.onclick = function() {
	if (var1 === "") {
		var1 += substraction.textContent;
	} else if (calc === "" || var2 !== "") {
		calc = substract;
		screen.textContent += " " + substraction.textContent;
		var2 = "";
	} else if (var2 === "") {
		var2 += substraction.textContent;
	};
};

multiplication.onclick = function() {
	screen.textContent += " " + multiplication.textContent;
	calc = multiply;
	var2 = "";
};

division.onclick = function() {
	screen.textContent += " " + division.textContent;
	calc = divide;
	var2 = "";
};

percent.onclick = function() {
	var1 = cent(var1);
	screen.textContent = var1;
};

dot.onclick = function() {
	var1 = var1.toString();
	var1 += dot.textContent;
	screen.textContent = var1;
};

equal.onclick = function() {
	screen.textContent = calc(Number(var1), Number(var2));
};

button.onclick = function() {
 	screen.textContent = "";
 	var1 = "";
	var2 = "";
	calc = "";
;}