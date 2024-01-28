export interface User {
    name: string;
    roles: string[];
    status: string;
}

export const users: User[] = [
    { name: 'Alice', roles: ['admin', 'user'], status: 'active' },
    { name: 'Bob', roles: ['user'], status: 'inactive' },
    { name: 'Charlie', roles: ['admin', 'moderator'], status: 'active' },
    { name: 'David', roles: ['user'], status: 'active' },
    { name: 'Eve', roles: ['admin', 'editor'], status: 'inactive' },
    { name: 'Emily', roles: ['moderator'], status: 'inactive' },
    { name: 'Frank', roles: ['admin', 'user'], status: 'active' },
    { name: 'George', roles: ['user'], status: 'inactive' },
    { name: 'Helen', roles: ['admin', 'moderator'], status: 'active' },
    { name: 'Irene', roles: ['user'], status: 'active' },
    { name: 'John', roles: ['moderator'], status: 'inactive' },
    { name: 'Kate', roles: ['editor', 'contributor'], status: 'active' },
    { name: 'Liam', roles: ['contributor'], status: 'inactive' },
];