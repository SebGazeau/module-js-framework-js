// Code exemple utilisant des opérateurs pour réaliser des comparaisons et des opérations arithmétiques
function demonstrateOperators() {
    // Opérations arithmétiques
    const addition = 5 + 3;
    console.log("Addition : 5 + 3 =", addition);
  
    const soustraction = 10 - 4;
    console.log("Soustraction : 10 - 4 =", soustraction);
  
    const multiplication = 7 * 6;
    console.log("Multiplication : 7 * 6 =", multiplication);
  
    const division = 20 / 5;
    console.log("Division : 20 / 5 =", division);
  
    const modulo = 10 % 3;
    console.log("Modulo : 10 % 3 =", modulo);
  
    // Comparaisons
    const egalite = (5 == '5');
    console.log("Égalité (==) : 5 == '5' =>", egalite);
  
    const egaliteStrict = (5 === '5');
    console.log("Égalité stricte (===) : 5 === '5' =>", egaliteStrict);
  
    const different = (5 != 3);
    console.log("Différent (!=) : 5 != 3 =>", different);
  
    const differentStrict = (5 !== '5');
    console.log("Différent strict (!==) : 5 !== '5' =>", differentStrict);
  
    const superieur = (10 > 6);
    console.log("Supérieur (>) : 10 > 6 =>", superieur);
  
    const inferieur = (3 < 7);
    console.log("Inférieur (<) : 3 < 7 =>", inferieur);
  
    const superieurOuEgal = (8 >= 8);
    console.log("Supérieur ou égal (>=) : 8 >= 8 =>", superieurOuEgal);
  
    const inferieurOuEgal = (5 <= 9);
    console.log("Inférieur ou égal (<=) : 5 <= 9 =>", inferieurOuEgal);
  }
  
  demonstrateOperators();