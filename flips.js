
import { coinFlips, countFlips,} from "./modules/coin.mjs" 
import minimist from 'minimist';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')
const number = args.number




if (!(isNaN(number))){
    number = 1;
}


console.log(countFlips(coinFlips(number)));