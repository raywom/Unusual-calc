function calculate() {
    let argumentsInput = document.getElementById('arguments').value;
    let operation = document.getElementById('operation').value;
    let result = document.getElementById('result');

    let args = argumentsInput.split(' ').map(Number);

    let calculationResult;
    if (operation === 'sum') {
        calculationResult = args.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
    } else if (operation === 'product') {
        calculationResult = args.reduce(function (accumulator, currentValue) {
            return accumulator * currentValue;
        }, 1);
    } else if (operation === 'maximum') {
        calculationResult = Math.max.apply(null, args);
    } else if (operation === 'minimum') {
        calculationResult = Math.min.apply(null, args);
    }

    result.value = calculationResult;
}

function saveData() {
    let argumentsInput = document.getElementById('arguments').value;
    let operation = document.getElementById('operation').value;
    let result = document.getElementById('result').value;

    let filename = prompt("Enter a filename to save the data:", "data.txt");
    if (filename) {
        let data = "Arguments: " + argumentsInput + "\n" +
            "Operation: " + operation + "\n" +
            "Result: " + result + "\n";

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}

function fillWithRandomIntegers() {
    let argumentsInput = document.getElementById('arguments');
    let randomIntegers = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    argumentsInput.value = randomIntegers.join(' ');
}

function changeTextColor() {
    let argumentsInput = document.getElementById('arguments');
    argumentsInput.style.color = document.getElementById('foreground-color').value;
}

function changeBackgroundColor() {
    let argumentsInput = document.getElementById('arguments');
    argumentsInput.style.background = document.getElementById('background-color').value;
}