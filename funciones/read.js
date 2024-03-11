const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a color? ', (value) => {
    let color = value
    console.log(`You entered ${color}`);
    rl.close();
});

// let name = readline.question("What is your name?");

// console.log("Hi " + name + ", nice to meet you.");


rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});