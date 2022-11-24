//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

const names = {
  firstName: "peter",
  middleaName: "mark",
  lastName: "ben",
};

//document.getElementById("object").innerHTML= names.firstName + "  "  +names.middleaName + "  "+ names.lastName;

//object properties
//"key: value" pairs are called properties

let person = {
  name: 'John',
  age: 20
};

//console.log(person);

//Accessing Object Properties
//Using dot Notation
//objectName.key

const person2 = {
  name: 'mark',
  age: 20,
};

// accessing property
//onsole.log(person2.name);

//document.getElementById("object").innerHTML=person2.age

//Using bracket Notation
//objectName["propertyName"]

const person3 = {
  name: 'peter',
  age: 20,
};

//console.log(person3["name"]);

//document.getElementById("object").innerHTML = person3["name"]

//creating Javascript Objects
//By object literal
//By creating instance of Object directly (using new keyword)
//By using an object constructor (using new keyword)

//object literal
//object={property1:value1,property2:value2.....propertyN:valueN} 

const student = { name: "peter", rollno: 101, domain: "Computers" }
//console.log(student);
//document.getElementById("object").innerHTML=student.name + " is " + student.rollno + " is" + student.domain;

// By creating instance of Object

const student2 = { name: "mark", rollno: 102, domain: "mechanics" };

//document.getElementById("object1").innerHTML = student2.name + " roll no is " + student2.rollno + " he belongs to " + student2.domain;

const cars = {
  color: "red",
  cost: 5000000,
  company: "maruti",
}


//Creating objects using the ‘new’ keyword

const person1 = new Object();

//add property
person1.firstName = 'peter';
person1.lastName = 'joe';

//console.log(person1);

//new method

function Person0(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

//add property

const personOne = new Person0('mary', 'kom');
const personTwo = new Person0('kam', 'peter');

//console.log(personOne);
//console.log(personTwo);

const college = {
  class: 10,
  section: 3,
  subjects: {
    class1: "Physics",
    class2: "Biology",
    class3: "Chemistry",
  },
  students: {

    stu1: "mark",
    stu2: "peter",
    stu3: "joe",

  },
  admit() {
    //console.log("A new student is admitted");
  }
}

college.admit();
//console.log(college.subjects);

//function admit(){
// console.log("A new student is admitted");
//}

//admit();
//console.log(college);

//college.staff = 15;
//college.books = 200;
//console.log(college);

//factory  function

function createcollege() {
  return {
    class: 30,
    section: 3,
    subjects: {
      class1: "Physics",
      class2: "Biology",
      class3: "Chemistry",
    },
    students: {

      stu1: "mark",
      stu2: "peter",
      stu3: "joe",

    },
    admit() {
      //console.log("A new student is admitted");
    }

  }
}


const college1 = createcollege();

college1.admit();
college1.lab = {
  history: 2,
  biology: 3,
}

//console.log(college1);




function createstore(products) {
  return {
    products: products,
    add() {
      //console.log("New item Added");
    }
  }
}

const store = createstore("pencil");


store.add();
//console.log(store);


var a = 10;
var a = 20;

//console.log(a);

let a1 = 10;
let b1 = 20;

//console.log(a1);

const x = 37;
const y = 30;
//console.log(x);

function createcollege() {
  return {
    class: 10,
    section: 3,
    subjects: {
      class1: "Physics",
      class2: "Biology",
      class3: "Chemistry",
    },
    students: {

      stu1: "mark",
      stu2: "peter",
      stu3: "joe",

    },
    admit() {
      //console.log("A new student is admitted");
    }
  }


}



const colleg = createcollege();

function createstore(items) {
  return {
    items,
    abc: dummy,
    add() {
      //console.log("New item Added");
    }
  }
}

const store1 = createstore("pen");


store1.quantity = 30;
store1.items1 = "keys"
store1.items2 = "pencil"
store1.items3 = "pen"

//console.log(store1);

function dummy() {
  //console.log("its a dummy student");
}

//pass by value 

let A = 20;

let B = A;

//B = A + 10;

//A = 25


//console.log(A);
//console.log(B);

obj1 = {
  name: "sharanya",
  lname: "srinivas",
}

obj2 = obj1;

//obj2.lname="ramam";
//console.log(obj1);
//console.log(obj2);

let arr1 = [1, 2, 3];

let arr2 = arr1;

//arr2.push(4);

//console.log(arr1);
//console.log(arr2);


function createcollege(class1, lecturer, students) {
  return {
    class1, lecturer, students,

    admit() {
      //console.log("A new student is admitted");
    }
  }


}

const PCJabin = createcollege(10, 30, 300);

//console.log(PCJabin);

let c = 10;

let d = c;

//d = c + 5;

c = d + 5;

//console.log(c);
//console.log(d);

const object10 = {
  user: "mark",
  pass: 1111,
}

object20 = object10;

object20.pass = 2222;
object10.pass = 3333;

//console.log(object10);
//console.log(object20);

const array1 = [1, 2, 3];
const array2 = array1;

array2.push(4);

//console.log(array1);
//console.log(array2);


//builder

//1000 homes object
//1000 methods
//first step is to create a object
//alen xyz(alen);

//constructor function
//A constructor is a function that creates an instance of a class which is typically called an “object”. 
//In JavaScript, a constructor gets called when you declare an object using the new keyword.


function User(first, last) {
  this.firstName = first
  this.lastName = last
}


var user1 = new User("Jon", "Snow")
//console.log(user1)
var user2 = new User("Ned", "Stark")
//console.log(user2)
var user3 = new User("jhon", "doe")
//console.log(user3)
var user4 = new User("mark", "hen")
//console.log(user4);


function Students(rollno, names, marks) {
  this.rollno = rollno
  this.names = names
  this.marks = marks
  this.admit2 = () => {
    console.log("A new student is admiteed");
  }
}


var students1 = new Students(101, "Peter", 45)
var students2 = new Students(102, "Mark", 50)
var students3 = new Students(103, "Henry", 35)

students2.admit2();


console.log(students1);
console.log(students2);
console.log(students3.marks);

const Car12 = {
  name: "bmw",
  cost: 6000000,
}

console.log(Car12);

function addcheese(){
  console.log("cheese is added");
}

function addsauses(){
  console.log("sauses are adder");
}

function addveggies(){
  console.log("veggies are added");
}

function associateCheese(obj){
  obj.addcheese = addcheese
}



const burger ={
  name:"cheese burger",
}

associateCheese(burger);
//console.log(burger);

function associateSauses(obj){
  obj.addsauses = addsauses
}

associateSauses(burger);
//console.log(burger);

function associateVeggies(obj){
  obj.addveggies = addveggies
}

associateVeggies(burger);
console.log(burger);
