/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Generates a greeting message
 * @param {string} name - Name to greet
 * @returns {string} Greeting message
 */
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = {
  add,
  multiply,
  greet
};
