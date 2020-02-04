let btn = document.querySelectorAll('[type="button"]');
let result = document.querySelector('[type="text"]');

let currentNum = '';
let previousNum = '';
let operator = '';
let total = 0;
result.value = '0';

/************* 
AC Clear function
 *************/

function clear() {
    result.value = '0';
    currentNum = '';
}


/************* 
Percentage function
 *************/

function percentage() {
    result.value = (result.value / 100);
    currentNum = result.value;
}
/************* 
+/- function
*************/

function prefix() {
    if (result.value[0] === '-') {
        currentNum = result.value.substr(1, result.value.length);
        result.value = currentNum;
    }
    else {
        currentNum = '-' + result.value;
        result.value = currentNum;
    }
}
/************* 
Calculator function
 *************/

function calc(pNum, cNum, op) {
    switch (op) {
        case '+':
            total = Number(pNum) + Number(cNum);
            break;
        case '-':
            total = Number(pNum) - Number(cNum);
            break;
        case '×':
            total = Number(pNum) * Number(cNum);
            break;
        case '÷':
            total = Number(pNum) / Number(cNum);
            break;
        default:
            break;
    }
    currentNum = total;
    return total
}


/************* 
Events assignment
 *************/

for (let i = 0; i < btn.length; i++) {
    if (
        btn[i].value !== "%" &&
        btn[i].value !== "+/-" &&
        btn[i].value !== "AC" &&
        btn[i].value !== "=" &&
        btn[i].value !== "+" &&
        btn[i].value !== "-" &&
        btn[i].value !== "×" &&
        btn[i].value !== "÷") {
        btn[i].addEventListener('click', function (e) {
            currentNum += e.target.value;
            result.value = currentNum;
        })
    }
    else if (btn[i].value === "=") {
        btn[i].addEventListener('click', function (e) {
            result.value = calc(previousNum, currentNum, operator);
        })
    }
    else if (btn[i].value === "AC") {
        btn[i].addEventListener('click', clear);
    }
    else if (btn[i].value === "+/-") {
        btn[i].addEventListener('click', prefix);
    }
    else if (btn[i].value === "%") {
        btn[i].addEventListener('click', percentage);
    }
    // assigning addEventListener to operators 
    else {
        btn[i].addEventListener('click', function (e) {
            operator = e.target.value;
            previousNum = currentNum;
            currentNum = '';
        })
    }
}