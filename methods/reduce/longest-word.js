/**
 * using reduce, find the longest word in array of 10 words:
 * [“apple”, “banana”, “orange”, “grapefruit”, “kiwi”, “mango”, “tangerine”, “watermelon”, “papaya”, “passionfruit”]
 * => “grapefruit”
 */
var words = ["apple", "banana", "orange", "grapefruit", "kiwi", "mango", "tangerine", "watermelon", "papaya", "passionfruit"];
var longestWord = words.reduce(function (accumulator, word) {
    if (word.length > accumulator.length) {
        return word;
    }
    else {
        return accumulator;
    }
});
console.log(longestWord);
// run with: npx ts-node methods/reduce/longest-word.ts
