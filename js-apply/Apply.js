// object definition
const personName = {
  firstName: "Taylor",
  lastName: "Jackson",
};

// function definition
function greet(wish, message) {
  return `${this.firstName}, ${wish}. ${message}`;
}

// calling greet() function by passing two arguments
let result = greet.apply(personName, ["Good morning", "How are you?"]);

console.log(result);

// Output:
// Taylor, Good morning. How are you?


// object definition
const car = {
  name: "BMW",
  description() {
    return `The ${this.name} is of ${this.color} color.`;
  },
};

// object definition
const bike = {
  name: "Duke",
  color: "black",
};

// bike is borrowing description() method from car using apply() 
let result1 = car.description.apply(bike);

console.log(result1);