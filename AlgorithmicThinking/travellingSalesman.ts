/** Travelling salesman problem (Wikipedia: https://en.wikipedia.org/wiki/Travelling_salesman_problem) 
 *
 * Given a list of cities and the distances between each pair of cities, 
 * what is the shortest possible route that visits each city exactly once 
 * and returns to the origin city?
 */

// Constants: 
const CITIES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Distance matrix
const DISTANCES = [
    [0, 10, 15, 20, 25, 30, 35, 40],
    [10, 0, 5, 10, 15, 20, 25, 30],
    [15, 5, 0, 5, 10, 15, 20, 25],
    [20, 10, 5, 0, 5, 10, 15, 20],
    [25, 15, 10, 5, 0, 5, 10, 15],
    [30, 20, 15, 10, 5, 0, 5, 10],
    [35, 25, 20, 15, 10, 5, 0, 5],
    [40, 30, 25, 20, 15, 10, 5, 0]
];

// Function to find the shortest path
function findShortestPath(): void {
    // Calculate the total distance of the shortest path
    let totalDistance = 0;
    for (let i = 0; i < CITIES.length - 1; i++) {
        totalDistance += calculateDistance({ city1: CITIES[i], city2: CITIES[i + 1] });
    }
    totalDistance += calculateDistance({ city1: CITIES[CITIES.length - 1], city2: CITIES[0] });

    // Print the shortest path
    console.log('Shortest path:', CITIES);
    console.log('Total distance:', totalDistance);
}

// Function to calculate the distance between two cities
function calculateDistance({ city1, city2 }: { city1: string; city2: string; }): number {
    
    // Find the index of the cities in the CITIES array
    const index1 = CITIES.indexOf(city1);
    const index2 = CITIES.indexOf(city2);

    // Return the distance between the two cities
    return DISTANCES[index1][index2];    
}

// Find the shortest path
findShortestPath();

// run with: npx ts-node AlgorithmicThinking/travellingSalesman.ts