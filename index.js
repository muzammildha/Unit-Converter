#!/usr/bin/env node
import inquirer from "inquirer";
const metersToFeet = (meters) => meters * 3.28084;
const feetToMeters = (feet) => feet / 3.28084;
const kilogramsToPounds = (kg) => kg * 2.20462;
const poundsToKilograms = (lb) => lb / 2.20462;
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const litersToGallons = (liters) => liters * 0.264172;
const gallonsToLiters = (gallons) => gallons / 0.264172;
const convert = async () => {
    let answers = await inquirer.prompt([
        {
            name: "User_input",
            type: "list",
            message: "Select a method of conversion",
            choices: [
                'meters-to-feet', 'feet-to-meters',
                'kilograms-to-pounds', 'pounds-to-kilograms',
                'celsius-to-fahrenheit', 'fahrenheit-to-celsius',
                'liters-to-gallons', 'gallons-to-liters'
            ]
        },
        {
            name: "Value",
            type: "input",
            message: "Enter the value to convert",
            validate: (input) => {
                const Value = parseFloat(input);
                return !isNaN(Value) || "Please enter a valid number";
            }
        }
    ]);
    const Value = parseFloat(answers.Value);
    let result;
    switch (answers.User_input) {
        case 'meters-to-feet':
            result = metersToFeet(Value);
            console.log(`${Value} meters is ${result} feet`);
            break;
        case 'feet-to-meters':
            result = feetToMeters(Value);
            console.log(`${Value} feet is ${result} meters`);
            break;
        case 'kilograms-to-pounds':
            result = kilogramsToPounds(Value);
            console.log(`${Value} kilograms is ${result} pounds`);
            break;
        case 'pounds-to-kilograms':
            result = poundsToKilograms(Value);
            console.log(`${Value} pounds is ${result} kilograms`);
            break;
        case 'celsius-to-fahrenheit':
            result = celsiusToFahrenheit(Value);
            console.log(`${Value} celsius is ${result} fahrenheit`);
            break;
        case 'fahrenheit-to-celsius':
            result = fahrenheitToCelsius(Value);
            console.log(`${Value} fahrenheit is ${result} celsius`);
            break;
        case 'liters-to-gallons':
            result = litersToGallons(Value);
            console.log(`${Value} liters is ${result} gallons`);
            break;
        case 'gallons-to-liters':
            result = gallonsToLiters(Value);
            console.log(`${Value} gallons is ${result} liters`);
            break;
        default:
            console.log(`Invalid conversion type`);
    }
};
convert();
