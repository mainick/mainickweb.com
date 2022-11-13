---
title: 'Gli operatori Rest e Spread e la destrutturazione'
date: '2022-11-14T07:30:12+01:00'
status: publish
permalink: /gli-operatori-rest-e-spread-e-la-destrutturazione
author: 'Maico Orazio'
excerpt: ''
type: post
id: 850
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

# Operatori Rest e Spread e la destrutturazione

![JavaScript](/static/images/posts/logo-javascript.webp)

## Operatori Rest e Spread

Sebbene i due operatori siano in qualche modo diversi, JavaScript utilizza
i tre punti (`...`) per rappresentarli entrambi. L'**operatore Rest raggruppa
gli argomenti o i parametri forniti dall'utente in un unico array**. D'altra
parte, l'**operatore Spread viene utilizzato per espandere un elenco iterabile
(oggetti, array, etc.) nei suoi elementi**.

### L'operatore Rest

In JavaScript, per passare una matrice di valori, puoi sfruttare l'operatore Rest
come di seguito:

```javascript
const numbers = [3, 2, 1, -2, 4, 9]
console.log(Math.max(...numbers)) // 9

const myFunction = (one, two, ...rest) => {
  console.log(rest)
}
myFunction('one', 'two', 'three', 'four', 'five') // ['three', 'four', 'five']
```

Il frammento di codice seguente mostra come utilizzare l'operatore Rest in
React con le `props` passate ai componenti

```javascript
const ChildComponent = ({ name, ...rest }) => {
  return (
    <div>
      <p>Welcome, {name}</p>
      <p>{sex}</p>
      <p>{height}</p>
    </div>
  )
}

const ParentComponent = () => {
  return <ChildComponent name={'Maico'} sex={'M'} height={'185cm'} />
}
```

### L'operatore Spread

L'operatore Spread consente di espandere un iterabile come una matrice o
una stringa.Di seguito alcuni esempi di utilizzo:

```javascript
const detaild = ['my', 'name', 'is']
const message = [...detaild, 'Maico Orazio']
console.log(message) // ['my', 'name', 'is', 'Maico Orazio']

const oldObj = { firstName: 'Maico', lastName: 'Orazio' }
const newObj = { ...oldObj, age: 39 }
console.log(newObj) // {firstName: "Maico", lastName: "Orazio", age: 39}
```

L'operatore Spread è utile quando si vuole copiare un oggetto in un'altro
senza mutare quello originale

```javascript
const initialState = { counter: 0 }
const myReduce = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
      break
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
      break
    default:
      return state
  }
}
```

Nell'esempio sopra, l'operatore Spread copia tutte le proprietà dell'oggetto `state` in un
nuovo oggetto e solo la proprietà `counter` del nuovo oggetto viene
modificata o aggiornata.

## La destrutturazione

La **destrutturazione è un'espressione JavaScript che ci consente di decomprimere
o estrarre** gli elementi di un array, oggetto, `Map` e `Set` in nuove variabili
senza modificare o mutare l'elemento originale. Gli array e gli oggetti sono
le due strutture dati più comunemente utilizzate in JavaScript, quindi ci concentriamo
su di esse.

### Destrutturazione di oggetti

La destrutturazione degli oggetti segue uno schema specifico. Sulla destra abbiamo
l'oggetto che vogliamo dividere (destrutturare); sulla sinistra c'è un modello simile
a un oggetto corrispondente alle proprietà che vuoi estrarre.

```javascript
let user = {
  name: 'Maico Orazio',
  age: 39,
  height: 185,
}
let { name, age, height } = user
console.log(name) // 'Maico Orazio'
console.log(age) // 39
console.log(height) // 185
```

L'**ordine in cui si destrutturano le proprietà non ha importanza**, il codice
riportato di seguito funziona come quello sopra

```javascript
let { height, name, age } = user
```

Il vantaggio della destrutturazione degli oggetti è che consente di assegnare un
nuovo nome di variabile alle proprietà destrutturate da un oggetto; utile, ad esempio,
quando abbiamo un nome di proprietà lungo

```javascript
let { name: n, age: a, height: h } = user
console.log(n) // 'Maico Orazio'
console.log(a) // 39
console.log(h) // 185
```

### Destrutturazione di array

Come la destrutturazione degli oggetti, la **destrutturazione degli array
consente di ridurre gli elementi di un array in singoli elementi** a cui è
possibile accedere tramite il loro nome di variabile.

```javascript
let myArray = [1, 2]
let [one, two] = myArray
console.log(one) // 1
console.log(two) // 2
```

Allo stesso modo possiamo anche destrutturare un array nidificato

```javascript
let myArray = ['welcome', 'to', 'the', ['class', 'office', 'market']]
const [, , , location] = myArray
console.log(location) // ['class', 'office', 'market']
let [first, , third] = location
console.log(first) // 'class'
console.log(third) // 'market'
```

In [React](https://www.mainickweb.com/tags/react), lo utilizzeremo molto
spesso con l'oggetto `props` passato ad un componente

```javascript
const ChildComponent = (props) => {
  const { name, age, height } = props
  return <div>...</div>
}
const ParentComponent = () => {
  return <ChildComponent name={'Maico Orazio'} age={39} height={185} />
}
```

> Buona lavoro 👨‍💻
