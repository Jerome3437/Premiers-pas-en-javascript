let div1 = document.createElement("div");
console.log("dom.js");

//Création d'un élément texte du DOM
let text1 = document.createTextNode ("text1");

// Ajout de text1 à div1
div1.appendChild(text1);

//Ajout de div1 à body
document.body.appendChild(div1);

//Gestion de l'événement click
div1.onclick = function(){
    console.log("click sur le div1");
}

//Récupération d'un élément du DOM
let h1= document.getElementById("h1");

//Gestion de l'événement click sur h1
h1.onclick = function(){
console.log("click sur le h1");
}