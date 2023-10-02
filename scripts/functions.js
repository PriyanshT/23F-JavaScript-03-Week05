/* STEP 1: Basic browser functions
		There are a number of functions 
        that are included with most modern browsers - 
        the replace() function is just one of many */
var step1 = "Hello! How are you?";
var step1a = step1.replace("are", "is");
console.log(step1);
console.log(step1a);
// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.

/* STEP 2: Anonymous versus named functions */
var step2Button = document.querySelector('#step2');
// Anonymous
step2Button.addEventListener("click", function () {
    alert("I am in an anonymous function.");
});

// Named function
function namedFunction() {
    alert("I am in a named function.");
}
step2Button.addEventListener("click", namedFunction);

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, 
and others are optional. */

// No parameters needed
var step3 = Math.random();
console.log(step3);

// Two parameters needed
function fun2(a, b) {
    console.log(a + b);
}
fun2(2, 3);
fun2(2, "Three");

// Parameters optional
// join
var array1 = ["apple", "banana", "grapes"];
console.log(array1.join());
console.log(array1.join(" - "));

// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions