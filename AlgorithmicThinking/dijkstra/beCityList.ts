import City from "../../resources/data/City";
import { cities } from "../../resources/data/cities";


const citiesList : City[] = [
    //Middelkerke,28,69,Assendelft,Waasmunster,Sint-Kruis-Winkel,Waregem
    {
      name: 'Middelkerke',
      rowIndex: 28,
      columnIndex: 69,
      neighbors: [ 'Assendelft', 'Waasmunster', 'Sint-Kruis-Winkel', 'Waregem' ]
    }
  ];

  const cityNames: string []= ['Haaltert', 'Geraardsbergen', 'Lede', 'Sint-Lievens-Houtem', 'Wervik', 'Avelgem', 'Waregem', 'Izegem', 'Poperinge', 'Dendermonde', 'Sint-Gillis-Waas', 'Tielrode', 'Stekene', 'Waasmunster', 'Evergem', 'Eeklo', 'Assendelft', 'Gent', 'Sint-Kruis-Winkel', 'Herentals', 'Lommel', 'Houthalen-Helchteren', 'Hamont-Achel', 'Turnhout', 'Mol', 'Blankenberge', 'Knokke-Heist', 'Oostende', 'Torhout', 'Middelkerke', 'Lint', 'Aarschot', 'Heist-op-den-Berg', 'Lier', 'Dilbeek', 'Evergem', 'Waasmunster', 'Tielrode', 'Belsele', 'De Klinge', 'Zottegem', 'Beringen', 'Lummen', 'Maaseik', 'Lommel', 'Overpelt'];
// Extend the list
for (const cityName of cityNames) {
    citiesList.push({
      name: cityName,
      rowIndex: Math.floor(Math.random() * 100),
      columnIndex: Math.floor(Math.random() * 100),
      neighbors: [],
    } as City);
    let tryNr = 0;
  
    // Add 0 to 5 neighbors
    for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
        let randomNeighbor = citiesList[Math.floor(Math.random() * cityNames.length - 1)];
        while (randomNeighbor?.name === cityName || tryNr >5) {
            randomNeighbor = citiesList[Math.floor(Math.random() * citiesList.length - 1)];    
            tryNr++;        
        }
        randomNeighbor && citiesList[citiesList.length - 1].neighbors.push(randomNeighbor?.name);
    }
    console.log( citiesList[citiesList.length - 1].neighbors);
    
  }
  console.log(citiesList);

  // convert citiesList to a csv file
//   const csv = citiesList.map((city) => {
//     return `${city.name};${city.rowIndex};${city.columnIndex};${city.neighbors.join(",")}`;
//   });
// create a new file with the csv data in Downloads folder

// const filePath = 'C:\\Users\\User\\Downloads\\cities.csv';

//   fs.writeFileSync(filePath, csv.join("\n"));


//   console.log(csv.join("\n"));

export const beCityList: City[] = cities;

