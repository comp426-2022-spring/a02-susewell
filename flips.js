
import { coinFlips, countFlips,} from "./modules/coin.mjs" 
import minimist from 'minimist';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2))

args['number']


var flip = [];

if (args.number != null ){
    flip = coinFlips(args.number);
    console.log(flip);
    console.log(countFlips(flip))
} else {
    flip = coinFlips(1);
    console.log(flip);
    console.log(countFlips(flip))
}