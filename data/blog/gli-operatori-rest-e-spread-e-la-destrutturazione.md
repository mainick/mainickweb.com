---
title: 'Gli operatori Rest e Spread e la destrutturazione'
date: '2022-11-14T07:30:12+01:00'
status: draft
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
i tre punti (`...`) per rappresentare entrambi. L'operatore Rest raggruppa
gli argomenti o i parametri forniti dall'utente in un unico array. D'altra
parte, l'operatore Spread viene utilizzato per espandere un elenco iterabile
(oggetti, array, etc.) nei suoi elementi.

### L'operatore Rest

In JavaScript, per passare un matrice di valori, puoi sfruttare l'operatore Rest
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

L'operatore Spread funziona in modo che consente di espandere un iterabile
come una matrice o una stringa in punti in cui sono consentiti zero o più argomenti.
Di seguito alcuni esempi di utilizzo:

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

L'operatore Spread copia tutte le proprietà dell'oggetto `state` in un
nuovo oggetto e solo la proprietà `counter` del nuovo oggetto viene
modificata o aggiornata.

> Buona lavoro 👨‍💻
