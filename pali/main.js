var str = prompt('inserisci la parola');

function palindroma(parola) {

  //divido la stringa in singole lettere che creano un array
  //ogni i = ad una lettere della parola
  var spezzata = parola.split("")
  console.log(spezzata);
  //inverto l'ordine dell'array
  var girata = spezzata.reverse("");
  console.log(girata);
  //unisco i alori dell'array invertito per ricreare una stringa
  //coi caratteri di partenza ma invertiti
  var unita = girata.join("");
  console.log('parola inserita',str);
  console.log( 'rovesciata',unita);
  //se la parola riunita al contrario e la parola inserita all'inzio
  //combaciano stamapa e ferma altrimenti vai avanti e poi fermati
  if (unita == parola) {
    console.log('la parola è palindroma');
    return;
  }
  else {
    console.log('la parola NON è palindroma');
    return;
  }
}

//richiamo la funzione con l'argomento
palindroma(str);
