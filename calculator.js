function questionPrompt() {
	let result;
	let max;
	let min;
	let total;
	let count = 1;
	let x = prompt("Value of x: ");
	let operator = prompt("Enter the operator: ");
	let y = prompt("Value of y: ");
	
	switch (operator) {
  	case "+":
    	result = add(x,y);
    	break;
  	case "-":
    	result = subtract(x,y);
    	break;
  	case "/":
    	result = divide(x,y);
    	break;
	case "*":
    	result = multiply(x,y);
    	break;
	case "%":
    	result = modulus(x,y);
    	break;
  	default:
    	result = "computation error";
	}
	
	if (result < min && result!= "computation error" && result != "wrong input error") {
		min = result;
	} else if (result > max && result != "computation error" && result != "wrong input error") {
		max = result;
	}
	
	if (result != "computation error" && result != "wrong input error") {
		total += result;
	}
	
	
	if (confirm("Continue?")) {
    	count++;
		questionPrompt();
  	} else {
		document.write("<table>");
		document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
		document.write("<tr><td> min </td><td> max </td><td> total/count </td><td> total </td></tr>");
		document.write("</table>");
  	}
}

function add(num1, num2) {
	if (isNaN(num1) && isNaN(num2)){
		return num1 + num2;
	} else {
		return "wrong input number"
	}
}

function subtract(num1, num2) {
	if (isNaN(num1) && isNaN(num2)){
		return num1 - num2;
	} else {
		return "wrong input number"
	}
}

function modulus(num1, num2) {
	if (isNaN(num1) && isNaN(num2)){
		return num1 % num2;
	} else {
		return "wrong input number"
	}
}

function divide(num1, num2) {
	if (isNaN(num1) && isNaN(num2)){
		return num1 / num2;
	} else {
		return "wrong input number"
	}
}

function multiply(num1, num2) {
	if (isNaN(num1) && isNaN(num2)){
		return num1 * num2;
	} else {
		return "wrong input number"
	}
}