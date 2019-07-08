

var numUtente = parseInt(prompt('numero'));

function casuale(max){
  var risultato = Math.floor(Math.random(1) * (max+1));
  return risultato;
}

//numUtente da il valore a l argomento numero
// richiamo la funzione e inserisco il nome dell argomento
console.log("utente",numUtente);

var pc = console.log("pc",casuale(numUtente));

var estratto = console.log("estratto",casuale(numUtente));

if (numUtente == estratto) {
  console.log("hai vinto");
}
else if (pc == estratto) {
  console.log("ha vinto pc");
}
else {
  console.log("avete perso entrambi");
}



//
