// DOM
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunc = {
    lower: generateRandLower,
    upper: generateRandUpper,
    number: generateRandNumber,
    symbol: generateRandSymbol
}

// Event listeners
generateElement.addEventListener('click', () => {

    const length = +lengthElement.value;
    const lowerChecked = lowercaseElement.checked;
    const upperChecked = uppercaseElement.checked;
    const numbersChecked = numbersElement.checked;
    const symbolsChecked = symbolsElement.checked;

    resultElement.innerText = generatePassword(
        lowerChecked, 
        upperChecked, 
        numbersChecked, 
        symbolsChecked, 
        length
    );
})

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // Initialize a password variable
    // Filter out unchecked
    // Loop over length then call generator function for each type
    // Then add final password to password variable and return it

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
    );

    if(typesCount === 0) {
        return '';
    }

    for(i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0];
            // console.log({functionName})

            generatedPassword += randomFunc[functionName]();
        })
    }
    const passwordOutput = generatedPassword.slice(0, length);
    return passwordOutput;
}

// Generator functions | https://net-comber.com/charset.html

function generateRandLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandSymbol() {
    const symbols = '!@#$%&*(){}[]'
    return symbols[Math.floor(Math.random() * symbols.length)]
}