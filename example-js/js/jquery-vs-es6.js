// Sélection et modification du contenu d'un élément avec jQuery
$(document).ready(() => {
    $('#monElement').text('Bonjour tout le monde !');
  });
  
  // Équivalent en JavaScript ES6
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#monElement').textContent = 'Bonjour tout le monde !';
  });
  
  // Événement clic avec jQuery
  $('#bouton').on('click', () => {
    alert('Bouton cliqué !');
  });
  
  // Équivalent en JavaScript ES6
  document.querySelector('#bouton').addEventListener('click', () => {
    alert('Bouton cliqué !');
  });
  
  // Ajout de classe CSS avec jQuery
  $('#monElement').addClass('active');
  
  // Équivalent en JavaScript ES6
  document.querySelector('#monElement').classList.add('active');
  
  // Faire une requête AJAX avec jQuery
  $.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: (data) => {
      console.log(data);
    },
    error: (error) => {
      console.error('Erreur :', error);
    }
  });
  
  // Équivalent en JavaScript ES6 (utilisation de Fetch)
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erreur :', error);
    });