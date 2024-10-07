type numOrStr = number | string;
type userType = { name: string; age: number };

const userDetails = (id: numOrStr, user: userType) => {
    console.log(`UserId ${id}, User Name: ${user.name}, User Age: ${user.age}`);
};

const sayHi = (user: userType) => {
    console.log(`Hello ${user.name}, You are now ${user.age} years old`);
};

userDetails(13, { name: 'Bayazid', age: 23 });
sayHi({ name: 'Hasan', age: 27 });
