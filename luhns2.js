#!/usr/bin/env node

const readline = require("readline");

function validation(cardNo) {
    let numberofdigits = cardNo.length;
    let numberofsum = 0;
    let isSecond = false;

    //eto yung para mag loop kada number left to right		
    for (let i = numberofdigits - 1; i >= 0; i--) {
        let d = cardNo[i].charCodeAt() - '0'.charCodeAt();

        if (isNaN(d)) {
            return false; 
        }
        //eto yung pang doble ng every other number
        if (isSecond) {
            d = d * 2;
        }
        //eto yung pang total 
        numberofsum += Math.floor(d / 10); 
        numberofsum += d % 10; 

        isSecond = !isSecond;
    }
    return numberofsum % 10 === 0;
}

//eto yung function para madetermine kung anong card type siya
function determineCardType(cardNumber) {
    let firstDigit = cardNumber[0];
    if (firstDigit === "4") {
        return "VISA";
    } else if (firstDigit === "5") {
        return "MASTERCARD";
    } else if (firstDigit === "6") {
        return "DISCOVERY";
    } else {
        return "UNKNOWN";
    }
}

//eto yung pang kuha ng mga input number sa commandline
let cardNo = process.argv[2];

if (!cardNo) {
    console.log("Usage: node luhn.js <card_number>");
    process.exit(1);
}

//eto yung kung valid or invalid yung card
if (validation(cardNo)) {
    let cardType = determineCardType(cardNo);
    console.log(`${cardType}`);
} else {
    console.log("INVALID");
}
