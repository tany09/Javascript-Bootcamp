let person = {
    age: 24,
    name: 'Jagdeep',
    location: 'India'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`);
