// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
//   - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

// Prima Parte Esercizio
var student = {
  "name": 'Marco',
  "surname": 'Rossi',
  "age": 25
}

for (var prop in student) {
  console.log('Dato studente: ' + prop + "  Valore contenuto: " + student[prop]);
}


//Seconda Parte Esercizio
console.log('--- Inizio Esercizio 2 ---');
var classroom = [
  {
    "name": 'Marco',
    "surname": 'Rossi',
    "age": 35
  },
  {
    "name": 'Mario',
    "surname": 'Bianchi',
    "age": 18
  },
  {
    "name": 'Paolo',
    "surname": 'Verdi',
    "age": 21
  },
  {
    "name": 'Luca',
    "surname": 'Conti',
    "age": 29
  },
  {
    "name": 'Luigi',
    "surname": 'Rizzo',
    "age": 32
  }
];

for (var i = 0; i < classroom.length; i++) {
  console.log('Dati studente in posizione ' + i);
  for (var prop in classroom[i]) {
    console.log('Dato studente: ' + prop + "  Valore contenuto: " + classroom[i][prop]);
  }
}