

function casuale(){
  var risultato = Math.floor(Math.random(1) * (10+1));
  // console.log('questo e il risultato random',risultato);
  return risultato;
}

var utente = ("numero utente",casuale());
console.log("numero utente",utente);

var pc = (casuale());
console.log("numero pc",pc);

var estratto = ("numero estratto",casuale());
console.log("il numero estrato =",estratto);

if (utente == estratto) {
  console.log(utente,"hai vinto");
}
else if (pc == estratto) {
  console.log(pc,"ha vinto pc");
}
else if(pc == estratto && utente == estratto){
  console.log("avete vintoooo entrambi");
}
else {
  console.log("avete perso entrambi");
}



//
