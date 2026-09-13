const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

const errorMessage = document.getElementById("error-message");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
    const inputValue = temperatureInput.value.trim();
    const temperature = Number(inputValue);
    const selectedUnit = unitSelect.value;

    errorMessage.textContent = "";

    celsiusResult.textContent = "—";
    fahrenheitResult.textContent = "—";
    kelvinResult.textContent = "—";

    if (inputValue === "") {
        errorMessage.textContent = "Please enter a temperature value.";
        return;
    }

    if (!Number.isFinite(temperature)) {
        errorMessage.textContent =
            "Please enter a valid numeric temperature.";
        return;
    }

    if (selectedUnit === "celsius" && temperature < -273.15) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";
        return;
    }

    if (selectedUnit === "fahrenheit" && temperature < -459.67) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-459.67°F).";
        return;
    }

    if (selectedUnit === "kelvin" && temperature < 0) {
        errorMessage.textContent =
            "Kelvin temperature cannot be below absolute zero (0 K).";
        return;
    }

    let celsius;

    if (selectedUnit === "celsius") {
        celsius = temperature;
    } else if (selectedUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (selectedUnit === "kelvin") {
        celsius = temperature - 273.15;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}
