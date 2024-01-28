import { User, users } from "../../data/users";

/**
 * Scenario: Checking User Access Based on Roles and Conditions
 * Imagine we have an array of user objects, each with a name, roles, and status. 
 * We want to check if there's at least one user who meets multiple criteria based 
 * on their roles and status.
 */

/**
 * 
 * @param users 
 * @param requiredRoles 
 * @param requiredStatus 
 * @returns 
 */
function hasAccess(users: User[], requiredRoles: string[], requiredStatus: string): boolean {
    return users.some(user => 
        requiredRoles.every(role => user.roles.includes(role)) && user.status === requiredStatus
    );
}

let userslist: User[] = users;

// to run with: npx ts-node methods/some/some-users.ts

// Check if there is any active 'admin'
console.log(hasAccess(userslist, ['admin'], 'active')); // true

// Check if there is any active user with both 'editor' and 'contributor' roles
console.log(hasAccess(userslist, ['editor', 'contributor'], 'active')); // true

// Check if there is any inactive 'admin' and 'editor'
console.log(hasAccess(userslist, ['admin', 'editor'], 'inactive')); // false

// Check if there is any inactive 'contributor'
console.log(hasAccess(userslist, ['contributor'], 'inactive')); // true
