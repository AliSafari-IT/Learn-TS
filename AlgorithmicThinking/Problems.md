# Advanced problems to evaluate user's Algorithmic Thinking

## **Problem 1: The Hamiltonian Path Problem**

Given a graph, a Hamiltonian path is a path that visits every vertex exactly once and returns to the starting vertex. The Hamiltonian path problem is to find a Hamiltonian path if one exists, and to determine that no such path exists otherwise.

This problem is challenging because it requires a deep understanding of graph theory and recursion. A solution to this problem will involve identifying patterns and relationships within the graph, and then using recursion to construct a path that satisfies the Hamiltonian path definition.

## **Problem 2: The Knapsack Problem**

Given a set of items with weights and values, the knapsack problem is to find the subset of items that maximizes the total value of the items, subject to the constraint that the total weight of the items does not exceed a given capacity.

This problem is challenging because it requires a dynamic programming approach to efficiently solve the problem for large sets of items. A solution to this problem will involve breaking down the problem into smaller subproblems, and then using the solutions to these subproblems to solve the larger problem.

## **Problem 3: The Traveling Salesperson Problem**

Given a set of cities and the distances between each pair of cities, the traveling salesperson problem is to find the shortest possible route that visits each city exactly once and returns to the starting city.

This problem is notoriously difficult and is considered to be one of the most challenging problems in computer science. A solution to this problem will involve a combination of approximation algorithms and heuristics.

### Travelling Salesperson Algorithm

As the definition for greedy approach states, we need to find the best optimal solution locally to figure out the global optimal solution. The inputs taken by the algorithm are the graph G {V, E}, where V is the set of vertices and E is the set of edges. The shortest path of graph G starting from one vertex returning to the same vertex is obtained as the output.

- Travelling salesman problem takes a graph G {V, E} as an input and declare another graph as the output (say G’) which will record the path the salesman is going to take from one node to another.

- The algorithm begins by sorting all the edges in the input graph G from the least distance to the largest distance.

- The first edge selected is the edge with least distance, and one of the two vertices (say A and B) being the origin node (say A).

- Then among the adjacent edges of the node other than the origin node (B), find the least cost edge and add it onto the output graph.

- Continue the process with further nodes making sure there are no cycles in the output graph and the path reaches back to the origin node A.

- However, if the origin is mentioned in the given problem, then the solution must always start from that node only. 
- 