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
    const length = lengthElement.value;
    console.log(length);
})

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