const myFunc = (a: number, b: number, c: string = ''): string => {
    return a + b + c;
};

console.log(myFunc(2, 4));

let doSomeThing: Function;

doSomeThing = (): string => {
    return 'Hello World';
};
console.log(doSomeThing());
