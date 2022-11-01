---
title: 'Valori mutabili e immutabili'
date: '2022-12-05T07:30:12+01:00'
status: draft
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

# Valori mutabili e immutabili

![JavaScript](/static/images/posts/logo-javascript.webp)

In questo articolo esamineremo i concetti di **mutabilità e immutabilità in JavaScript** e come sfruttare l'immutabilità
in JavaScript per rendere il codice meno soggetto a errori.

> È molto facile alterare accidentalmente il valore delle tue variabili. Da qui la necessità di utilizzare dati immutabili.

Per comprendere al meglio i valori mutabili e immutabili, devi prima capire che JavaScript ha due tipi di dati:

- **tipi primitivi** (string, integer, boolean), passati per valore e sono immutabili,
- **tipi di riferimento** (object, array), passati per riferimento e sono mutabili.

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

> Buona lavoro 👨‍💻
