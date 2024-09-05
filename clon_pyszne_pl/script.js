window.addEventListener('scroll', function() {
    var sekcja = document.getElementById('mojaSekcja'); // Zmień 'mojaSekcja' na id Twojej sekcji
    var pozycjaSekcji = sekcja.getBoundingClientRect().top + window.scrollY;
  
    if (window.scrollY >= pozycjaSekcji) {
      console.log('Użytkownik przewinął do sekcji ' + sekcja.id);
    }
  });
  