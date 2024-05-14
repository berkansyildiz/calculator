let currentInput = '';

function inputValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate(operation) {
    if (operation === 'sqrt') {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    } else if (operation === 'square') {
        currentInput = (parseFloat(currentInput) * parseFloat(currentInput)).toString();
    } else {
        currentInput += operation;
    }
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
}
