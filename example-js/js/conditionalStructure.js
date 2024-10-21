// Exemple de code illustrant l'utilisation d'une structure conditionnelle
function demonstrateConditionalStructure() {
    const age = 20;
  
    if (age < 18) {
      console.log("Vous êtes mineur.");
    } else if (age >= 18 && age < 65) {
      console.log("Vous êtes adulte.");
    } else {
      console.log("Vous êtes senior.");
    }
  
    // Utilisation de l'opérateur ternaire
    const isMember = true;
    const accessMessage = isMember ? "Accès autorisé." : "Accès refusé.";
    console.log(accessMessage);
  
    // Utilisation d'une structure switch
    const day = "lundi";
    switch (day) {
      case "lundi":
        console.log("Aujourd'hui, c'est lundi.");
        break;
      case "mardi":
        console.log("Aujourd'hui, c'est mardi.");
        break;
      case "mercredi":
        console.log("Aujourd'hui, c'est mercredi.");
        break;
      case "jeudi":
        console.log("Aujourd'hui, c'est jeudi.");
        break;
      case "vendredi":
        console.log("Aujourd'hui, c'est vendredi.");
        break;
      case "samedi":
        console.log("Aujourd'hui, c'est samedi.");
        break;
      case "dimanche":
        console.log("Aujourd'hui, c'est dimanche.");
        break;
      default:
        console.log("Jour inconnu.");
    }
  }
  
  demonstrateConditionalStructure();