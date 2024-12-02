// import { drawer } from "../drawer.js";
const drawer = [
  { name: "ten", value: 1000, quantity: 1 },
  { name: "five", value: 500, quantity: 1 },
  { name: "one", value: 100, quantity: 2 },
  { name: "quarter", value: 25, quantity: 3 },
  { name: "dime", value: 10, quantity: 0 },
  { name: "nickel", value: 5, quantity: 0 },
  { name: "penny", value: 1, quantity: 2 },
];
// Level 5

/**
 * Works out the amount of change the customer is owed based on the cost of
 * their items and the amount they have paid. Adds the customer's paid amount
 * to the drawer, removes their change from the drawer, then returns the new
 * drawer.
 *
 * N.b. assume that the paid amount and the change are given in the largest
 * denominations available, i.e. 2.25 should be 2 dollar bills and 1 quarter
 * (if available)rather than 2 dollar bills and 5 nickels (however if no
 * quarters and dimes are available you will use nickels, etc)
 *
 * E.g. (14, 20, drawer) adds 1 twenty to the drawer, and removes 1 five and 1
 * one from the drawer to give to customer as change
 *
 * @param {number} cost - the cost of the customer's basket
 * @param {number} paid - the amount of cash they hand the cashier
 * @param {object[]} drawer
 * @returns {object[]} the drawer, after the transaction has taken place
 */
console.log(drawer);

export function transaction(cost, paid, drawer) {
  let change = paid - cost;

  for (let currency of drawer) {
    if (paid >= currency.value) {
      currency.quantity += Math.floor(paid / currency.value);
    }
    paid -= currency.value * Math.floor(paid / currency.value);
    if (paid <= 0) {
      break;
    }
  }
  console.log(drawer);

  for (let currency of drawer) {
    if (change >= currency.value) {
      currency.quantity -= Math.floor(change / currency.value);
    }
    change -= currency.value * Math.floor(change / currency.value);
    if (change <= 0) {
      break;
    }
  }

  return drawer;
}
console.log(transaction(450, 1000, drawer));
