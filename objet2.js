// Création d'une "class" ES5

class Personne {

    constructor(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
// Méthodes
sePresenter(){
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
}
  
}

var jerome = new Personne("Chagnaud", "Jerome");
jerome.sePresenter();