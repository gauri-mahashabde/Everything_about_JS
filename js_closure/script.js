//closure
//Closures are functions that refer to independent (free) variables. 
//In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

//step1
function init(){
    const name = "Gauri"
    function displayName(){
        console.log(name);
    }
    displayName()
}

//init();

//step2
function myFunc(){
    const name = "Gauri"
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const funcCall = myFunc();
funcCall();

