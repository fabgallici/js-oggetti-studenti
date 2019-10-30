// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
//   - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

var student = {
  "name": 'Marco',
  "surname": 'Rossi',
  "age": 25
}

for (var prop in student) {
  console.log('Dato studente: ' + prop + "  Valore contenuto: " + student[prop]);
}