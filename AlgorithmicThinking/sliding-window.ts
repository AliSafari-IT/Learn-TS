// Problem:
// Given a list of integers and a target value, find the shortest subarray 
// that has a sum atleast equal or greater to the target value. If there are multiple solutions, 
// if there are multiple subarrays with the same sum, return the subarray with the smallest length.
// or return an empty array if there is no such subarray.

// example: [2, 7, 11, 15, 20, 14, 2, 11, 10] target = 36 => [2, 7, 11, 15, 20, 14]

const input = [2, 7, 11, 15, -20, 14, 2, 11, 10]
const targetValue = 20;

/**
 * Calculate sliding window sum less than or greater than the target value.
 *
 * @param {number[]} input - array of numbers
 * @param {number} targetValue - the target sum value
 * @param {boolean} isLessThan - flag to determine less than or greater than comparison (default: true)
 * @return {void} 
 */
function slidingWindowSumLessThanTarget(input: number[], targetValue: number, isLessThan: boolean = true): void {

    const windowSize = input.length;
    const output = [];
    for (let i = 0; i < windowSize; i++) {
        let sum = 0;
        let subarray = [];
        while (isLessThan && sum < targetValue && i < windowSize) {
            sum += input[i];
            subarray.push(input[i]);
            i++;
        }
        do {
            sum += input[i];
            subarray.push(input[i]);
            i++;
        } while (!isLessThan && sum < targetValue && i < windowSize)
        output.push(subarray);
    }

    console.log({ "All possible subarrays:": output });

    const minSubarray = output.reduce((a, b) => isLessThan? (a.reduce((a1, b1) => a1 + b1, 0) < b.reduce((a2, b2) => a2 + b2, 0) ? a : b):
    ( a.reduce((a1, b1) => a1 + b1, 0) >= b.reduce((a2, b2) => a2 + b2, 0) ? a : b));
    console.log({ "Shortest subarray:": minSubarray, case: isLessThan ? "whose sum is less than the target value" : "whose sum is greater than or equal to the target value" });
}

slidingWindowSumLessThanTarget(input, targetValue);
slidingWindowSumLessThanTarget(input, targetValue, false);

// run with: npx ts-node Learn\Learn-TS\AlgorithmicThinking\sliding-window.ts