document.addEventListener('DOMContentLoaded', function() {
    const celciusInput = document.querySelector('.section-celcius textarea');
    const fahrenheitInput = document.querySelector('.section-fahrenheit textarea');
    const result = document.querySelector('.section-result textarea');
    const convertButton = document.getElementById('button-convert');
    const resetButton = document.getElementById('button-reset');
    const reverseButton = document.getElementById('button-reverse');

    function convertToFarhenheit(celcius) {
        return (celcius * 9 / 5) + 32;
    }

    function convertToCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    convertButton.addEventListener('click', function() {
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = convertToFarhenheit(celciusValue);
            fahrenheitInput.value = fahrenheitValue;
            result.value = celciusValue + ' * (9/5) + 32 = ' + fahrenheitValue + '°F';
        } else {
            alert('Masukkan suhu dalam bentuk angka!');
        }
    });

    resetButton.addEventListener('click', function() {
        celciusInput.value = '';
        fahrenheitInput.value = '';
        result.value = '';
    });

    reverseButton.addEventListener('click', function() {
        const temp = celciusInput.value;
        celciusInput.value = fahrenheitInput.value;
        fahrenheitInput.value = temp;
    });
});
