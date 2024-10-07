let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
    return a + b;
};

console.log(add(7, 2));

let calculate: (x: number, y: number, z: string) => number;

calculate = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
};

console.log(calculate(7, 5, 'sub'));
