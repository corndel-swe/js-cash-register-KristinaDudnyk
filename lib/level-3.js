import { drawer } from "../drawer.js";

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
export function sumDrawer(drawer) {
  let total = 0;
  for (let item of drawer) {
    total += item.value * item.quantity;
  }
  return `$${total / 100}`;
}
