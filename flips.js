
import { coinFlips, countFlips} from "./modules/coin.mjs" 
import min from 'minimist';



const args = min(process.argv.slice(2))






if (args['number']){
    let flip = coinFlips(args['number']);
    console.log(flip);
    console.log(countFlips(flip))
} else {
    let flip = coinFlips(1);
    console.log(flip);
    console.log(countFlips(flip))
}