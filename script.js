// script.js
document.getElementById('converter').addEventListener('submit', function (e) {
    e.preventDefault();

    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result;

    if (type === 'Fahrenheit') {
        result = (degrees - 32) * 5 / 9;
    } else {
        result = (degrees * 9 / 5) + 32;
    }

    document.getElementById('result').value = result.toFixed(4) + (type === 'Fahrenheit' ? ' °C' : ' °F');
});
