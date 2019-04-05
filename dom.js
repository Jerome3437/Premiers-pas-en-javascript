/**
 * Le Document Object Model ou DOM (pour modèle objet de document) est une interface de programmation pour les 
 * documents HTML, XML et SVG. Il fournit une représentation structurée du document html 
 * sous forme d'un arbre et définit la façon dont la structure peut être manipulée par javascript.
 * 
 * 
*/
//Création d'un élément du DOM
let div1 = document.createElement("div");
console.log("dom.js");

//Création d'un élément texte du DOM
let text1 = document.createTextNode ("Text1");

// Ajout de text1 à div1
div1.appendChild(text1);

//Ajout de div1 à body
document.body.appendChild(div1);

