const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const temperatureInput = document.getElementById('temperature');
const convertBtn = document.getElementById('convert-btn');
const resultInput = document.getElementById('result');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

convertBtn.addEventListener('click', function () {
    const temp = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(temp)) {
        resultInput.value = 'Please enter a valid number';
        return;
    }

    let resultTemp;

    // If units are the same
    if (from === to) {
        resultTemp = temp;
    }
    // From Celsius
    else if (from === 'celsius') {
        if (to === 'fahrenheit') {
            resultTemp = (temp * 9 / 5) + 32;
        } else if (to === 'kelvin') {
            resultTemp = temp + 273.15;
        }
    }
    // From Fahrenheit
    else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            resultTemp = (temp - 32) * 5 / 9;
        } else if (to === 'kelvin') {
            resultTemp = (temp - 32) * 5 / 9 + 273.15;
        }
    }
    // From Kelvin
    else if (from === 'kelvin') {
        if (to === 'celsius') {
            resultTemp = temp - 273.15;
        } else if (to === 'fahrenheit') {
            resultTemp = (temp - 273.15) * 9 / 5 + 32;
        }
    }

    resultInput.value = roundNumber(resultTemp);
});
