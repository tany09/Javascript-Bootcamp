let tempConverter = function (fahrenheit) {
    return {
        celsius: (fahrenheit - 32) * (5/9),
        kelvin : (fahrenheit - 32) * (5/9) + 273.15,
        fahrenheit: fahrenheit
    }
}
let temperature = tempConverter(32);

console.log(`The temperature is ${temperature.celsius} celsius, ${temperature.fahrenheit} fahrenheit, ${temperature.kelvin} kelvin`);