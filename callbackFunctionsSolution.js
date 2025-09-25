let even_predicate = function (value)
{
     return typeof value === "number" && value % 2 === 0;
     // Only returns true for even
};

let odd_predicate = function (value)
{

     return typeof value === "number" && value % 2 !== 0;
     // Only returns true for odds
};

let undefined_predicate = function (value)
{
    return typeof value === "undefined";
    // ONLY checking for undefined specifically
};

let null_predicate = function (value)
{
    return value === "null";
    // ONLY checking for null specifically
};


let check = function (predicate,value)
{
    return predicate(value);
    // Takes the Predicate and a value and returns predicate
};

console.log(check(even_predicate, 9)); // false
console.log(check(odd_predicate, 9)); // true
console.log(check(even_predicate, 8)); // true 
console.log(check(odd_predicate, 8)); // false
let x;
console.log(check(undefined_predicate, x)); // true
console.log(check(null_predicate, x)); // false
