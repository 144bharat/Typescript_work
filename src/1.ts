// Declaring variable.
let a:number=10;
// a="bharat";  error

// Declaring Array.

let arr:number[]=[1,2,3];

// Declaring functions.

const add = (a:number,b:number):number => {
return a+b;
}

add(10,5);
// add(10,"bharat");    error
console.log(add(10,5));

// Declaring objects.

// we have 3 types here 
        // Object
        // Object literal
        // Record
let user:Object = {
    id:1,
    name:"bharat",
}
// user = {lastname:"kumar"}; //no error but bad practice.

let user2:{id:number;name:string;} = {  // lastname:string;
    id:1,
    name:"bharat",
                        // error lastname not present here.
}

let user3:Record<string,boolean> = {    // Record< key datatype , value datatype > only accepts.
    isIndian:true,
    isName:true,
    isEmployed:false,
    // isMoney:500,     // error only accepts boolean values.
}


