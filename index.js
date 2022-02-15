
const randomFunc = {
    lower: generateRandLower,
    upper: generateRandUpper,
    number: generateRandNumber,
    symbol: generateRandSymbol
}

// Generator functions 

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