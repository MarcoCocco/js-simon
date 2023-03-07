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
let resultsEl = document.getElementById('results');

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

// Evento per comparare i numeri inseriti negli input con quelli dell'arrayNumbers
document.getElementById('compare').addEventListener('click', function () {

    let number1El = document.getElementById('number-1');
    let number2El = document.getElementById('number-2');
    let number3El = document.getElementById('number-3');
    let number4El = document.getElementById('number-4');
    let number5El = document.getElementById('number-5');

    let correctNumbers = [];

    if (number1El.value == arrayNumbers[0]) {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Corretto, il numero ${arrayNumbers[0]} è stato individuato.`;
        resultsEl.append(resultEl);
        correctNumbers.push(arrayNumbers[0]);

    } else {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Sbagliato, il numero corretto era ${arrayNumbers[0]}.`;
        resultsEl.append(resultEl);

    }
    
    if (number2El.value == arrayNumbers[1]) {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Corretto, il numero ${arrayNumbers[1]} è stato individuato.`;
        resultsEl.append(resultEl);
        correctNumbers.push(arrayNumbers[1]);

    } else {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Sbagliato, il numero corretto era ${arrayNumbers[1]}.`;
        resultsEl.append(resultEl);

    }
    
    if (number3El.value == arrayNumbers[2]) {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Corretto, il numero ${arrayNumbers[2]} è stato individuato.`;
        resultsEl.append(resultEl);
        correctNumbers.push(arrayNumbers[2]);

    } else {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Sbagliato, il numero corretto era ${arrayNumbers[2]}.`;
        resultsEl.append(resultEl);

    }
    
    if (number4El.value == arrayNumbers[3]) {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Corretto, il numero ${arrayNumbers[3]} è stato individuato.`;
        resultsEl.append(resultEl);
        correctNumbers.push(arrayNumbers[3]);

    } else {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Sbagliato, il numero corretto era ${arrayNumbers[3]}.`;
        resultsEl.append(resultEl);

    }

    if (number5El.value == arrayNumbers[4]) {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Corretto, il numero ${arrayNumbers[4]} è stato individuato.`;
        resultsEl.append(resultEl);
        correctNumbers.push(arrayNumbers[4]);

    } else {

        let resultEl = document.createElement('p');
        resultEl.textContent = `Sbagliato, il numero corretto era ${arrayNumbers[4]}.`;
        resultsEl.append(resultEl);

    }

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

    timingInterval = setInterval(function () {

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