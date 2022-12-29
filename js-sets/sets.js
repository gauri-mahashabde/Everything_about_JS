//A Set is a collection of unique elements that can be of any type.
//Set is also an ordered collection of elements.

//creation

const set = new Set();
//console.log(set);

const fruteSet = new Set(['🍉', '🍎', '🍈', '🍏','🍏']);
//console.log(fruteSet);

//console.log(fruteSet.size);

const saladSet = new Set();

saladSet.add('🍅'); 
saladSet.add('🥑');
saladSet.add('🥕'); 
saladSet.add('🥒'); 

//console.log(saladSet);

saladSet.add('🥒')

//console.log(saladSet.has('🥕'));
//console.log(saladSet.has('🥦'));

saladSet.delete('🥑');
//console.log('I do not like 🥑, remove from the salad:', saladSet);

saladSet.clear();
//console.log(saladSet);

const houseNos = new Set([360, 567, 101]);

// Get the SetIterator using the `values()` method
//console.log(houseNos.values());

//creation 

let employee = new Set();
console.log(employee);


employee.add('1');
employee.add('1');
employee.add('2');
employee.add('3');

console.log(employee);

let age = new Set();

age.add([{name1:"Gauri"}]);
age.add(["joye",35]);

console.log(age);