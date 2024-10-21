// Utilisation des méthodes 'map', 'filter', et 'reduce' sur un tableau
const numbers = [...Array(5).keys()]; // => [0, 1, 2, 3, 4]

// Utilisation de 'map' pour créer un nouveau tableau avec chaque valeur multipliée par 2
const numbersDoubled = numbers.map(num => num * 2);
console.log("Tableau original :", numbers);
console.log("Tableau avec chaque valeur multipliée par 2 :", numbersDoubled);

// Utilisation de 'filter' pour créer un nouveau tableau avec seulement les valeurs supérieures à 2
const numbersFiltered = numbers.filter(num => num > 2);
console.log("Valeurs supérieures à 2 :", numbersFiltered);

// Utilisation de 'reduce' pour calculer la somme de toutes les valeurs du tableau
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Somme de toutes les valeurs :", sum);