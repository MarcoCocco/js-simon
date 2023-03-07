/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi. 
*/

// Dichiaro una variabile array di 5 numeri casuali utilizzando le funzioni "getANumberList" e "getRandomNumber" (prese dall'esercizio precedente)
let arrayNumbers = [];
let timer = 10;
let timingInterval;

// Collego tutti i container del DOM 
let randomContainerEl = document.getElementById('random-numbers-container');
let numbersCompareEl = document.getElementById('numbers-compare');
let timerEl = document.getElementById('timer');
let paragraph = document.createElement('p');

// Evento che attiva il countdown
document.getElementById('start').addEventListener('click', startCountdown);

// Evento che genera i numeri in pagina con l'apposito click del bottone start cliccabile una volta
document.getElementById('start').addEventListener('click', function () {

    getANumberList(arrayNumbers, 5, 1, 100);

    randomContainerEl.append(paragraph);
    paragraph.textContent = arrayNumbers;

}, { once: true });

// Evento che gestisce il refresh della pagina per il reset
document.getElementById('reset').addEventListener('click', function () {

    location.reload();

});







//------------------------------------------------------------------------
// FUNZIONI
//------------------------------------------------------------------------

function getANumberList(arrayName, arrayLength, min, max) {

    while (arrayName.length < arrayLength) {

        const randomNumber = getRandomNumber(min, max);

        if (!arrayName.includes(randomNumber)) {
            arrayName.push(randomNumber);
        }
    }

    return arrayName;
}

//------------------------------------------------------------------------

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//------------------------------------------------------------------------
// Funzione del countdown
function startCountdown() {

    timingInterval = setInterval(function() {

      timerEl.innerHTML = timer;

      if (timer <= 0) {

        paragraph.style.display = 'none';
        timerEl.style.display = 'none';
        numbersCompareEl.style.display = 'block';
        clearInterval(timingInterval);

      }

      timer--;

    }, 1000);

}