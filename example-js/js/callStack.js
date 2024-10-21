  // Illustrer la pile d'exécution (call stack) et la queue de tâches (task queue) en JavaScript
  console.log("=== Illustration de la pile d'exécution et de la queue de tâches ===");
  console.log("Log 1 - Avant setTimeout");
  setTimeout(() => {
    console.log("Log 2 - Depuis setTimeout (ajouté à la task queue après 0 ms)");
  }, 0);
  console.log("Log 3 - Après setTimeout");
   Promise.resolve().then(() => {
    console.log("Log 4 - Depuis Promise (microtask)");
  });
  console.log("Log 5 - Fin de l'illustration de la pile d'exécution");