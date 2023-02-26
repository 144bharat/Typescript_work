// Declaring variable.
var a = 10;
// a="bharat";  error
// Declaring Array.
var arr = [1, 2, 3];
// Declaring functions.
var add = function (a, b) {
    return a + b;
};
add(10, 5);
// add(10,"bharat");    error
console.log(add(10, 5));
// Declaring objects.
// we have 3 types here 
// Object
// Object literal
// Record
var user = {
    id: 1,
    name: "bharat"
};
// user = {lastname:"kumar"}; //no error but bad practice.
var user2 = {
    id: 1,
    name: "bharat"
};
var user3 = {
    isIndian: true,
    isName: true,
    isEmployed: false
};
