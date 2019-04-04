/**
 * On peut définir un objet comme
 * une structure complexe de contenus
 */

//Définir une fonction constructeur

function Personne (nom, prenom){ //Ici "Personne" est un constructeur de Personne//
    //Propriétés de l'objet
    this.nom = nom;
    this.prenom = prenom;
    //Methode (Camel case selon les standards)
    this.sePresenter = function(){
        console.log("Bonjour, je m'appelle " +  this.prenom + " " + this.nom);
    }
}
//instanciation de l'objet et stockage dans la variable bob
var bob = new Personne("Dylan","Bob");
console.log(bob.nom);
console.log(bob.prenom);
bob.sePresenter();

