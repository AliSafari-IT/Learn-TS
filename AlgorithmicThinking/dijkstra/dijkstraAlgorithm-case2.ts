import { cities } from "../../resources/data/cities";
import {
  finishNode,
  journeyPlan1,
  startNode,
} from "../../resources/data/journeyPlans";
import { City, ParentChildren } from "../../resources/interfaces";

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
 * Problem 2: Find the shortest path from start node to finish node with conditions:
 *  we can visit the closest city  to the current visited city before moving to the next city
 *  unless that city is already visited
 */

// Graph to demonstrate cities and distances used for Dijkstra's algorithm

const inputArray = [
  //    startNode, /** Excluded from the inputArray as it was already included in visitedCities */
  ...journeyPlan1,
  finishNode,
];
const leftOverCities: City[] = [...journeyPlan1, finishNode];
const parentChildrenArray: ParentChildren[] = [];

// distance between two given cities cityA(x,y) and cityB(x,y)
// is sqrt((x1-x2)^2 + (y1-y2)^2)
const distance = (cityA: City, cityB: City) => {
  return Math.sqrt(
    Math.pow(cityA.rowIndex - cityB.rowIndex, 2) +
      Math.pow(cityA.columnIndex - cityB.columnIndex, 2)
  );
};

// Pseudocode for Dijkstra's algorithm - (Case 2):
/**
 * Step 1: create a graph of cities and their chiildren neighbors in the form of a list of objects with parent and children properties
 */
inputArray.map((city: City) => {
  const pc = {
    parent: city.name,
    children: city.neighbors,
  };
  parentChildrenArray.push(pc);
});

export function countCities(parentChildrenArray: ParentChildren[]): number {
  let totalCities = 0;

  // Iterate over each ParentChildren object in the array.
  parentChildrenArray.forEach((item) => {
    totalCities += 1; // Count the parent city.
    totalCities += item.children.length; // Add the count of child cities.
  });

  return totalCities;
}

const totalCities = countCities(parentChildrenArray);

console.log("Total Cities: ", totalCities);
console.log(
  parentChildrenArray.map((pc) => pc.children.map((c) => c).join(" -> "))
);
/**
 * Step 2: Loop through parentChildrenArray and find the closest city to the current visited city before moving to the next city
 * unless that city is already visited. If the closest city is not already visited, add it to the visitedCities array.
 */
let sum = 0;
let min = Infinity;
let minChild = Infinity;
const visitedCities: City[] = [startNode];
let cityA: City = startNode,
  cityB: City = finishNode,
  neighboringCity: City;
let i = 0;
console.log(
  `Total cities: ${parentChildrenArray
    .map((pc) => pc.parent + " -> Children: " + pc.children.map((c) => c))
    .join(" -> ")}`,
  parentChildrenArray
);

while (parentChildrenArray.length > 0 && i < totalCities) {
  parentChildrenArray.map((pc) => {
    pc.children.map((city) => {
      // find the closest city to the current visited city before moving to the next city
      const childCity = cities.map(
        (c) => c.name === city
      )[0] as unknown as City;
      let d = distance(childCity, cityA);
      if (d && d < min && d != 0) {
        cityB = childCity;
        min = d;
      }
    });
    // if min not Infinity then sum += min
    if (min !== Infinity) {
      sum += min;
      visitedCities.push(cityB);
      neighboringCity = cities.map(
        (c) => c.name === cityB.name
      )[0] as unknown as City;
      pc.children.splice(pc.children.indexOf(neighboringCity.name), 1);
    }
  });
}

console.log(`Total distance: ${sum.toFixed(0)}`);

// run with: npx ts-node AlgorithmicThinking/dijkstra/dijkstraAlgorithm-case2.ts
