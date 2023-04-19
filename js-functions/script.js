
//function-something that is used to run or complete a task

//normal js function

function callMe(){
    return `Good morning`
}

console.log(callMe()); // function calling

//function with parameter or arguments passed

function wishMe(name){
    return `Good Morning ${name}`
}

console.log(wishMe("Gauri"));
console.log(wishMe("Sachin"));
console.log(wishMe("Keerti"));

//function with more than 1 argument

function add(a,b,c){
    console.log(arguments.length);
    console.log(arguments[0]);
    return a+b+c;
}

add(1,2);

const add2 = (a,b,c)=>  {
    //console.log(abc.arguments.length);
    return a + b + c}

add2(1,2,3);

function addAll(...n ){
    console.log(n);
    sum = 0;
    for(x of arguments) {
    sum = sum + x; }
}

//addAll(10,20,30,40,50,60,70);
addAll();

const addAll2 = (...n) => {
    console.log(n)
    sum = 0;
for(let i=0;i<n.length;i++){
    sum = sum + n[i];

}
console.log(sum);
}

addAll2(10,20,30,40,50,60,70,80);


