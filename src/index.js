import {getUrl} from './url.js';
import createCadreListProduit from './produit-list.js';
import getProduit from './produit-one.js'

async function main() {
   
    switch(getUrl()){
        case "contact":
            
            break;
        case "panier":
            
            break;
        case "produit":
            getProduit();
            break;
        default:
            createCadreListProduit();
            break;
    }
  
}

main();
