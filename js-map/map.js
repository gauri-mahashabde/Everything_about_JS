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

/*properties
Use the size property to know how many elements are in a Map
Search an element with the has(key) method
Remove an element with the delete(key) method
Use the clear() method to remove all the elements from the Map at once*/

const employees =  new Map([["Arun","001"],["Bharat","002"],["Chaitra","003"]]);

const size = employees.size;

console.log(size);


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits.has('apples'));

  fruits.delete("apples");
  console.log(fruits);

  //fruits.clear();
//console.log(fruits);

//iterator in maps

const ageMap = new Map([
  ['Jack', 20],
  ['Alan', 34],
  ['Bill', 10],
  ['Sam', 9]
]);

//get keys ,values and key-value pair

console.log(ageMap.keys());
console.log(ageMap.values());
console.log(ageMap.entries());

//using for each
  ageMap.forEach((value,key)=>{
    //console.log(`${key} is ${value} years old`)
  })

  //using for of
  for(const [key, value] of ageMap) {
    //console.log(`${key} is ${value} years old!`);
   }
 