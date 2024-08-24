document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function updateDisplay(value) {
        output.textContent = value;
    }

    function clearAll() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    }

    function handleNumber(num) {
        currentInput += num;
        updateDisplay(currentInput);
    }

    function handleOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }

        currentInput = result;
        operator = '';
        previousInput = '';
        updateDisplay(result);
    }

    function handleBackspace() {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') {
            updateDisplay('0');
        } else {
            updateDisplay(currentInput);
        }
    }

    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay(currentInput);
        }
    }

    document.getElementById('clear').addEventListener('click', clearAll);
    document.getElementById('percent').addEventListener('click', function () { handleOperator('%'); });
    document.getElementById('backspace').addEventListener('click', handleBackspace);
    document.getElementById('division').addEventListener('click', function () { handleOperator('÷'); });
    document.getElementById('multi').addEventListener('click', function () { handleOperator('×'); });
    document.getElementById('minus').addEventListener('click', function () { handleOperator('-'); });
    document.getElementById('addition').addEventListener('click', function () { handleOperator('+'); });
    document.getElementById('equalto').addEventListener('click', calculate);
    document.getElementById('dot').addEventListener('click', handleDecimal);

    // Number buttons
    document.getElementById('num1').addEventListener('click', function () { handleNumber('1'); });
    document.getElementById('num2').addEventListener('click', function () { handleNumber('2'); });
    document.getElementById('num3').addEventListener('click', function () { handleNumber('3'); });
    document.getElementById('num4').addEventListener('click', function () { handleNumber('4'); });
    document.getElementById('num5').addEventListener('click', function () { handleNumber('5'); });
    document.getElementById('num6').addEventListener('click', function () { handleNumber('6'); });
    document.getElementById('num7').addEventListener('click', function () { handleNumber('7'); });
    document.getElementById('num8').addEventListener('click', function () { handleNumber('8'); });
    document.getElementById('num9').addEventListener('click', function () { handleNumber('9'); });
    document.getElementById('num0').addEventListener('click', function () { handleNumber('0'); });
    document.getElementById('num00').addEventListener('click', function () { handleNumber('00'); });

    // Initialize display
    updateDisplay('0');
});
