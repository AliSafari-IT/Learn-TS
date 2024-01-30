import { Employee, employees } from "../../resources/data/employees";

/**
 * Problem: Employee Eligibility for a Special Project
You are given an array of employee objects. Each employee object has the following properties:

name: string
age: number
yearsOfExperience: number
department: string
Your task is to write a TypeScript function that determines whether all employees in 
a given department are eligible to work on a special project. The eligibility criteria are as follows:

            The employee must be at least 30 years old.
            The employee must have at least 5 years of experience.
 */

/**
 * 
 * @param employees 
 * @param department 
 * @returns 
 */
function areAllEligible(employees: Employee[], department: string): boolean {
    // Filter employees by the specified department first
    const departmentEmployees = employees.filter(employee => employee.department === department);

    // Then check if every employee in that department meets the age and experience criteria
    return departmentEmployees.every(employee => employee.age >= 30 && employee.yearsOfExperience >= 5);
}


const employeesSmallList: Employee[] = [
    { name: 'Alice', age: 32, yearsOfExperience: 6, department: 'HR' },
    { name: 'Bob', age: 29, yearsOfExperience: 7, department: 'HR' },
    { name: 'Charlie', age: 35, yearsOfExperience: 10, department: 'HR' },
    // ... more employees
];

console.log(areAllEligible(employees, 'Development')); // Should return false
console.log(areAllEligible(employeesSmallList, 'HR')); // Should return true for employeesSmallList


// run with: npx ts-node methods/every/employees.ts