
import { coinFlips, countFlips} from "./modules/coin.mjs" 
import min from 'minimist';



const args = min(process.argv.slice(2))




var flip = [];

if (args['number']){
    flip = coinFlips(args['number']);
    console.log(flip);
    console.log(countFlips(flip))
} else {
    flip = coinFlips(1);
    console.log(flip);
    console.log(countFlips(flip))
}