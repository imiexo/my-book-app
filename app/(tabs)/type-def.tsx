export type User = {
    id: number;
    name: string;
    company: {
        name: string;
    }
    username: string;
    email: string;
    address: {
        street: string;
    },
    zip: string;
    state: string;
    country: string;
    phone: string;
    photo: string;
    [key: string]: any;
};

export type UserFetched = {
    user: User | null; //a property named 'user' that can be a type of 'User'
    error: string | null; //a property named 'error' that can be of type 'string'
}
