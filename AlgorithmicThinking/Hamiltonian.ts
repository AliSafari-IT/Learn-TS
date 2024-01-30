
function findAllHamiltonianPaths(nums: number[]): number[][] {
    // Function to swap elements in the array
    function swap(arr: number[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Function to calculate the 'length' of a path
    function calculatePathLength(path: number[]): number {
        let length = 0;
        for (let i = 1; i < path.length; i++) {
            length += Math.abs(path[i] - path[i - 1]);
        }
        return length;
    }

    // Recursive function to generate permutations
    function generatePermutations(arr: number[], start: number, result: number[][]): void {
        if (start === arr.length) {
            result.push([...arr]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            generatePermutations(arr, start + 1, result);
            swap(arr, start, i); // backtrack
        }
    }

    const result: number[][] = [];
    generatePermutations(nums, 0, result);
    return result.sort((a, b) => calculatePathLength(a) - calculatePathLength(b));
}

// Example usage
const nums = [3, 1, 2, 4];
const paths = findAllHamiltonianPaths(nums);
console.log(paths);

// run with: npx ts-node AlgorithmicThinking/Hamiltonian.ts