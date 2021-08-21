import {teddies} from './teddie.js';


export default async function createCadreListProduit() {
  

    const vproduitList = document.getElementById("produit-list");
    try {
        const teddie = await teddies();

        let nbrCadre=0;

        var cadreList = document.createElement('div');
        cadreList.setAttribute("class" , "cadre-list");

        for(let ted of teddie){

            if(nbrCadre === 3){                    
                vproduitList.appendChild(cadreList);
                var cadreList = document.createElement('div');
                cadreList.setAttribute("class" , "cadre-list");
                nbrCadre=0;
            }

            nbrCadre++;
            
            if(nbrCadre<=3){
                let cadre = document.createElement('a');
                cadre.setAttribute("class" , "cadre");
                cadre.setAttribute("href","produit.html?id=" + ted._id);
        
                let cadre__img = document.createElement('div');
                cadre__img.setAttribute("class", "cadre__img");
                let img = document.createElement("img");
                img.setAttribute("src", ted.imageUrl);
                img.setAttribute("alt", ted.description);
                cadre__img.appendChild(img);

                let cadre__heading = document.createElement('h1');
                cadre__heading.setAttribute("class", "cadre__heading");
                cadre__heading.innerText = ted.name;

                let cadre__prix = document.createElement('p');
                cadre__prix.setAttribute("class", "cadre__prix");
                cadre__prix.innerText = ted.price +"$";

                cadre.appendChild(cadre__img);
                cadre.appendChild(cadre__heading);
                cadre.appendChild(cadre__prix);
                cadreList.appendChild(cadre);
              
            }

            
        }

        if(nbrCadre<=3){
            vproduitList.appendChild(cadreList);
        }
        
    } catch (e) {
        console.log('Error', e);
    }
  }