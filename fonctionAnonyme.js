(function(){   //fonction sans nom*/
    //code ici
    console.log("Hello dans lIIFES");
    var i = 3; //permet d'isoler le code et donc les variables//
}) ();

//FONCTION ANONYME IMMEDIATE ou Immediatly invoked fuction expression IIFES//

/**
 * 
 *fonction anonyme qui est affectée à une variable */
 
 var Hello= function() {

    console.log("Hello dans la fonction affectée");
    return "Myriam";
 }

 Hello(); // Là avec les deux parenthèses on l'apelle pour bien indiquer que c'est une fonction//
 console.log (Hello); // Là j'appelle la variable de ma fonction qui est "Hello"
 console.log(typeof(hello()));//Là j'appelle le type de fonction de la variable "Hello"