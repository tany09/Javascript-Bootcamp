let makeGuess = function (guess) {
    let max = 5;
    let min = 1;
    return guess === Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(makeGuess(5));