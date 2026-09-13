# Temperature Converter

A clean and responsive temperature converter website built using HTML5, CSS3, and Vanilla JavaScript.

## Objective

The objective of this project is to build an interactive web tool that converts temperature values between Celsius, Fahrenheit, and Kelvin with input validation.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Features

- Convert between Celsius, Fahrenheit, and Kelvin
- Celsius / Fahrenheit / Kelvin input selector
- Displays all three converted values simultaneously
- Numeric input validation
- User-friendly error messages
- Absolute zero validation
- Responsive design for desktop and mobile
- Clean and centered user interface

## Temperature Conversion Formulas

- Celsius to Fahrenheit: `(C × 9/5) + 32`
- Fahrenheit to Celsius: `(F − 32) × 5/9`
- Celsius to Kelvin: `C + 273.15`
- Kelvin to Celsius: `K − 273.15`
- Fahrenheit to Kelvin: `(F − 32) × 5/9 + 273.15`
- Kelvin to Fahrenheit: `(K − 273.15) × 9/5 + 32`

## Validation

The converter handles:

- Empty input
- Non-numeric input
- Temperatures below absolute zero

Absolute zero limits:

- Celsius: `-273.15°C`
- Fahrenheit: `-459.67°F`
- Kelvin: `0 K`

## Project Structure

```text
WebDev-L1-Temperature-Converter/
├── index.html
├── style.css
├── script.js
└── README.md
