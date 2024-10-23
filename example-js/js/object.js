// Création d'un objet simple avec des propriétés et des méthodes
const voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2021,
    afficherDetails: function() {
      console.log(`Marque : ${this.marque}, Modèle : ${this.modele}, Année : ${this.annee}`);
    },
    demarrer: function() {
      console.log("La voiture démarre...");
    }
  };
  
  voiture.afficherDetails(); // Marque : Toyota, Modèle : Corolla, Année : 2021
  voiture.demarrer(); // La voiture démarre...


const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false - chaque Symbol est unique

const user = {
  name: 'Alice',
  [sym1]: 'Identifiant unique'
};

console.log(user[sym1]); // "Identifiant unique"