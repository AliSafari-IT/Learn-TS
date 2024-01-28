/**
 * Feature:
 * Added a new functionality to calculate the frequency of words in an array
 * using the reduce method in TypeScript. This implementation efficiently counts
 * the occurrences of each unique word in a given array of strings and stores
 * the result in a Map for easy retrieval and display. This feature enhances
 * our data processing capabilities, especially in scenarios involving text
 * analysis and statistics.
 * e.g. ["watermelon", "banana", "orange", "grapefruit", "apple", "banana", "orange", "grapefruit", "watermelon", "apple", "banana", "grapefruit", "kiwi", "passionfruit"];
 * => Map(7) {
  'watermelon' => 2,
  'banana' => 3,
  'orange' => 2,
  'grapefruit' => 3,
  'apple' => 2,
  'kiwi' => 1,
  'passionfruit' => 1
}
 */
var fruits = ["watermelon", "banana", "orange", "grapefruit", "apple", "banana", "orange", "grapefruit", "watermelon", "apple", "banana", "grapefruit", "kiwi", "passionfruit"];
var frequencies = fruits.reduce(function (accumulator, fruit) {
    var _a;
    if (!accumulator.has(fruit)) {
        accumulator.set(fruit, 1);
    }
    else {
        accumulator.set(fruit, ((_a = accumulator.get(fruit)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    return accumulator;
}, new Map());
console.log(frequencies);
// run with: npx ts-node methods/reduce/word-frequency.ts
// or tsc methods/reduce/word-frequency.ts --watch then node methods/reduce/word-frequency.js
