/*
-------------------------------------
    MINHAZUL ABEDIN MUNNA
    DATE: 07 FEBRUARY 2023
-------------------------------------    
*/


//SOLUTION- 01 
function mindGame(number) {
    return (((number * 3) + 10) / 2) - 5;
}

const result = mindGame(5);
console.log('Output: ', result);

//SOLUTION: 02
function evenOdd(myString) {
    let lengthofString = myString.length;
    if (lengthofString % 2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }

}
const mystrResult = evenOdd('Phero');
console.log('Output: ', mystrResult);

//   SOLUTION -03
function isLGSeven(number1) {
    let difference = number1 - 7;
    if (difference < 7) {
        return difference;
    } else {
        return number1 * 2;
    }
}
const isLGSevenResult = isLGSeven(15);
console.log('Output: ', isLGSevenResult);

// SOLUTION -04
function findingBadData(myArray) {
    let goodData = 0;
    let badData = 0;

    for (let i = 0; i <= myArray.length; i++) {
        let separateNumber = myArray[i];
        if (separateNumber < 0) {
            badData++;
        }
        else {
            goodData++;
        }
    }

    return badData;

}
let setArray = [2, -5, -7, -13];
let passArray = findingBadData(setArray);
console.log('Output: ', passArray);

// SOLUTION: 05
function gemsToDiamond(gems1, gems2, gems3) {
    let totalDiamond = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
    if (totalDiamond > 1000 * 2) {
        let restOfTheDiamond = totalDiamond - 2000;
        return restOfTheDiamond;
    }
    else {
        return totalDiamond;
    }
}
let gems = gemsToDiamond(20, 200, 50);
console.log('Output: ', gems);