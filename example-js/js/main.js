window.addEventListener('DOMContentLoaded', () => {
    console.log('document ready !')
});

// Fonction qui prend deux nombres en entrée et retourne la somme ainsi que si la somme est paire ou impaire
function sumAndEvenOdd(nbrOne, nbrTwo) {
    const sum = nbrOne + nbrTwo;
    const evenOdd = (sum % 2) ? 'even' : 'odd';
    return {
        sum,
        oddOrEven: evenOdd,
    };
}

// Boucle for qui parcourt un tableau de longueur 50 et affiche chaque élément
const tableau = Array.from({ length: 50 }, (_, index) => index + 1);

for (let i = 0; i < tableau.length; i++) {
  const valeur = tableau[i];
  console.log(`Valeur: ${valeur}`);
  if (valeur % 5 === 0) {
    console.log(`${valeur} est un multiple de 5.`);
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Obtenir les carrés des nombres pairs
const evenSquares = numbers
  .filter(num => num % 2 === 0)      // Filtrer les nombres pairs
  .map(num => num ** 2);             // Calculer le carré de chaque nombre pair

// Exclure les multiples de 3 et calculer la somme des carrés restants
const filteredSum = evenSquares
  .filter(num => num % 3 !== 0)      // Exclure les multiples de 3
  .reduce((acc, num) => acc + num, 0); // Calculer la somme des nombres restants

// Vérifier si la somme est un multiple de 10
const isMultipleOfTen = filteredSum % 10 === 0;

console.log(`Les carrés des nombres pairs: ${evenSquares}`);
console.log(`Somme après exclusion des multiples de 3: ${filteredSum}`);
console.log(`La somme est-elle un multiple de 10 ? ${isMultipleOfTen ? 'Oui' : 'Non'}`);


// Création d'une classe représentant un User
class User {
  constructor(nom, email) {
    this.nom = nom;
    this.email = email;
  }

  showInfo() {
    console.log(`Nom: ${this.nom}, Email: ${this.email}`);
  }
}

// Exemple d'utilisation de la classe User
const utilisateur = new User('Alice', 'alice@example.com');
utilisateur.showInfo(); // Nom: Alice, Email: alice@example.com


// Fonction asynchrone qui récupère des données depuis une API en utilisant 'async/await'
async function fetchDataFromApi(url) {
    try {
      console.log('Récupération des données depuis l’API...');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      console.log('Données récupérées :', data);
    } catch (error) {
      console.error('Erreur :', error);
    }
  }
  
  // Exemple d'utilisation de la fonction asynchrone
  fetchDataFromApi('https://dummyjson.com/users/1');