const input = require('sync-input');


welcome();
function welcome() {
    console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
}

let command_dictionary1 = {
    "1": 1,
}
let command_dictionary2 = {
    "2": 2,
}

command = input();

if (Object.keys(command_dictionary1).includes(command)) {
    converter();
}
else if (Object.keys(command_dictionary2).includes(command)) {
    console.log("Have a nice day!");
}
else {
    while (!(Object.keys(command_dictionary1).includes(command)) ||
    !(Object.keys(command_dictionary2).includes(command))) {
        console.log("Unknown input")
        command = input();
        if (Object.keys(command_dictionary1).includes(command)) {
            converter();
            break;
        }
        else if (Object.keys(command_dictionary2).includes(command)) {
            console.log("Have a nice day!");
            break;
        }
    }
}

function converter() {
    console.log("What do you want to convert?")
    let currencies_dictionary = {
        "USD": 1,
        "JPY": 113.5,
        "EUR": 0.89,
        "RUB": 74.36,
        "GBP": 0.75,
    };
    let fromCurr = input("From: ").toUpperCase();
    if (!(Object.keys(currencies_dictionary).includes(fromCurr))) {
        console.log("Unknown currency");
    }
        while (!(Object.keys(currencies_dictionary).includes(fromCurr))) {
            fromCurr = input("From: ").toUpperCase();
            if (Object.keys(currencies_dictionary).includes(fromCurr)) {
                let fromCurr1 = [fromCurr];
                break;
            }
            console.log("Unknown currency");
        }
    let toCurr = input("To: ").toUpperCase();
    if (!(Object.keys(currencies_dictionary).includes(toCurr))) {
        console.log("Unknown currency");
    }
        while (!(Object.keys(currencies_dictionary).includes(toCurr))) {
            toCurr = input("To: ").toUpperCase();
            if (Object.keys(currencies_dictionary).includes(toCurr)) {
                break;
            }
            console.log("Unknown currency");
        }
    let amount = +input("Amount: ");
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
    }
    while (amount < 1) {
        amount = +input("Amount ");
        if (amount > 1) {
            break;
        }
        console.log("The amount cannot be less than 1");
    }
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    }
    while (isNaN(amount)) {
        amount = +input("Amount: ");
        if (amount) {
            break;
        }
        console.log("The amount has to be a number");
    }
    let result = amount / currencies_dictionary[fromCurr] * currencies_dictionary[toCurr];
    console.log("Result: " + amount + " " + fromCurr + " equals " + result.toFixed(4) + " " + toCurr);
}
