"use strict";
const myFunc = (a, b, c = '') => {
    return a + b + c;
};
console.log(myFunc(2, 4));
let doSomeThing;
doSomeThing = () => {
    return 'Hello World';
};
console.log(doSomeThing());
