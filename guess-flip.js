import { flipACoin} from "./modules/coin.mjs" 
import min from minimist;

const args = min(process.argv.slice(2))

if (args['call'] == 'tails'){
    console.log(flipACoin('tails'));
} else if (args['call'] == 'headss') {
    console.log(flipACoin('heads'));
} else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}