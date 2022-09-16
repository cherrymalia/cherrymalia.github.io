function Calculate() {
    var iTable = document.getElementById("displayInput");
    var oTable = document.getElementById("displayOutput");
    let result = 0, total = 0;
    const answers = [];
    
    do {
        var iRow = iTable.insertRow();
        var iCell1 = iRow.insertCell(0);
        var iCell2 = iRow.insertCell(1);
        var iCell3 = iRow.insertCell(2);
        var iCell4 = iRow.insertCell(3);
        let variableA = prompt("Enter a number for Variable X");
        iCell1.innerHTML = variableA;
        let operator = prompt("Enter an operator");
        iCell2.innerHTML = operator;
        let variableB = prompt("Enter a number for Variable Y");
        iCell3.innerHTML = variableB;
        if (isNaN(variableA)||isNaN(variableB)) {
            iCell4.innerHTML = "wrong input";
        } else {
            switch (operator) {
                case "+":
                    result = Number(variableA) + Number(variableB);
                    answers.push(result);
                    total += result;
                    break;
                case "-":
                    result = Number(variableA) - Number(variableB);
                    total += result;
                    answers.push(result);
                    break;
                case "*":
                    result = Number(variableA) * Number(variableB);
                    total += result;
                    answers.push(result);
                    break;
                case "/":
                    result = Number(variableA) / Number(variableB);
                    total += result;
                    answers.push(result);
                    break;
                case "%":
                    result = Number(variableA) % Number(variableB);
                    total += result;
                    answers.push(result);
                default:
                    result = "computation error";
            }
            iCell4.innerHTML = result;
        }
        input = confirm("Continue?");
    } while (input);

    //calculate and display max, min, and average of result
    var oRow = oTable.insertRow();
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);

    oCell1.innerHTML = Math.min(...answers);
    oCell2.innerHTML = Math.max(...answers);
    oCell3.innerHTML = Math.round(total / answers.length);
    oCell4.innerHTML = total;
}
