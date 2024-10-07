"use strict";
const userDetails = (id, user) => {
    console.log(`UserId ${id}, User Name: ${user.name}, User Age: ${user.age}`);
};
const sayHi = (user) => {
    console.log(`Hello ${user.name}, You are now ${user.age} years old`);
};
userDetails(13, { name: 'Bayazid', age: 23 });
sayHi({ name: 'Hasan', age: 27 });
