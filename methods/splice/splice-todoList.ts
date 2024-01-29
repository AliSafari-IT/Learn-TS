/***
 * 
The splice() method in JavaScript is a versatile function used for adding or 
removing items from an array. It can change the content of an array by removing 
existing elements and/or adding new elements. 
*/

// Example
/**
 *  perform various operations on a TODO list, such as adding new tasks, removing tasks, and replacing tasks, using the splice() method.
 */
let toDoList = ['Wake up', 'Brush teeth', 'Exercise', 'Start working', 'Lunch'];

// Add a new task at the beginning
toDoList.splice(0, 0, 'Check emails');
// toDoList is now ['Check emails', 'Wake up', 'Brush teeth', 'Exercise', 'Start working', 'Lunch']
console.log(toDoList);
// Remove 'Exercise'
const indexToRemove = toDoList.indexOf('Exercise');
if (indexToRemove !== -1) {
  toDoList.splice(indexToRemove, 1);
}
// toDoList is now ['Check emails', 'Wake up', 'Brush teeth', 'Start working', 'Lunch']
console.log(toDoList);
// Replace 'Lunch' with 'Have lunch'
const indexToReplace = toDoList.indexOf('Lunch');
if (indexToReplace !== -1) {
  toDoList.splice(indexToReplace, 1, 'Have lunch');
}
// toDoList is now ['Check emails', 'Wake up', 'Brush teeth', 'Start working', 'Have lunch']

console.log(toDoList);
console.log(toDoList.splice(2,2, 'Have breakfast', 'Have dinner', 'Have lunch2'));
console.log(toDoList);



// run with: npx ts-node methods/splice/splice-todoList.ts