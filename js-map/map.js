//Map is a collection of key-value pairs where the key can be of any type
//Map remembers the original order in which the elements were added to it, 

const map = new Map();

console.log(map);

const cars = new Map([["car1","BMW"],["car2","Benz"],["car3","Mercedes"]]);

console.log(cars);

const students = new Map();

students.set('Ananya','101');
students.set('Bhagya','102');
students.set('Chaitra','103');

console.log(students);

const employee = new Map([["Arun","001"],["Bharat","002"],["Chaitra","003"]]);

console.log(employee);

const result = employee.get('Arun');

console.log(result);