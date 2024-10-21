// Comparaison entre une fonction classique et une fonction fléchée en JavaScript
// Fonction classique
function additionClassique(a, b) {
    return a + b;
  }
  console.log("Addition avec fonction classique :", additionClassique(5, 3));
  
  // Fonction fléchée
  const additionFlechee = (a, b) => a + b;
  console.log("Addition avec fonction fléchée :", additionFlechee(5, 3));
  
  // Différence de comportement du mot-clé 'this'
  const obj = {
    valeur: 10,
    fonctionClassique: function() {
      console.log("Fonction classique 'this' :", this.valeur);
    },
    fonctionFlechee: () => {
      console.log("Fonction fléchée 'this' :", this.valeur);
    }
  };
  
  obj.fonctionClassique(); // Fonction classique - 'this' fait référence à l'objet
  obj.fonctionFlechee(); // Fonction fléchée - 'this' fait référence au contexte de création (ici, global)
  