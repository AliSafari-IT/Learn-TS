import { fruits as data} from "../../resources/data/fruits";
/**
 * create a TypeScript script that demonstrates advanced array manipulation techniques? 
 * I'd like to see a script that imports an array of fruits, randomly selects a subset of 
 * these fruits, and then provides functions to add a new fruit to the beginning of the 
 * array and to remove the first fruit from the array. The script should log the state of 
 * the fruit array at each step. Also, please include instructions on how to run the script.
 */


// 5 random fruits from the fruits array
let fruits: string[] = data.sort(() => Math.random() - 0.5).slice(0, 5);
/**
 * 
 * @param newFruit - Inserts a new fruit at the beginning of the array
 */
function unshiftFruit(newFruit: string): void {
    // Inserts the new fruit at the beginning of the array
    fruits.unshift(newFruit);
  }
  
  function shiftFruit(): string | undefined {
    // Removes and returns the first fruit from the array
    if (fruits.length === 0) {
      return undefined;
    }
    return fruits.shift();
  }
  
  console.log('Original fruit array:', fruits);
  
  unshiftFruit('Zuma apple');
  console.log('Array after unshift:', fruits);
  
  const removedFruit = shiftFruit();
  if (removedFruit) {
    console.log('Removed fruit:', removedFruit);
  }
  console.log('Array after shift:', fruits);


  // run with: npx ts-node methods/shift-unshift/shift-unshift.ts