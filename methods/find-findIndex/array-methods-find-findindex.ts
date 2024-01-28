import { fruits } from "../../data/fruits";

let data = fruits;

/**
 * 
 * @returns the first fruit that starts with the letter 'a'
 */
function findFirstFruitStartingWithA(): string | undefined {
  return data.find((fruit) => fruit.startsWith('a'));
}


console.log('First fruit starting with a:', findFirstFruitStartingWithA());

/**
 * 
 * @returns the index of the first orange
 */
function findIndexOfOrange(): number | undefined {
  return data.findIndex((fruit) => fruit === 'orange');
}

console.log('Index of orange:', findIndexOfOrange());


// run with: npx ts-node methods/find-findIndex/array-methods-find-findindex.ts