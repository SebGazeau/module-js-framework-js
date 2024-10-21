// Fonction synchrone vs fonction asynchrone
function exempleSynchronisation() {
    console.log("Début de la fonction synchrone");
  
    console.log("Étape 1");
    console.log("Étape 2");
    console.log("Étape 3");
  
    console.log("Fin de la fonction synchrone");
  }
  
  // Fonction asynchrone simulant une opération longue
  async function exempleAsynchronisation() {
    console.log("Début de la fonction asynchrone");
  
    console.log("Étape 1");
    // Pause de 2 secondes pour simuler une opération longue
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Étape 2 (après attente de 2 secondes)");
    console.log("Étape 3");
  
    console.log("Fin de la fonction asynchrone");
  }
  
  // Exemple d'appel synchrone et asynchrone pour illustrer la différence
  console.log("=== Appel de la fonction synchrone ===");
  exempleSynchronisation();
  
  console.log("=== Appel de la fonction asynchrone ===");
  exempleAsynchronisation();
  
  // Fonction asynchrone utilisant 'async' et 'await' pour récupérer des données
  async function recupererDonneesApi() {
    try {
      console.log("Début de la récupération des données de l'API");
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'API");
      }
      const produitsApi = await response.json();
      console.log("Produits récupérés de l'API :", produitsApi);
    } catch (error) {
      console.error("Erreur :", error);
    }
  }
  
  // Appel de la fonction asynchrone pour récupérer les données de l'API
  recupererDonneesApi();