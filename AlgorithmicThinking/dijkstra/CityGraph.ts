import City from "../../resources/data/City";

class CityGraph {
    public cityGraph: { [key: string]: City [] };
    constructor() {
        this.cityGraph = {};        
    }

    public getCityNeighbors(city: City): City[] {
        if (this.cityGraph[city.name]) {
            const neighbors: City[] = [];
            for (let i = 0; i < this.cityGraph[city.name].length; i++) {
                neighbors.push(this.cityGraph[city.name][i]);
            }
            return neighbors;
        }
        return [];
    }
    
}

export default CityGraph;