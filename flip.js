// Import the coinFlip function from your coin.mjs file


import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs" 

// Call the coinFlip function and put the return into STDOUT

console.log(coinFlip());

console.log(coinFlips(7));

console.log(countFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads']));

console.log(flipACoin('tails'))
