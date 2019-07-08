


function casuale(){
  var risultato = Math.floor(Math.random(1) * (10+1));
  // console.log('questo e il risultato random',risultato);
  return risultato;
}

//numUtente da il valore a l argomento numero
// richiamo la funzione e inserisco il nome dell argomento


var pc = (casuale());
console.log("numero pc",pc);
var utente = ("numero utente",casuale());
console.log("numero utente",utente);
var estratto = ("numero estratto",casuale());

if (utente == estratto) {
  console.log("hai vinto");
}
else if (pc == estratto) {
  console.log(tente);
  console.log("ha vinto pc");
}
else {
  console.log("avete perso entrambi");
}

if(utente % 2 == 0){
  console.log(utente);
  console.log("pari");
}
else {
  console.log(utente);
  console.log("dispari");
}



//
