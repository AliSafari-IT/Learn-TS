// Graphs in TypeScript: https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)

/**
 * Graph class that represents an undirected graph.
 * This Graph class stores the nodes of the graph, 
 * the adjacency matrix, and methods for getting 
 * the neighbors of a node.
 */
class Graph {
    /**
     * Graph is represented as an adjacency list.
     * For example:
     * {
     *     "A": ["B", "C"], // A is connected to B and C
     *     "B": ["D"], // B is connected to D
     *     "C": ["E"], // C is connected to E
     *     "D": ["E"], // D is connected to E
     *     "E": [], // E is not connected to any other node
     * }
     * 
     * In this example, A is connected to B, C, D, and E. 
     * A -> B -> C -> D -> E
     * 
     * The inputs taken by the algorithm are the graph G {V, E}, 
     * where V is the set of vertices and E is the set of edges. 
     * The shortest path of graph G starting from one vertex returning 
     * to the same vertex is obtained as the output.
     */
    public graph: { [key: string]: string[]; };
    public adjacentMatrix: number[][] = [];
    constructor() {
        this.graph = {};
    }

    public addEdge(u: string, v: string): void {
        if (u && v && u !== v) {
            if (u in this.graph) {
                this.graph[u].push(v);
            } else {
                this.graph[u] = [v];
            }
        } else {
            console.error("Invalid input for edge:", u, v);
        }
    }

    public getNodes(): string[] {
        return this.graph ? Object.keys(this.graph) : [];
    }

    public getAdjacentMatrix(): number[][] {
        return this.adjacentMatrix;
    }

    public getNodeNeighbors(node: number): number[] {
        const neighbors: number[] = [];
        for (let i = 0; i < this.graph[node].length; i++) {
            if (this.adjacentMatrix[node][i] > 0) {
                neighbors.push(i);
            }
        }
        return neighbors;
    }

    public printGraph(): void {
        for (let node in this.graph) {
            console.log(node, "->", this.graph[node].join(" -> "));
        }
    }
}


