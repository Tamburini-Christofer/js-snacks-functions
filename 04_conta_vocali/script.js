/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali 
contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
vocaliStringa = (value) => {
    let vocali = 0;
    for (let i = 0; i < value.length; i++) {
       let testo = word.charAt(i).toLowerCase();
    if ((testo === "a") || (testo === "e") || (testo === "i") || (testo === "o") || (testo === "u")) {
        vocali++; 
    }
    }
    console.log (`Le vocali contenute in ${word} sono ${vocali}`);
    return vocali;
}

// Invoca la funzione qui e stampa il risultato in console
vocaliStringa(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)