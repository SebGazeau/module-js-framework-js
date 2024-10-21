function testVarLetConst() {
    if (true) {
      var varVariable = 'Je suis var';
      let letVariable = 'Je suis let';
      const constVariable = 'Je suis const';
      
      console.log("À l'intérieur du bloc :", varVariable); // Je suis var
      console.log("À l'intérieur du bloc :", letVariable); // Je suis let
      console.log("À l'intérieur du bloc :", constVariable); // Je suis const

      varVariable = 5;
      letVariable = 6;
      // constVariable = 'changement de valeur';

      console.log("2 À l'intérieur du bloc  :", varVariable); // 5
      console.log("2 À l'intérieur du bloc :", letVariable); // 6
    }
    
    console.log('En dehors du bloc :', varVariable); // 5
    // console.log('En dehors du bloc :', letVariable); // Erreur - letVariable n'est pas défini ici
    // console.log('En dehors du bloc :', constVariable); // Erreur - constVariable n'est pas défini ici
  }
  
  testVarLetConst();
  
  // Explications :
  // - var a une portée de fonction, ce qui signifie qu'elle est accessible même en dehors du bloc où elle est définie.
  // - let et const ont une portée de bloc, ce qui signifie qu'elles ne sont accessibles que dans le bloc où elles sont définies.
  // - const est utilisé pour les constantes qui ne doivent pas être réassignées, tandis que let est utilisé pour des variables dont la valeur peut changer.