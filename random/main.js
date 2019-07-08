


function casuale(){
  var risultato = Math.floor(Math.random(1) * (10+1));
  return risultato;
}

//numUtente da il valore a l argomento numero
// richiamo la funzione e inserisco il nome dell argomento

var pc = console.log("pc",casuale());
var utente = console.log("utente",casuale());
var estratto = console.log("estratto",casuale());

if (utente == estratto) {
  console.log("hai vinto");
}
else if (pc == estratto) {
  console.log("ha vinto pc");
}
else {
  console.log("avete perso entrambi");
}

// console.log(typeof pc);
// console.log(typeof estratto);


//
