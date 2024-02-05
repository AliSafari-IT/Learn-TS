import City from "../../resources/data/City";
import { sevenRandomTripCities } from "../../resources/data/journeyPlans";

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
// Goal: Find the shortest path from start node to finish node. The start node and finish node are the same
// while visiting different cities given in the list itineraryNodes.
// - inputArray: List of cities that we want to visit and the finish node
// - outputArray: 3 shortest path from the start node to the finish node
const startNode: City = {
  name: "StartNode",
  rowIndex: 0,
  columnIndex: 0,
  neighbors: [],
};
const finishNode: City = {
  name: "FinishNode",
  rowIndex: 0,
  columnIndex: 0,
  neighbors: [],
};
const itineraryNodes = [...sevenRandomTripCities];
// Inserts startNode at the start of itineraryNodes and finishNode at the end
const inputArray = [startNode, ...itineraryNodes, finishNode];
console.log(inputArray.length);
const cityNames = inputArray.map((city: City) => city.name);
console.log("cityNames: ", cityNames);

const shortestPath = () => {
  let sum = 0;
  let min = Infinity;
  const visitedCities: City[] = [startNode];
  const leftOverCities: City[] = [...itineraryNodes];
  let cityA: City = inputArray[0];
  let cityB: City = inputArray[inputArray.length - 1];
  let i = 0;
  while (leftOverCities.length > 0 && i < inputArray.length - 1) {
    leftOverCities.map((city) => {
      let d = distance(city, cityA);
      if (d < min && d != 0) {
        cityB = city;
        min = distance(city, cityA);
      }
    });
    if (cityB === undefined) {
      break;
    }
    sum += min;
    visitedCities.push(cityB);
    leftOverCities.splice(leftOverCities.indexOf(cityB), 1);
    cityA = cityB;
    min = Infinity;

    console.log("visitedCities: ", visitedCities.length, " leftOverCities: ", leftOverCities.length);
    
    i++;
  }

  return visitedCities;
};

const getCity = (city: City) => {
  return inputArray[inputArray.indexOf(city)];
};

// distance between two given cities cityA(x,y) and cityB(x,y)
// is sqrt((x1-x2)^2 + (y1-y2)^2)
const distance = (cityA: City, cityB: City) => {
  return Math.sqrt(
    Math.pow(cityA.rowIndex - cityB.rowIndex, 2) +
      Math.pow(cityA.columnIndex - cityB.columnIndex, 2)
  );
};

// return  3 shortest path from the start node to the finish node
const outputArray = [...shortestPath()];
console.log(
  "outputArray: ",
  outputArray.map((city) => (city.name + ";" +  city.rowIndex + ";" + city.columnIndex))
);



// run with: npx ts-node AlgorithmicThinking/dijkstra/dijkstraAlgorithm-case1.ts
