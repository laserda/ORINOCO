import {getUrlQuery} from './url.js'; 
import {teddie} from './teddie.js';

export default async function getProduit(){
    
    
    let ted = await teddie(getUrlQuery("id"));
    if(typeof ted != "undefined"){
        let img = document.getElementById("imgOurs");
        img.setAttribute("src", ted.imageUrl);

        let descriptionh = document.getElementById("description-h");
        descriptionh.innerText = ted.name;

        let descriptionp = document.getElementById("description-p");
        descriptionp.innerText = ted.price +"$";

        let descriptiond = document.getElementById("description-d");
        descriptiond.innerText = ted.description;
    }
    // 
}