---
title: 'Arrow Function e Callback in JavaScript'
date: '2022-11-21T07:30:12+01:00'
status: draft
permalink: /arrow-function-e-callback-in-javascript
author: 'Maico Orazio'
excerpt: ''
type: post
id: 855
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

# Arrow Function e Callback in JavaScript

![JavaScript](/static/images/posts/logo-javascript.webp)

## Arrow Function

L'edizione 2015 della specifica ECMAScript, popolarmente nota come ES6, ha aggiunto alcune funzionalità al linguaggio
JavaScript. Le Arrow Function sono una di queste.

Le Arrow Function differiscono dalla normale dichiarazione di funzione in diversi modi, incluso il modo in cui viene
espressa la loro sintassi e il modo in cui vengono determinati i loro ambiti. Sono utili quando è necessario passare
una funzione, di solito una funzione anonima, come argomento di un'altra funzione (come nel caso delle **funzioni di
ordine superiore**). L'abbreviazione sintattica dell'arrow function può migliorare la leggibilità del codice.

```javascript
function sum(a, b) {
  return a + b
}

const funcSum = (a, b) => {
  return a + b
}
// oppure, come in questo caso dove esiste un'unica linea di codice
const funcSum2 = (a, b) => a + b
```

Se la funzione accetta un solo parametro è possibile omettere le parentesi attorno gli argomenti.

In React, le arrow function possono essere utilizzate per creare componenti e possono essere utilizzate come funzioni
di callback, impostare listener di eventi, etc.

Il codice seguente mostra come sostituire un componente creato con la sintassi della dichiarazione di funzione con una
arrow function:

```javascript
function MyComponent(props) {
  return (
    // jsx code
  )
};

const MyComponent2 = (props) => (
  // jsx code
);
```

Altro esempio di utilizzo, quando si imposta un listener di eventi:

```javascript
<Button onClick={ function() { console.log('clicked') } } />
<Button onClick={ () => console.log('clicked') } />
```

## Funzioni di Callback

In JavaScript, le funzioni sono oggetti di prima classe; in altre parole, possono essere trattate allo stesso modo
delle variabili. Una funzione di Callback, nella sua forma più elementare è una funzione che viene passata come
argomento a un'altra funzione. Ciò consente ad una funzione di chiamare un'altra funzione, in genere dopo aver eseguito
attività asincrone come il recupero di dati da un endpoint remoto, la gestione di eventi, etc. La funzione padre o la
funzione che richiama la callback viene definita funzione di ordine superiore (HOF).

Molte delle funzioni di JavaScript accettano una callback come argomento, `setTimeout`, `setInterval`, `addEventListener`,
e metodi degli array, `find`, `filter`, `some`, `map`, `forEach`, etc.

```javascript
setTimeout(() => {
  console.log('called after 1 minute')
}, 1000)
```

L'esempio di `setTimeout` riportato sopra, accetta una callback e un timer (in millesecondi) come argomento; esegue la
funzione di callback una volta trascorso il timer.

Un'altro esempio, possono essere i listener di eventi, utilizzati per registrare le funzioni di callback che verrano
eseguite quando l'evento in ascolto si verifica su un elemento di destinazione.

```javascript
const btn = document.querySelector('.addTodo')
btn.addEventListener('click', () => console.log('i was clicked'))
```

In React, un buon numero di hook introdotti in React 16 accettano funzioni di callback; un esempio è l'hook `useEffect`

```javascript
export default function MyComponent() {
  const [images, setImages] = useState([])

  async function getAllImages() {
    try {
      const resp = await axios.get('/api/images')
      setImages(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllImages()
  }, [])
}
```

> Buona lavoro 👨‍💻
