---
title: 'Valori mutabili e immutabili'
date: '2022-12-05T07:30:12+01:00'
status: publish
permalink: /valori-mutabili-e-immutabili
author: 'Maico Orazio'
excerpt: ''
type: post
id: 865
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

In questo articolo esamineremo i concetti di **mutabilità e immutabilità in JavaScript** e come sfruttare l'immutabilità
in JavaScript per rendere il codice meno soggetto a errori.

> È molto facile alterare accidentalmente il valore delle tue variabili. Da qui la necessità di utilizzare dati immutabili.

Per comprendere al meglio i valori mutabili e immutabili, devi prima capire che JavaScript ha due tipi di dati:

- **tipi primitivi** (string, integer, boolean, null, undefined), passati per valore e sono immutabili,
- **tipi di riferimento** (object, array, function), passati per riferimento e sono mutabili.

Facciamo alcuni esempi.

```javascript
let a = 'Maico'
let b = a
b = 'Giovanni'
console.log(a) // 'Maico'
console.log(b) // 'Giovanni'
```

La variabile `a` è stata assegnata alla variabile `b`, sappiamo che `a` è di tipo stringa che è un tipo primitivo e le
primitive vengono passate per valore. Ciò significa che il solo valore di `a` viene passatto alla variabile `b`.
Successivamente abbiamo modificato il valore della variabile `b` con `Giovanni`, e, come previsto, stampando in console
entrambe le variabili otteniamo due valori diversi. La modifica del valore della variabile `b` non ha cambiato il valore
della variabile `a`. Questa è l'**immutabilità con i tipi primitivi**.

Diamo un'occhiata ad un altro esempio utilizzando un tipo di riferimento:

```javascript
let a = { name: 'Maico' }
let b = a
b.name = 'Giovanni'
b.age = 32
console.log(a) // {name: 'Giovanni', age: 32}
console.log(b) // {name: 'Giovanni', age: 32}
```

Nell'esempio sopra, abbiamo assegnato il valore di `a` alla variabile `b`. Poiché `a` è di tipo oggetto e gli oggetti
vengono passati per riferimento, aggiornando `b` si aggiorna automaticamente anche `a`. Questo perché il riferimento di
memoria di `a` è stato passato a `b`, non solo il valore, il che significa che entrambe le variabili ora fanno
riferimento allo stesso indirizzo di memoria e qualsiasi modifica ad una di esse si rifletterà automaticamente
nell'altra.

## `Object.assign`

Ecco alcuni esempit per come rendere un oggetto immutabili.

Il metodo `Object.assign` ci consente di copiare o passare valori da un oggetto all'altro. Ecco la firma:

```javascript
const result = Object.assign(target, source)
```

1. il metodo riceve un parametro che è il nostro obiettivo, l'oggetto che vogliamo modificare
2. il seconda parametro è la nostra fonte, quindi uniremo l'oggetto di origine `source` con il nostro oggetto di
   destinazione `target`.

Diamo un'occhiata a questo esempio:

```javascript
const obj1 = { name1: 'Maico' }
const obj2 = { name2: 'Giovanni' }
const obj3 = Object.assign(obj1, obj2)
console.log(obj3) // { name1: 'Maico', name2: 'Giovanni' }
```

Ora immaginiamo di voler copiare i valori da un specifico oggetto a una nuova variabile:

```javascript
const obj = { name: 'Maico' }
const newObj = Object.assign({}, obj)
console.log(newObj) // { name: 'Maico' }
```

In questo modo effettuiamo una copia dell'oggetto `obj` su una nuova varibiale `newObj` con altro riferimento in memoria.

Immaginiamo di voler copiare tutti i valori da uno specifico oggetto e aggiungere una nuova proprietà al nuovo oggetto:

```javascript
const obj = { name: 'Maico' }
const newObj = Object.assign({}, obj, { age: 39 })
console.log(newObj) // { name: 'Maico', age: 39 }
```

> Utilizzare l'immutabilità nelle tue applicazioni migliorerà il modo in cui concepisci il codice e renderà il codice
> più pulito e più facile da capire.

> Buona lavoro 👨‍💻
