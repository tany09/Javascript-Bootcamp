let isValidPassword = function (stringValue) {
    return (stringValue.length > 8) && !(stringValue.includes('password'));
}

console.log(isValidPassword('dhfi'));
console.log(isValidPassword('djerghrjnpassword'));
console.log(isValidPassword('jvrnfenf;je893838'));