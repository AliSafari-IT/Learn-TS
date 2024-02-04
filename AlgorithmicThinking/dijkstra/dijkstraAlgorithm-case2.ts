
import City from "../../resources/data/City";
import {journeyPlan1} from "../../resources/data/journeyPlans";

console.log(journeyPlan1.map((city: City) => city.name));

/**
 * Problem: Find the shortest path from start node to finish node with conditions:
 * 
 *  - The start node and finish node are the same.
 *  - 
 * 
 * 
 * We have a map of cities, where each city is represented as a node in the graph
 * that can be located on the map using its Row and Column numbers.
 * Our map is a 100x100 grid. Each grid cell on the map can be represented by a city.
 * Each city is connected to other cities as its neighboring nodes.
 *
 * We have a list of cities that we want to visit. The last grid cell to visit is
 * the final destination given as a coordinate on the map. This
 * is named as finish node. The first grid cell to start our journey from is the
 * starting point given as a coordinate on the map. This is named as start node.
 *
 * Given a list of visiting cities and a finish node, find the shortest path from
 * the start node to the finish node.
 * */

/**
 * Problem 2: Find the shortest path from start node to finish node
 */

// Graph to demonstrate cities and distances used for Dijkstra's algorithm
 
  
// run with: npx ts-node AlgorithmicThinking/dijkstra/dijkstraAlgorithm.ts



// Pseudocode:
// - Initialize a priority queue with the source node.
// - While the priority queue is not empty:
//     - Remove the node with the smallest distance from the priority queue.
//     - For each neighbor of the removed node:
//         - Calculate the total distance from the source node to the neighbor node.
//         - If the total distance is less than the current distance from the source node to the neighbor node:
//             - Update the distance from the source node to the neighbor node.
//             - Add the neighbor node to the priority queue.
