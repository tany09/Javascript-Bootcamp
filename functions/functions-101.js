let fahrenheitToCelsius = function (value) {
    let result = (value - 32) * (5/9);
    return result;
}

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(68));