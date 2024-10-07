"use strict";
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(7, 2));
let calculate;
calculate = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculate(7, 5, 'sub'));
