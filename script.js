// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50


// creo una funzione per generare numeri random da 1 a 100
function random(min, max){
    var numeroRandom = Math.floor(Math.random()*(max-min+1) + min);
    return numeroRandom;
}

//ciclo la funzione affinchè lo faccia per 16 volte e li inserisca in un array
var array = [];

for (var i = 0; i < 16; i++) {

  var numero = random(1,100);
  array.push(numero);
}

console.log(array);

var haiVinto = false;

//chiedo all'utente di inserire un numero se non è presente nell'array vado avanti e conto 1 punto, in caso contrario l'utente ha perso
for (var i = 0; i <= 100 - array.length; i++) {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log(numeroUtente);
  if (numeroUtente != array){
    numeroUtente = true;

  }
}

if (haiVinto) {
  console.log("HAI VINTO");
} else {
  console.log("HAI PERSO")
}
//l'utente potrà inserire un numero max di numeri
