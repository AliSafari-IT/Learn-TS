
import City from "../../resources/data/City";
import {journeyPlan1, sevenRandomTripCities} from "../../resources/data/journeyPlans";

console.log(journeyPlan1.map((city: City) => city.name));

/**
 * Problem  1: Find the shortest path from start node to finish node
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

// Pseudocode for Dijkstra's algorithm - (Case 1): 
// Goal: Find the shortest path from start node to finish node. The start node and finish node are the same while visiting different cities given in the list itineraryNodes.
// - inputArray: List of cities that we want to visit and the finish node
// - outputArray: 3 shortest path from the start node to the finish node
const startNode: City = { name: 'StartNode', rowIndex: 0, columnIndex: 0, neighbors: [] };
const finishNode: City = { name: 'FinishNode', rowIndex: 50, columnIndex: 0, neighbors: [] };
const itineraryNodes = [...sevenRandomTripCities];
// Inserts startNode at the start of itineraryNodes and finishNode at the end
const inputArray = [startNode, ...itineraryNodes, finishNode];

// return  3 shortest path from the start node to the finish node
const outputArray = [];








// run with: npx ts-node AlgorithmicThinking/dijkstra/dijkstraAlgorithm-case1.ts
