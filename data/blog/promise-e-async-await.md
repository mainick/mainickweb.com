---
title: 'Promise e Async/Await'
date: '2022-11-28T07:30:12+01:00'
status: publish
permalink: /promise-e-async-await
author: 'Maico Orazio'
excerpt: ''
type: post
id: 860
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

## Promise

Le **promise sono la base della gestione di operazioni asincrone in JavaScript**. La sintassi è più pulita e più facile da
usare rispetto alle callback.

Le promise sono oggetti speciali in JavaScript che **consentono di associare funzioni di callback all'eventuale completamento
riuscito o non riuscito di un'operazione asincrona**. Le promise possono essere create con una nuova istanza dell'oggetto
`Promise`, passando una funzione di callback al costruttore:

```javascript
function funcCallback(resolve, reject) {
  if (1 + 1 === 2) {
    resolve()
  } else {
    reject()
  }
}
const myPromise = new Promise(funcCallback)
```

La funzione di callback `funcCallback` passata al costruttore `Promise` riceve due funzioni di callaback:
`resolve` e `reject`. La funzione `resolve` viene invocata se tutto va bene; altrimenti, viene invocata la
funzione `reject`.

Una promise può trovarsi in uno dei seguenti stati:

1. `resolved`: quando il codice associato alla promise viene completato correttamente e viene chiamata la callback di risoluzione
2. `rejectd`: quando il codice associato alla promise fallisce, viene invocata la callback di rifiuto
3. `pending`: quando la promise non è stata né risolta né rigettata
4. `fulfilled`: quando la promise è stata risolta o rigettata.

La promise può anche restituire informazioni (valori) prendendo i valori restituiti come argomenti:

```javascript
function funcCallback(resolve, reject) {
  let sum = 1 + 1
  if (sum === 2) {
    resolve('1 + 1 è effettivamente uguale a 2')
  } else {
    reject('ops! Si è verificato un errore')
  }
}
const myPromise = new Promise(funcCallback)
```

Ora ti starai chiedendo come fai a capire se una promise ha esito positivo o negativo e come accedere alle informazioni
o ai valori restituiti dalle funzioni di callback di risoluzione o rifiuto. JavaScript ha altri tre gestori di metodi
dell'oggetto `Promise`: sono i metodi `then`, `catch` e `finally`.

Di seguito un esempio per scoprire se la promise è riuscita o non è riuscita e quale informazioni (valori)
sono stati restituiti:

```javascript
myPromise
  .then((info) => {
    console.log(info) // '1 + 1 è effettivamente uguale a 2'
  })
  .catch((info) => {
    console.log(info) // 'ops! Si è verificato un errore'
  })
  .finally(() => {
    console.log('eseguito sempre')
  })
```

Un esempio di utilizzo in React può essere il recupero dei dati da un endpoint remoto:

```javascript
function MyComponent() {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('https://localhost:8080/names')
      .then((resp) => resp.json())
      .then((data) => setNames(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {names.map((name, index) => {
        ;<li key={index}>{name}</li>
      })}
    </div>
  )
}
```

Nello codice riportato sopra, facciamo una richiesta all'endpoint remoto dell'API. Se l'operazione ha esito positivo
(si risolve), viene eseguita l'istruzione del primo `then`, e la risposta viene convertita in un oggetto JSON.
Questa conversione della risposta in un oggetto JSON è un'altra operazione asincrona, che se ha esito positivo,
da seguito all'istruzione del secondo `then`, e i dati della richiesta vengono settati in `names` tramite la
funzione `setNames` definita dall'hook `useState`. Se una delle due operazioni asincrone non riescono (rigettata),
viene eseguito il codice del metodo `catch`, dove l'errore viene stampato sulla console.

Le promise sono ottime per gestire le operazioni asincrone ed evitare il [Callback Hell](http://callbackhell.com/).
Andando oltre, ES2017 ha introdotto un'altra interessante funzionalità chiamata `async/await`, che è un modo più elegante per gestire le
operazioni asincrone rispetto alle promise.

## Async / Await

Async/Await è stato introdotto per rendere più semplice e pulito il lavoro con le promise. La sintassi è semplice e
diretta:

```javascript
async function myFunc() {
  await // operazioni asincrona
};

// utilizzando una arrow function
const myFunc = async () => {
  await /// operazioni asincrona
}
```

La parola chiave `await` deve essere utilizzata in una funzione e quella funzione deve essere contrassegnata come
asincrona tramite la parola chiave `async`.

Convertiamo l'esempio sopra della promise:

```javascript
function MyComponent() {
  const [names, setNames] = useState([])

  async function myFunc() {
    try {
      const resp = await fetch('https://localhost:8080')
      const data = await resp.json()
      setNames(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    myFunc()
  }, [])

  return (
    <div>
      {names.map((name, index) => {
        ;<li key={index}>{name}</li>
      })}
    </div>
  )
}
```

La parola chiave `await` indica a JavaScript di sospendere l'esecuzione della funzione asincrona fino a quando il codice
asincrono non viene soddisfatto (risolto o rigettato). Se il codice asincrono viene rigettato, viene eseguito il codice
del blocco `catch`.

> Buona lavoro 👨‍💻
