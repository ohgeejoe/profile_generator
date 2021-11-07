const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer1) => {
  console.log(`Thank you for your feedback: ${answer1}`);
  rl.question(`What's an activity you like doing? ` , (answer2) => {
    console.log(`Thank you for your feedback: ${answer1}`);
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      console.log(`Thank you for your feedback: ${answer1}`);
      rl.question(`What is your superpower? In a few words, tell us what you're amazing at! `, (answer4) => {
        console.log(`Thank you for your feedback: ${answer1}`);
        
        let results = `My name is ${answer1} and I like to ${answer2}. I like to listen to ${answer3}.  My superpower is ${answer4}!`;
        console.log(results);
        
        rl.close();
      });
    });
  
  });