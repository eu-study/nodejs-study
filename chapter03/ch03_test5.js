let person = {}

person.name = 'eubug';
person['age'] = 21;
person.newYear = function() { person.age += 1; };

console.log('year 2020: ' + person.age);
person.newYear();
console.log('year 2021: ' + person.age);

