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
    if (prop === "name" || prop === "surname") {
      console.log('Dato studente: ' + prop + "  Valore contenuto: " + classroom[i][prop]);
    }
    
  }
}

//stampa es 2 migliorato
console.log('---- ES 2 Migliorato ----')
for (var j = 0; j < classroom.length; j++) {
  console.log('Nome studente: ',  classroom[j].name);
  console.log('Cognome studente: ',  classroom[j].surname);
}



//Terza Parte Esercizio
console.log('---- ES 3 ----')
var inputName = prompt('Inserisci il tuo nome');
var inputSurname = prompt('Inserisci il tuo cognome');
var inputAge;

do {
  inputAge = parseInt(prompt('Inserisci la tua età'));
} while (isNaN(inputAge));



var newStudent = {};
newStudent.name = inputName;
newStudent.surname = inputSurname;
newStudent.age = inputAge;

console.log('new student object ', newStudent);

classroom.push(newStudent);
console.log('classrom obj updated ', classroom);