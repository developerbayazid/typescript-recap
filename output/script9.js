"use strict";
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = {
    name: 'Abu Sayed',
    age: 25,
    country: 'Bangladesh',
};
const userS = 'Mir Mugdho';
const res = addId(user);
console.log(res);
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
const response1 = {
    status: 200,
    type: ResType.SUCCESS,
    data: {
        name: 'abu Sayed',
        age: 33,
    },
};
console.log(response1);
