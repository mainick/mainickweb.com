---
title: 'Funzioni di Ordine Superiore (HOF) in JavaScript'
date: '2023-01-05T07:30:12+01:00'
status: publish
permalink: /funzioni-di-ordine-superiore-in-javascript
author: 'Maico Orazio'
excerpt: ''
type: post
id: 870
images: /static/images/posts/logo-javascript.webp
category:
  - javascript
tag:
  - appunti-dev
  - javascript
  - ECMAScript
  - snippets
post_format: []
---

![JavaScript](/static/images/posts/logo-javascript.webp)

Le **funzioni di ordine superiore sono funzioni che utilizzano le funzioni come argomento o come valore di ritorno**.
L'uso delle funzioni in entrambi i ruoli non è necessario, basta in uno dei due casi, per diventare una funzione di
ordine superiore.

Le funzioni JavaScript, `map`, `filter` e `reduce` sono esempi di funzioni integrate di ordine superiore.

### Funzione `map`

La funzione `map` crea un nuovo array popolato con i risultati di una funzione di callback passata come argomento.
Prende tutti i valori restituiti dalla funzione di callback e li archivia in un nuovo array.

La funzione di callback da passare a `map` accetta tre argomenti:

- elemento
- indice
- array

Ad esempio, abbiamo un array di numeri e vogliamo creare un nuovo array che conterrà ogni elemento del primo array
moltiplicato per 10. Risolviamo il problema con e senza una funzione di ordine superiore:

```javascript
const num = [10, 20, 30]

// funzione normale
const newNum = []
for (let i = 0; i < num.length; i++) {
  newNum.push(num[i] * 10)
}
console.log(newNum) // [100, 200, 300]

// funzione di ordine superiore map()
const newNum2 = num.map((item) => item * 10)
console.log(newNum2) // [100, 200, 300]
```

Dalla funzione di ordine superiore `map` puoi vedere che possiamo ottenere lo stesso risultato con meno codice e una
migliore struttura.

### Funzione `filter`

La funzione `filter()` crea un nuovo array popolato di tutti gli elementi che hanno superato la condizione della
funzione di callback; anche qui la funzione di callback accetta tre parametri:

- elemento
- indice
- array

Ad esempio, supponiamo di avere un array contenente oggetti di studenti che seguono un corso e lo stato se hanno
frequentato o meno le lezioni; dobbiamo filtrare l'array per recuperare solo gli studenti che hanno frequentato:

```javascript
const students = [
  { name: 'Maico Orazio', status: true },
  { name: 'Giovanni Rossi', status: false },
  { name: 'Giuseppe Verdi', status: true },
]

// funzione normale
const presentStudents = []
for (let i = 0; i < students.length; i++) {
  if (students[i].status === true) {
    presentStudents.push(students[i])
  }
}
console.log(presentStudents) // [{name:'Maico Orazio',status:true},{name:'Giuseppe Verdi',status:true}]

// funzione di ordine superiore filter()
const presentStudents2 = students.filter((student) => student.status === true)
console.log(presentStudents2) // [{name:'Maico Orazio',status:true},{name:'Giuseppe Verdi',status:true}]
```

Considera che abbiamo bisogno di un sottoinsieme di dati filtrando su più valori di proprietà. Possiamo farlo utilizzando
`filter` che contiene più condizioni:

```javascript
const newFiltered = students.filter(
  (student) => student.name === 'Maico Orazio' && student.status === true
)
console.log(newFiltered) // [{name:'Maico Orazio',status:true}]
```

Quando di filtra su più valori, l'espressione della funzione può diventare lunga, il che rende poco leggibile. Un modo
per affrontare questo problema consiste nell'utilizzare più funzioni `filter()` al posto dell'operatore
logico `&&`, ottenendo gli stessi risultati:

```javascript
const newFiltered2 = students
  .filter((student) => student.name === 'Maico Orazio')
  .filter((student) => student.status === true)
console.log(newFiltered2) // [{name:'Maico Orazio',status:true}]
```

