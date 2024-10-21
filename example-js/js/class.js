// Définition d'une classe simple en JavaScript
class Animal {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    // Méthode pour afficher les informations de l'animal
    afficherInfos() {
      console.log(`Nom: ${this.nom}, Age: ${this.age} ans`);
    }
  }
  
  // Création d'une instance de la classe Animal
  const monAnimal = new Animal('Rex', 5);
  monAnimal.afficherInfos(); // Nom: Rex, Age: 5 ans
  
  // Définition d'une classe Héritée (Chien) qui hérite d'Animal
  class Chien extends Animal {
    constructor(nom, age, race) {
      // Appel du constructeur de la classe parente (Animal)
      super(nom, age);
      this.race = race;
    }
  
    // Méthode spécifique à la classe Chien
    aboyer() {
      console.log(`${this.nom} aboie: Wouaf Wouaf!`);
    }
  
    // Redéfinition de la méthode afficherInfos
    afficherInfos() {
      super.afficherInfos();
      console.log(`Race: ${this.race}`);
    }
  }
  
  // Création d'une instance de la classe Chien
  const monChien = new Chien('Buddy', 3, 'Golden Retriever');
  monChien.afficherInfos(); // Nom: Buddy, Age: 3 ans, Race: Golden Retriever
  monChien.aboyer(); // Buddy aboie: Wouaf Wouaf!
  
  // Exemple montrant l'utilisation des classes et de l'héritage en JavaScript
  // Ici, la classe Chien hérite des propriétés et méthodes de la classe Animal
  // et ajoute des fonctionnalités spécifiques (la méthode aboyer et la propriété race).
  