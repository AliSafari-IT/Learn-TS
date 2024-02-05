import City from "./City";
import { cities } from "./cities";

export const journeyPlan1: City[] = [
  {
    name: 'Aalst',
    rowIndex: 47,
    columnIndex: 21,
    neighbors: ['Zottegem', 'Haaltert', 'Geraardsbergen']
  },
  {
    name: 'Haaltert',
    rowIndex: 52,
    columnIndex: 19,
    neighbors: ['Aalst', 'Geraardsbergen']
  },
  {
    name: 'Geraardsbergen',
    rowIndex: 56,
    columnIndex: 33,
    neighbors: ['Haaltert', 'Izegem']
  },
  {
    name: 'Lede',
    rowIndex: 89,
    columnIndex: 74,
    neighbors: ['Haaltert']
  },
  {
    name: 'Sint-Lievens-Houtem',
    rowIndex: 38,
    columnIndex: 58,
    neighbors: ['Haaltert']
  }
];

// 5 Solo Adventures Cities
export const soloAdventuresCities: string[] = ['Zottegem', 'Haaltert', 'Geraardsbergen', 'Lede', 'Sint-Lievens-Houtem'];


// 7 Random Trip Cities
export const sevenRandomTripCities: City[] =
  [
    {
      name: 'Lint',
      rowIndex: 57,
      columnIndex: 37,
      neighbors: ['Gent', 'Lommel']
    },
    {
      name: 'Knokke-Heist',
      rowIndex: 37,
      columnIndex: 61,
      neighbors: ['Houthalen-Helchteren', 'Stekene']
    },
    {
      name: 'Lede',
      rowIndex: 89,
      columnIndex: 74,
      neighbors: ['Haaltert']
    },
    {
      name: 'Lommel',
      rowIndex: 79,
      columnIndex: 3,
      neighbors: ['Assendelft', 'Sint-Gillis-Waas']
    },
    { name: 'Herentals', rowIndex: 10, columnIndex: 10, neighbors: [] },
    {
      name: 'Sint-Gillis-Waas',
      rowIndex: 65,
      columnIndex: 35,
      neighbors: ['Aalst', 'Tielrode']
    },
    {
      name: 'Waregem',
      rowIndex: 77,
      columnIndex: 54,
      neighbors: ['Lede', 'Sint-Lievens-Houtem']
    }
  ];

const randomCity = cities[Math.floor(Math.random() * cities.length)];
// pop out the random city from the array to avoid duplicates
cities.length > 0 ? cities.splice(cities.indexOf(randomCity), 1) : null;


// Belgium Trip Cities
const belgiumTripCities: City[] = [randomCity];
// fill the array with 6 random cities
while (belgiumTripCities.length < 7) {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  // pop out the random city from the array to avoid duplicates
  cities.length > 0 ? cities.splice(cities.indexOf(randomCity), 1) : null;
  belgiumTripCities.push(randomCity);
}

// run with: npx ts-node resources\data\journeyPlans.ts