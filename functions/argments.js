let tipCalculator = function (total = 1000, tipPercent = 0.1) {
    let tip = total * tipPercent;
    return `A ${tipPercent * 100}% tip on ${total} bill would be ${tip}`;
}

console.log(tipCalculator(undefined, 0.2));