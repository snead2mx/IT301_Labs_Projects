let bill = prompt(`Enter the total bill amount from tonight.`);
let valid = true;
do{
    if (bill = '' || Number(bill) == 0){
        bill = prompt(`Please enter a bill amount greater than zero.`)
        console.log('Input is equivalent to nothing')
    }
    else if (Number(bill) < 0){
        bill = prompt(`Negative amounts are not allowed. Please enter a valid bill amount.`)
        console.log('Input is not a negative number')
    }
    else if (Number(bill) > 0){
        valid = true
        console.log('Input is a valid value!')
    }
    else {
        bill = prompt(`Invalid input. Please enter a numeric bill amount.`)
        console.log('Input is not a number')
    }
} while (!valid);
console.log('For a bill of ${Number(bill)} dollars, the tip should be ${Number(bill) * .10) dollars.')
document.write('For a bill of ${Number(bill)} dollars, the tip should be ${Number(bill) * .10) dollars.')