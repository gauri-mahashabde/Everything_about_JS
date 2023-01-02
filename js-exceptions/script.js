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