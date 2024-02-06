export interface OutputObject {
    visitedCities: City[];
    sum: number;
  }
  
  // Graph to demonstrate cities and distances used for Dijkstra's algorithm
export class City {
    public name: string;
    public rowIndex: number;
    public columnIndex: number;
    public neighbors: string[];
    constructor(name: string, rowIndex: number, columnIndex: number, neighbors: string[] = []) {
        this.name = name;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.neighbors = neighbors;
    }
}

export interface ParentChildren {
    parent: string;
    children: string[];
}
