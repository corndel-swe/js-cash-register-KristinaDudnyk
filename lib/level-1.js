import { drawer } from "../drawer.js";

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
  let updatedD = [...drawer];

  for (let i of updatedD) {
    if (i.name === name) {
      i.quantity -= 1;
      if (i.quantity < 0) {
        i.quantity = 0;
      }
    }
  }
  return updatedD;
}

/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  let updatedD = [...drawer];

  for (let i of updatedD) {
    if (i.name === name) {
      i.quantity += 1;
    }
  }
  return updatedD;
}
