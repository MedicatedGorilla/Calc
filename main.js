let firstVar = null;
let secondVar = null;
let operator = null;
let displayVal = null;
let operatorSelected = false;
let operationDone = false;

// buttons
let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');
let buttonAdd = document.getElementById('+');
let buttonSubtract = document.getElementById('-');
let buttonMultiply = document.getElementById('X');
let buttonDivide = document.getElementById('/');
let buttonEquals = document.getElementById('=');
let buttonClear = document.getElementById('AC');

button0.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }

    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 0;
        } else {
            firstVar = firstVar + "0";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 0;
        } else {
            secondVar = secondVar + "0";
        }
    }
    updateDisplay();
});

button1.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 1;
        } else {
            firstVar = firstVar + "1";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 1;
        } else {
            secondVar = secondVar + "1";
        }
    }
    updateDisplay();
});

button2.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 2;
        } else {
            firstVar = firstVar + "2";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 2;
        } else {
            secondVar = secondVar + "2";
        }
    }
    updateDisplay();
});

button3.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 3;
        } else {
            firstVar = firstVar + "3";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 3;
        } else {
            secondVar = secondVar + "3";
        }
    }
    updateDisplay();
});

button4.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 4;
        } else {
            firstVar = firstVar + "4";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 4;
        } else {
            secondVar = secondVar + "4";
        }
    }
    updateDisplay();
});

button5.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 5;
        } else {
            firstVar = firstVar + "5";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 5;
        } else {
            secondVar = secondVar + "5";
        }
    }
    updateDisplay();
});

button6.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 6;
        } else {
            firstVar = firstVar + "6";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 6;
        } else {
            secondVar = secondVar + "6";
        }
    }
    updateDisplay();
});

button7.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 7;
        } else {
            firstVar = firstVar + "7";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 7;
        } else {
            secondVar = secondVar + "7";
        }
    }
    updateDisplay();
});

button8.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 8;
        } else {
            firstVar = firstVar + "8";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 8;
        } else {
            secondVar = secondVar + "8";
        }
    }
    updateDisplay();
});

button9.addEventListener('click', ()=>{
    if(operationDone === true){
        reset();
    }
    
    if(operatorSelected === false){
        if(firstVar === null){
            firstVar = 9;
        } else {
            firstVar = firstVar + "9";
        }
    } else if (operatorSelected === true){
        if(secondVar === null){
            secondVar = 9;
        } else {
            secondVar = secondVar + "9";
        }
    }
    updateDisplay();
});



buttonAdd.addEventListener('click', ()=>{
    
    checkOperation();

    if(operationDone === true){
        reset();
    }
    
    if(operator != null){
        alert("Only one operator can be selected at a time. Please clear to select another.");
    }
    else {
        operator = '+';
        operatorSelected = true;
        updateDisplay();
    }
});

buttonSubtract.addEventListener('click', ()=>{
    
    checkOperation();

    if(operationDone === true){
        reset();
    }
    
    if(operator != null){
        alert("Only one operator can be selected at a time. Please clear to select another.");
    }
    else {
        operator = '-';
        operatorSelected = true;
        updateDisplay();
    }
});

buttonMultiply.addEventListener('click', ()=>{
    checkOperation();

    if(operationDone === true){
        reset();
    }
    
    if(operator != null){
        alert("Only one operator can be selected at a time. Please clear to select another.");
    }
    else {
        operator = '*';
        operatorSelected = true;
        updateDisplay();
    }
});

buttonDivide.addEventListener('click', ()=>{
    checkOperation();

    if(operationDone === true){
        reset();
    }
    
    if(operator != null){
        alert("Only one operator can be selected at a time. Please clear to select another.");
    }
    else {
        operator = '/';
        operatorSelected = true;
        updateDisplay();
    }
});

buttonEquals.addEventListener('click', ()=>{
    let output = document.getElementById('output');
    if(operationDone === true){
        reset();
    }
    
    if(firstVar != null & operator != null && secondVar != null && operationDone === false){
        switch (operator){
            case '+':
                output.textContent = Math.round(add(firstVar,secondVar) * 100) / 100;
                break;
            case '-':
                output.textContent = Math.round(subtract(firstVar,secondVar) * 100) / 100;
                break;
            case '*':
                output.textContent = Math.round(multiply(firstVar,secondVar) * 100) / 100;
                break;
            case '/':
                output.textContent = Math.round(divide(firstVar,secondVar) * 100) / 100;
                break;
        }
        operationDone = true;
    } else {
        alert('Equation is incomplete or calculation is already done. Please correct before trying operation.');
    }
});

buttonClear.addEventListener('click', () =>{
    reset();
});

function reset(){
    firstVar = null;
    secondVar = null;
    operator = null;
    displayVal = null;
    operatorSelected = false;
    operationDone = false;
    let output = document.getElementById('output');
    output.textContent = '';
}

function checkOperation(){
    let output = document.getElementById('output');
    let newVar = null;
    if(firstVar != null && operator != null && secondVar != null){
        switch (operator){
            case '+':
                newVar = firstVar + secondVar;
                output.textContent = Math.round(newVar * 100) / 100;
                break;
            case '-':
                newVar = firstVar - secondVar;
                output.textContent = Math.round(newVar * 100) / 100;
                break;
            case '*':
                newVar = firstVar * secondVar;
                output.textContent = Math.round(newVar * 100) / 100;
                break;
            case '/':
                newVar = firstVar / secondVar;
                output.textContent = Math.round(newVar * 100) / 100;
                break;
        }

        firstVar = newVar;
        operator = null;
        secondVar = null;
        operatorSelected = false;

           
    }
}

function updateDisplay(){
    let output = document.getElementById('output');
    if(operatorSelected === false){
        output.textContent = firstVar;
    } else if (operatorSelected === true && secondVar === null ){
        output.textContent = firstVar + ' ' + operator;
    } else if (operatorSelected === true && secondVar != null){
        output.textContent = firstVar + ' ' + operator + ' ' + secondVar;
    }
}

function operate(firstVar, secondVar, operator){
    switch(operator){
        case "+":
            add(firstVar, secondVar);
            break;
        case "-":
            subtract(firstVar,secondVar);
            break;
        case "*":
            multiply(firstVar,secondVar);
            break;
        case "/":
            divide(firstVar,secondVar);
            break;
    }
}

function add(num, num1){
    return num + num1;
}

function subtract(num,num1){
    return num - num1;
}

function multiply(num, num1){
    return num * num1;
}

function divide(num, num1){
    return num / num1;
}