function sum(a, b) {
    a === undefined ? (a = 0) : (a = a)
    b === undefined ? (b = 0) : (b = b)

    return a + b
}

function subtract(a, b) {
    a === undefined ? (a = 0) : (a = a)
    b === undefined ? (b = 0) : (b = b)
    return a - b
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Error")
    }
    return a / b
}

function multiply(a, b) {
    a === undefined ? (a = 0) : (a = a)
    b === undefined ? (b = 0) : (b = b)
    return a * b
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply }
