const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertButton =
    document.getElementById("convertBtn");

const errorMessage =
    document.getElementById("error");

const celsiusResult =
    document.getElementById("celsius");

const fahrenheitResult =
    document.getElementById("fahrenheit");

const kelvinResult =
    document.getElementById("kelvin");


convertButton.addEventListener("click", function () {

    const inputValue =
        temperatureInput.value.trim();

    const unit =
        unitSelect.value;


    // Check empty input
    if (inputValue === "") {

        showError("Please enter a temperature.");

        return;
    }


    // Check numeric input
    const temperature =
        Number(inputValue);

    if (isNaN(temperature)) {

        showError(
            "Please enter a valid numeric temperature."
        );

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert from Celsius
    if (unit === "C") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;
    }


    // Convert from Fahrenheit
    else if (unit === "F") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // Convert from Kelvin
    else if (unit === "K") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // Absolute zero validation
    if (kelvin < 0) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        clearResults();

        return;
    }


    // Clear previous error
    errorMessage.textContent = "";


    // Display results
    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";
});


function showError(message) {

    errorMessage.textContent = message;
}


function clearResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}