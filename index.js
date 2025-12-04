//stap 1: Zoek de button op waar je op wilt klikken
let colorButton = document.querySelector('button');
//stap 2: Voek een event toe, als de button wordt geklikt
colorButton.addEventListener('click', function(event) {
// stap 3: Verander de class van <header> naar red-heading zodat background color red wordt
    document.querySelector('header').classList.add('red-heading')

    event.preventDefault()
})

//elk nieuw woord moet een hoofdletter, niet de eerste
//

//stap 1: selecteren van element voor begin interactie
//let showMoreButton = document.querySelector('.show-more');

// showmorebutton kies je zelf
// document.querySelector selecteert wat er tussen haakjes staat
// .show-more is je class in CSS die actief gaat worden 

