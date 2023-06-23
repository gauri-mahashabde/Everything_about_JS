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

function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error("InvalidMonthNo"); // throw keyword is used here
    }
  }
  
  try {
    // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  } catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  }