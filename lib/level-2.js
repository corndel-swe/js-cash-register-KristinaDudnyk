import { drawer } from "../drawer.js";

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  let totalNotes = 0;
  for (let i of drawer) {
    if (
      i.name === "quarter" ||
      i.name === "dime" ||
      i.name === "nickel" ||
      i.name === "penny"
    ) {
      totalNotes += i.quantity;
    }
  }
  return totalNotes;
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  let totalNotes = 0;
  for (let i of drawer) {
    if (
      i.name === "hundred" ||
      i.name === "twenty" ||
      i.name === "ten" ||
      i.name === "five" ||
      i.name === "one"
    ) {
      totalNotes += i.quantity;
    }
  }
  return totalNotes;
}
