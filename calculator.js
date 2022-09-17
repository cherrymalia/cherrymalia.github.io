function Calculate() {
    var iTable = document.getElementById("displayInput");
    var oTable = document.getElementById("displayOutput");
    let result = 0, total = 0;
    const answers = [];
    
    //clear past results from input and output tables
    if (!(iTable.rows.length == 1)) {
        for (let i = iTable.rows.length - 1; i > 0; i--) {
            iTable.deleteRow(i);
        }
    }

    if (!(oTable.rows.length == 1)) {
        oTable.deleteRow(1);
    }

    do {
        var iRow = iTable.insertRow();
        var iCell1 = iRow.insertCell(0);
        var iCell2 = iRow.insertCell(1);
        var iCell3 = iRow.insertCell(2);
        var iCell4 = iRow.insertCell(3);
        let variableA = prompt("Enter a value for x");
        iCell1.innerHTML = variableA;
        let operator = prompt("Enter an operator");
        iCell2.innerHTML = operator;
        let variableB = prompt("Enter a value for y");
        iCell3.innerHTML = variableB;
        if (isNaN(variableA)||isNaN(variableB)) {
            iCell4.innerHTML = "wrong input number";
        } else {
            switch (operator) {
                case "+":
                    result = (Number(variableA) + Number(variableB));
                    answers.push(result);
                    total += result;
                    break;
                case "-":
                    result = (Number(variableA) - Number(variableB));
                    total += result;
                    answers.push(result);
                    break;
                case "*":
                    result = (Number(variableA) * Number(variableB));
                    total += result;
                    answers.push(result);
                    break;
                case "/":
                    result = (Number(variableA) / Number(variableB));
                    total += result;
                    answers.push(result);
                    break;
                case "%":
                    result = (Number(variableA) % Number(variableB));
                    total += result;
                    answers.push(result);
                    break;
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
    
    let average = total / answers.length;
    oCell1.innerHTML = Math.min(...answers);
    oCell2.innerHTML = Math.max(...answers);
    if (average - Math.floor(average) == 0) {
        oCell3.innerHTML = average;
    } else {
        oCell3.innerHTML = average.toFixed(2);
    }
    oCell4.innerHTML = total;
}
