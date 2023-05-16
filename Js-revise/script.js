//declaring a variable

var name = "Gauri";
let name1 = "gauri";
const name2 = "Gauri";

//data types in js
//primitive datatype

//number
var age1 = 23;
//console.log(age);
//string
var job = "software designation";
//console.log(job);
//boolean
var toVote = true;
//console.log(toVote);
//undefined
var employee;
//console.log(employee);
//null
var name4 = null;
//console.log(null);
//bigint
var num = 123445679584095950495;
//console.log(num);

//non-primitive data type

//object
const emp = {
  id: 001,
  username: "Gauri Mahashabde",
  designation: "Software Engineer",
  techStack: {
    frontend: {
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JS",
      stack4: "React JS",
    },
    Backend: {
      stack5: "Node.js",
    },
    Database: {
      stack6: "Mysql",
      stack7: "Mongodb",
    },
  },

  tobedeployed: function () {
    console.log("ready for deployment");
  },
};

/*console.log(emp);
console.log(emp.id);
console.log(emp.username);
console.log(emp.designation);
console.log(emp.techStack);
console.log(emp.techStack.frontend);
console.log(emp.techStack.Backend);
console.log(emp.techStack.Database);
console.log(emp.tobedeployed());

emp.sal = "3.5lpa";

console.log(emp);*/

// array
//creating an empty array
const nums = [];
console.log(nums);

console.log(nums.length);

//adding a new element
nums.push(10);
nums.push(20);
nums.push(30);
nums.push(40);
nums.push(50);
nums.push(60);

console.log(nums);

//iterating over the array using for loop

for (let i = 0; i < nums.length; i++) {
  //console.log(nums[i]);
}

//iterating over the array using for in loop

for(let i in nums){
  //console.log(nums[i]);
}

//iterating over the array using for of loop
for(let i of nums){
  //console.log(i);
}

//iterating over an array using for each 
//nums.forEach(element => /*console.log(element)*/);

//map , lets add 10 to each element

const nums1 = nums.map(i=> i +  10);
//console.log(nums1);

//filter
const age = [24,18,16,15,14,19,23,34,12]

const nums2 = age.filter(i=> i>=18);
//console.log(nums2);

//reduce
const nums3 = nums.reduce((acc,cur)=>acc+cur);
//console.log(nums3);

//array of objects
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "station wagon",
    "registration": new Date('2019-03-03'),
    "capacity": 5
  }
]

console.log(cars);

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

const usersList = users.map(function (user) {
  return `${user.first_name} ${user.last_name}`;
});

console.log(usersList);

