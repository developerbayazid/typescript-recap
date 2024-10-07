const addId = <
    T extends {
        name: string;
        age: number;
    }
>(
    obj: T
) => {
    const id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

const user = {
    name: 'Abu Sayed',
    age: 25,
    country: 'Bangladesh',
};

const userS = 'Mir Mugdho';

const res = addId(user);

console.log(res);

enum ResType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
}

interface APIresponse<T> {
    status: number;
    type: ResType;
    data: T;
}

const response1: APIresponse<object> = {
    status: 200,
    type: ResType.SUCCESS,
    data: {
        name: 'abu Sayed',
        age: 33,
    },
};

console.log(response1);
