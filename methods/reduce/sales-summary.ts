/**
 * Implemented a new feature to calculate and display a summary of sales data. 
 * This includes the total count of items sold and the total sales amount for each product. 
 * The calculation is done using the reduce method in TypeScript, providing a clear and 
 * efficient data aggregation from an array of sales transactions.

 */
interface Sale {
    product: string;
    amount: number;
}

let sales: Sale[] = [
    { product: 'Laptop', amount: 1000 },
    { product: 'Phone', amount: 500 },
    { product: 'Laptop', amount: 1500 },
    { product: 'Monitor', amount: 300 },
    { product: 'Phone', amount: 750 }
];

interface ProductSummary {
    count: number;
    totalAmount: number;
}

let productSummary = sales.reduce((accumulator, sale) => {
    /**
     * 
     * To achieve the output where each product has both the count of sales and the total sales amount, 
     * you can modify the reduce method to store an object with two properties for each product: one for 
     * the count (count) and one for the total sales amount (totalAmount).
     */
    if (!accumulator[sale.product]) {
        accumulator[sale.product] = { count: 0, totalAmount: 0 };
    }

    accumulator[sale.product].count += 1;
    accumulator[sale.product].totalAmount += sale.amount;

    return accumulator;
}, {} as Record<string, ProductSummary>);

console.log(productSummary);


// run with: npx ts-node methods/reduce/sales-summary.ts
// or tsc methods/reduce/sales-summary.ts --watch then node methods/reduce/sales-summary.js