Un altro modo per esprimere un filtro complesso è creare una funzione denominata:

```javascript
const studentsAttending = (student) => student.name === 'Maico Orazio' && student.status === true
const newFiltered3 = students.filter(studentsAttending)
console.log(newFiltered3) // [{name:'Maico Orazio',status:true}]
```

Possiamo ottimizzare la flessibilità consentendo di impostare il nome dello studente in fase di esecuzione utilizzando
un parametro:

```javascript
const studentsAttending = (student, name) => student.name === name && student.status === true
const newFiltered3 = students.filter(studentsAttending('Maico Orazio')) // Error
```

Sfortunatamente, questo creerebbe un errore perché il filtro si aspetta una funzione e ora stiamo cercando di passare
l'output di `studentsAttending`.

### Curry in JavaScript

Per fornire una soluzione, possiamo utilizzare una tecnica avanzata di programmazione funzionale chiamata **currying**.
Il currying consente di tradurre una funzione con più argomenti in una seguenza di funzioni, consentendoci così di
creare parità con altre firme di funzione.

Il currying è una trasformazione di funzioni che traduce una funzione da richiamabile `f(a, b, c)` in richiamabile
come `f(a)(b)(c)`.

Spostiamo il parametro `name` in un'espressione di funzione e riscriviamo `studentsAttending` usando il currying. In
questo modo, la funzione `studentsAttending` diventa una funzione che accetta un nome `name` e restituisce un'altra
funzione che accetta un oggetto `student`:

```javascript
const studentsAttending = (name) => (student) => student.name === name && student.status === true
const newFiltered3 = students.filter(studentsAttending('Maico Orazio'))
console.log(newFiltered3) // [{name:'Maico Orazio',status:true}]
```

### Funzione `reduce`

Questo metodo esegue una funzione di callback su ogni elemento dell'array, e accetta due argomenti:

- funzione di callback
- valore iniziale

La funzione di callback accetta i seguenti quattro parametri:

- valore accumulatore: risultato dell'iterazione precedente
- valore corrente
- indice attuale
- array di origine

Ecco un esempio, in cui sommiamo tutti gli elementi di un array:

```javascript
const nums = [10, 23, 45, 37, 101]

//funzione normale
const sum = 0
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i]
}
console.log(sum) // 216

// funzione di ordine superiore reduce()
const sum2 = nums.reduce((acc, value) => {
  acc + value
})
console.log(sum2) // 216
```

Invece di sommare i numeri di un array, utilizziamo `reduce` per trovare il numero più grande:

```javascript
const nums = [10, 23, 45, 37, 101]
const max = nums.reduce((acc, value) => (acc > value ? acc : value))
console.log(max) // 101
```

Da tutti gli esempi precedenti, puoi vedere che le funzioni di ordine superiore rendono il codice più pulito e più
facile da comprendere.

### Creazione della nostra funzione di ordine superiore

Finora, ho mostrato solo esempi di funzioni di ordine superiore di funzioni integrate in JavaScript; ora, tuffiamoci
nella creazione della nostra.

Creeremo un clone della funzione `map`. Ad esempio, abbiamo un array contenente nomi, vogliamo ottenere la lunghezza
di ogni nome usando la funzione di ordine superiore che creeremo:

```javascript
function mapClone(arr, fn) {
  const nameList = []
  for (let i = 0; i < arr.length; i++) {
    nameList.push(fn(arr[i]))
  }
  return nameList
}
```

La funzione `maClone` appena creata accetta un array `arr` e una funzione di callback `fn`. Il ciclo `for` scorre
l'array dato in input e invoca la funzione di callback su ogni elemento.

```javascript
const names = ['Maico', 'Giovanni', 'Giuseppe']
const nameLength = mapClone(names, (item) => item.length)
console.log(nameLength) // [ 5, 8, 8 ]
```

> Buon lavoro 👨‍💻
