const { add, multiply, greet } = require('./utils');

function main() {
  console.log('Welcome to the Sample Test Project!');
  console.log('-----------------------------------');
  
  const num1 = 5;
  const num2 = 3;
  
  console.log(`Adding ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Multiplying ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(greet('Developer'));
}

if (require.main === module) {
  main();
}

module.exports = { main };
