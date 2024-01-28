var sales = [
    { product: 'Laptop', amount: 1000 },
    { product: 'Phone', amount: 500 },
    { product: 'Laptop', amount: 1500 },
    { product: 'Monitor', amount: 300 },
    { product: 'Phone', amount: 750 }
];
var productSummary = sales.reduce(function (accumulator, sale) {
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
}, {});
console.log(productSummary);
// run with: npx ts-node methods/reduce/sales-summary.ts
// or tsc methods/reduce/sales-summary.ts --watch then node methods/reduce/sales-summary.js
