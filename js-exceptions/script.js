let name1 = "gauri";

try {
    console.log("It doesnt have any error");
        newsname();
} catch (error) {
    console.log("It have some error");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

try {
    myName();
} catch (error) {
   if (error instanceof SyntaxError)
   {
console.log("This is a syntax error");
   }else if (error instanceof ReferenceError)
   {
   console.log("This is a reference error");
   }
   else if (error instanceof TypeError)
   {
   console.log("This is a type error");
   }

    else {
        console.log("This is a Unknown error");
    }
}