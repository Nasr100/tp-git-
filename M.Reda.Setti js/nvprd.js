function supprimer(){
    document.getElementById("ajou").innerHTML = " ";
}


function ajouter(){
    let nom = prompt("nom du plat :");
    document.getElementById("ajou").insertAdjacentHTML("beforeend", '<h3 class="card-header">' + nom + '</h3>');
    let ctgr = prompt("categorie du plat :");
    document.getElementById("ajou").insertAdjacentHTML("beforeend",'<p class="card-text">' + "la categorie : " + " " + ctgr + '</p>');
    let prix = prompt("le prix du plat :");
    document.getElementById("ajou").insertAdjacentHTML("beforeend",'<p class="card-text">' + "le prix : " + " " + prix + "DH"  +'</p>');
    let duree = prompt("la durée du préparation :");
    document.getElementById("ajou").insertAdjacentHTML("beforeend",'<p class="card-text">' + "la durée de préparation : " + " " + duree + '</p>');
    let nbrding = prompt("nombre d'ingredients :");
    
    for(let i=1 ; i<= nbrding ; i++){
        let ing = prompt("ingredient" + i + " : ");
    document.getElementById("ajou").insertAdjacentHTML("beforeend",'<p class="card-text">' + "ingrédient N° " + " " + i + " : " + ing + '</p>');
  
    }

}
