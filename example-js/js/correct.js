function sum(a,b){
    const sumNbr = a+b;
    return sumNbr%2==0
        ? console.log(sumNbr+"pair")
        : console.log(sumNbr+"impair");
}

function sumAndEvenOdd(nbrOne, nbrTwo) {
    const sum = nbrOne + nbrTwo;
    const evenOdd = (sum % 2) ? 'even' : 'odd';
    return {
        sum, // sum: 10
        oddOrEven: evenOdd, //oddOrEven: even 
    };
}

function readArray(array) {
    if(array.length == 50){
        for (const i of array) {
            i % 5 == 0
                ? console.log(i + "est un multiple de 5")
                : console.log(i);
        }
    }
}

const tableau = Array.from({ length: 50 }, (_, index) => index + 1);

for (let i = 0; i < tableau.length; i++) {
  const valeur = tableau[i];
  console.log(`Valeur: ${valeur}`);
  if (valeur % 5 === 0) {
    console.log(`${valeur} est un multiple de 5.`);
  }
}


function exercice(data) {
    const squareEven = data.map((i) => i%2 === 0 ? i*i : i);
    const sData = squareEven.filter((j) => j%3 !== 0);
    const sumR = sData.reduce((prev, val) => prev+val, 0);
    const str = sumR % 10 === 0 ? "est un multiple" : "n'est pas";

    return {
        squareEven,
        sData,
        sumR,
        str
    }
}

const arr  = Array.from({ length: 50 }, (_, index) => index + 1);
console.log(exercice(arr));


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
 

class Utilisateur {
    constructor(nom, email){
        this.nom = nom;
        this.email = email;
    }

    showInfo(){
        console.log(`Nom d'utlisateur est ${this.name} et son email ${this.email}`);
    }
}

const user =  new Utilisateur('Patrick', 'patrick@test.fr');

const info = user.showInfo()


async function testApi() {
    try {
        const response = await fetch("https://dummyjson.com/products/9999");
    
        if(!response.ok) return 'error';
    
        if(!response.status === 404) return 'error404'
        const userData = await response.json();
        console.log(userData);
    
        return userData;

    } catch(err){
        console.error(err);
    }
}



document.addEventListener('submit', (e)=>{
    e.preventDefault();

    const prenom = e.target.querySelector(".prenom").value;
    const list = document.querySelector('.liste');
    const el = document.createElement('span');
    el.textContent = prenom;
    list.appendChild(el);
})