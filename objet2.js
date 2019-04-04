// Création d'une "class" ES5

class Personne {//standard de js donc une majuscule// pour noter qu'il s'agit d'une class//

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

//Création d'une "class" Enseignant qui hérite de la class Personne//

class Enseignant extends Personne{
  constructor(nom, prenom, diplome){
        super(nom,prenom);
        this.diplome = diplome;
    //Méthodes// 
    }
    enseigner(){
        console.log("J'enseigne le Javascript");
    }
}
var yvan = new Enseignant("Douenel", "Yvan", "BAC");
yvan.sePresenter();
yvan.enseigner();
console.log(yvan.diplome);

class EnseignantProgrammation extends Enseignant{
    enseignerMT(){
        console.log("j'enseigne les maths");
    }
}

var yvan = new EnseignantProgrammation ("Nom de famille", "yvan", "agregation");
yvan.sePresenter();
yvan.enseignerMT();