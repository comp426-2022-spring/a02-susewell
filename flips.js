
import { coinFlips, countFlips,} from "./modules/coin.mjs" 
import minimist from 'minimist';

const number = minimist(process.argv.slice(2))




console.log(countFlips(coinFlips(number)));