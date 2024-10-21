// Illustration de la portée des variables avec un exemple de closure
function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
        console.log("Compteur après incrémentation :", count);
      },
      decrement: function() {
        count--;
        console.log("Compteur après décrémentation :", count);
      },
      getCount: function() {
        console.log("Valeur actuelle du compteur :", count);
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // Compteur après incrémentation : 1
  counter.increment(); // Compteur après incrémentation : 2
  counter.decrement(); // Compteur après décrémentation : 1
  counter.getCount();  // Valeur actuelle du compteur : 1
  


  
  // Utilisation d'un callback dans une fonction asynchrone avec comparaison entre callback et Promise
  function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = "Données récupérées avec callback";
      console.log("Récupération des données (callback) terminée");
      callback(data);
    }, 2000);
  }
  
  fetchDataWithCallback((data) => {
    console.log("Callback exécuté avec :", data);
  });
  
  // Utilisation de Promise pour la même tâche
  function fetchDataWithPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Données récupérées avec Promise";
        console.log("Récupération des données (Promise) terminée");
        resolve(data);
      }, 2000);
    });
  }
  
  fetchDataWithPromise()
    .then((data) => {
      console.log("Promise résolue avec :", data);
    });
  