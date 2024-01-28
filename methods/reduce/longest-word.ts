/**
 * using reduce, find the longest word in array of 10 words: 
 * [“apple”, “banana”, “orange”, “grapefruit”, “kiwi”, “mango”, “tangerine”, “watermelon”, “papaya”, “passionfruit”] 
 * => “grapefruit”
 */

import { words } from "../../data/words";

let fruitArray = ["apple", "banana", "orange", "grapefruit", "kiwi", "mango", "tangerine", "watermelon", "papaya", "passionfruit"];

let longestWord = fruitArray.reduce((accumulator, fruit) => {
    if (fruit.length > accumulator.length) {
        return fruit;
    } else {
        return accumulator;
    }
})

console.log(longestWord);
// run with: npx ts-node methods/reduce/longest-word.ts

const newArray = {} as any;
newArray.extended = fruitArray.concat(words);
newArray.words = [...fruitArray];
newArray.longestWord = longestWord;


console.log(newArray);


