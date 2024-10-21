
// Illustration des boucles
function demonstrateLoops() {
    // Boucle for
    console.log("Boucle for :");
    for (let i = 0; i < 5; i++) {
      console.log("Itération :", i);
    }
  
    // Boucle while
    console.log("Boucle while :");
    let j = 0;
    while (j < 5) {
      console.log("Itération :", j);
      j++;
    }
  
    // Boucle do...while
    console.log("Boucle do...while :");
    let k = 0;
    do {
      console.log("Itération :", k);
      k++;
    } while (k < 5);
  
    // Boucle for...of (pour les tableaux)
    console.log("Boucle for...of :");
    const array = ["pomme", "banane", "cerise"];
    for (const fruit of array) {
      console.log("Fruit :", fruit);
    }
  
    // Boucle for...in (pour les objets)
    console.log("Boucle for...in :");
    const person = {
      nom: "Alice",
      age: 25,
      ville: "Paris"
    };
    for (const key in person) {
      console.log(`${key} : ${person[key]}`);
    }
  }
  
  demonstrateLoops();