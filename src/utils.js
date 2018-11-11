// @flow

let idCounter = 0;

/**
 * This generates a unique ID for an instance of Collapse
 * @return {String} the unique ID
 */
export const generateId = (): string => String(idCounter++);

// Helper function for render props. Sets a function to be called, plus any additional functions passed in
export const callAll = (...fns) => (...args: Array<*>) =>
  fns.forEach(fn => fn && fn(...args));