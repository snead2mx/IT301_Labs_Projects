const greet_name = document.getElementById('greet_name');
document.getElementById('name_submit').addEventListener('click', function greet(){
    console.log(`Hello ${greet_name.value}!`);
    document.getElementById('greet').textContent = `Hello ${greet_name.value}!`;
    });

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
document.getElementById('value_submit').addEventListener('click', function(){
    console.log(`Values inputted are ${parseFloat(n1.value)} and ${parseFloat(n2.value)}`);
    document.getElementById('values').textContent = `Values inputted are ${parseFloat(n1.value)} and ${parseFloat(n2.value)}`;
});

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
document.getElementById('calculator_submit').addEventListener('click', function(){
    if (addition.checked){
        document.getElementById('result').textContent = add(n1, n2);
    } else if (subtraction.checked) {
        document.getElementById('result').textContent = sub(n1, n2);
    } else if (multiplication.checked){
        document.getElementById('result').textContent = mult(n1, n2);
    } else if (division.checked) {
        document.getElementById('result').textContent = divv(n1, n2);
    }
});

document.getElementById('clear').addEventListener('click', function(){
    const clearbutton = document.querySelectorAll('input[type="radio"]');
    clearbutton.forEach(checkbox => {
        checkbox.checked = false;
    });
    
});

let add = function (n1, n2) {
    console.log(`${parseFloat(n1.value)} + ${parseFloat(n2.value)} = ${parseFloat(n1.value) + parseFloat(n2.value)}`)
    return `${parseFloat(n1.value)} + ${parseFloat(n2.value)} = ${parseFloat(n1.value) + parseFloat(n2.value)}`;
    };

let sub = function (n1, n2) {
    console.log(`${parseFloat(n1.value)} - ${parseFloat(n2.value)} = ${parseFloat(n1.value) - parseFloat(n2.value)}`)
    return `${parseFloat(n1.value)} - ${parseFloat(n2.value)} = ${parseFloat(n1.value) - parseFloat(n2.value)}`;
    };

let mult = function (n1, n2) {
    console.log(`${parseFloat(n1.value)} x ${parseFloat(n2.value)} = ${parseFloat(n1.value) * parseFloat(n2.value)}`)
    return `${parseFloat(n1.value)} x ${parseFloat(n2.value)} = ${parseFloat(n1.value) * parseFloat(n2.value)}`;
    };

let divv = function (n1, n2) {
    console.log(`${parseFloat(n1.value)} / ${parseFloat(n2.value)} = ${parseFloat(n1.value) / parseFloat(n2.value)}`)
    return `${parseFloat(n1.value)} / ${parseFloat(n2.value)} = ${parseFloat(n1.value) / parseFloat(n2.value)}`;
    };