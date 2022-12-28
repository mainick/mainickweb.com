---
title: 'Che cosa è this in JavaScript?'
date: '2023-01-16T07:30:12+01:00'
status: draft
permalink: /che-cos-e-this-in-javascript
author: 'Maico Orazio'
excerpt: 'In questo articolo esamineremo la parola chiave this e le quattro regole che ne determinano il comportamento in JavaScript'
type: post
id: 875
images: /static/images/posts/logo-javascript.webp
category:
  - javascript
tag:
  - appunti-dev
  - javascript
  - ECMAScript
post_format: []
---

![JavaScript](/static/images/posts/logo-javascript.webp)

In questo articolo esamineremo la parola chiave `this` e le quattro regole che ne determinano il comportamento in JavaScript.

Rispetto agli altri linguaggi, in JavaScript la parola chiave `this` agisce in modo diverso. Per quanto confuso possa
essere, è un **concetto fondamentale perché consente flessibilità, riutilizzando una funzione in più contesti**.

## Cosa è `this`?

Quando si invoca una funzione in JavaScript, viene creato il contesto di esecuzione e aggiunto allo stack di chiamate.
Il contesto di esecuzione contiene un riferimento a `this` che verrà utilizzato durante l'esecuzione della funzione.

Quindi, per ogni chiamata di funzione, c'è un identificatore speciale chiamato `this`, ma `this` non riguarda dove è
definita la funzione, ma come viene chiamata.

La parola chiave `this` può essere utilizzata per invocare funzioni in contesti diversi e, a seconda del contesto,
potrebbe ogni volta significare qualcosa di completamente diverso. `this` non punta mai alla funzione stessa. Punta
sempre a un oggetto di contesto che può essere identificato osservando dove viene invocata.

Come possiamo quindi determinare qual è il valore che punta `this` per una data funzione?

## 4 regole per vincolare `this`

In JavaScript, ci sono quattro modi diversi per invocare una funzione e ognuno di essi fornisce oggetti di contesto
diversi a cui `this` punta durante l'esecuzione di una funzione. Le quattro regole per l'associazione `this` sono
determinate dal modo in cui invochiamo le funzioni in JavaScript.

### Legame implicito

Quando invochiamo una funzione nel contesto di un oggetto che possiede o contiene `this`, esso farà riferimento
all'oggetto stesso.

```javascript
function myName() {
  console.log(this.name)
}
var person1 = { name: 'Maico', myName: myName }
var person2 = { name: 'Giovanni', myName: myName }
person1.myName() // 'Maico'
person2.myName() // 'Giovanni'
```

Nell'esempio sopra, JavaScript invocherà la funzione `myName` e imposterà il suo `this` uguale al contesto dell'oggetto
utilizzato per invocare la funzione.

```javascript
const myObj = {
  name: 'Maico',
  func: function myName() {
    console.log(this.name)
  },
}
myObj.func() // 'Maico'
```

Nell'esempio sopra, abbiamo un oggetto che contiene una proprietà che fa riferimento ad una funzione, nota anche come
metodo dell'oggetto. Ogni volta che questo metodo viene invocato, il suo `this` farà riferimento all'oggetto che lo
racchiude immediatamente `myObj`. Questo vale sia per la modalità `strict` che non.

### Vincolo esplicito

Le funzioni in JavaScript sono considerate oggetti di prima classe, il che significa che possono essere archiviate in
variabili, passate come argomento, restituite da altre funzioni. Tutte le funzioni discendono dall'oggetto integrato
`Function` ed ereditano i metodi definiti nell'oggetto `Function.prototype`.

Possiamo usare due dei suoi metodi. `call()` e `apply()`, per invocare una funzione in contesti diversi o con oggetti
di contesto diversi. Questi metodi eseguono la funzione che punta al contesto dell'oggetto fornito come valore di `this`.

```javascript
function myName() {
  console.log(this.name)
}
var person1 = {
  name: 'Maico',
}
myName.call(person1) // 'Maico'
myName.apply(person1) // 'Maico'
```

Entrambi i metodi `call()` e `apply()` si comportano in modo identico e impostano `person1` come valore di `this`
all'interno della funzione `myName`. Tuttavia, la differenza tra i due metodi è il modo in cui gestiscono parametri
aggiuntivi.

#### Variazione del legame implicito

Sfortunatamente, esiste la possibilità di perdere l'associazione prevista per `this` o di impostarla sull'oggetto
globale quando si passano funzioni o si fornisce una callback a un'altra funzione. Il metodo della funzione `bind()` è
un'utilità incorporata in JavaScript ed è stata aggiunta in ES5 per impostare il valore di `this` di una funzione
indipendentemente da come viene chiamata la funzione.

```javascript
var name = 'Maico'
function myName(cb) {
  cb()
}
var myObj = {
  name: 'Giovanni',
  callMe: function () {
    console.log(this.name)
  },
}
myName(myObj.callMe) // 'Maico'
myName(myObj.callMe.bind(myObj)) // 'Giovanni'
```

Nell'esempio sopra, quando passiamo `myObj.callMe` come callback alla funzione `myName`, il suo `this` perde il legame
con l'oggetto `myObj` e punta all'oggetto globale. Può essere risolto usando il metodo `bind()` per far in modo che
`this` faccia riferimento all'oggetto `myObj`.

> `bind()` non esegue la funzione immediatamente. Restituisce una funzione con `this` associato all'oggetto che
> riceve come primo argomento.

### La parola chiave `new`

L'invocazione di una funzione con la parola chiave `new` viene definita **chiamata del costruttore**. Quando una
funzione viene chiamata con la parola chiave `new` davanti, fa quattro cose:

1. crea un nuovo oggetto vuoto
2. l'oggetto appena creato è collegato all'oggetto prototipo della funzione `Function.prototype`
3. la funzione viene invocata con il suo `this` che punta al nuovo oggetto
4. se la funzione non restituisce un oggetto, implica un `return this`.

```javascript
function myName(name) {
  this.name = name
}
let me = new myName('Maico')
console.log(me.name) // 'Maico'
```

Nell'esempio sopra, chiamiamo la funzione `myName` con la parola chiave `new` che crea immediatamente un nuovo oggetto
che è un'istanza della funzione `myName`. Il `this` della funzione punta al nuovo oggetto che è stato creato e
assegnato alla variabile `me`.

### Rilegatura predefinita

Quando si utilizza il `this` all'interno di una funzione che viene richiamata senza impostare una chiamata a nessun
oggetto di contesto, per impostazione predefinita, questo farà riferimento all'oggetto globale, ovvero `window`.

```javascript
var name = 'Maico'
function myName() {
  console.log(this)
  console.log(this.name)
}
myName() // Window
// 'Maico'
```

Abbiamo chiamato `myName` senza impostare alcun oggetto di contesto, quindi l'associazione predefinita si applica qui
se la funzione non è in modalità `strict`.

```javascript
var name = 'Maico'
function myName() {
  'use strict'
  console.log(this)
  console.log(this.name)
}
myName() // undefined
// TypeError: Cannot read property 'name' of undefined
```

Nell'esempio sopra, il contenuto della funzione viene eseguito in modalità `strict`, quindi l'oggetto globale non è
idoneo per l'associazione predefinita. Il valore `this`, in questo caso, è impostato su `undefined`.

### Arrow Function

Le arrow function, per impostazione predefinita, non definiscono il proprio `this`. Se lo definisci all'interno di una
arrow function, non è diverso dalla dichiarazione di una normale variabile globale in JavaScript. Si risolverà
lessicalmente in un ambito di inclusione che definisce il `this` o nell'ambito globale.

```javascript
let myObj = {
  name: 'Maico',
  func: function myName() {
    return () => {
      console.log(this.name)
    }
  },
}
let a = myObj.func()
a() // 'Maico'
```

Nell'esempio sopra, cercherà nella catena dell'ambito per vedere se il suo ambito padre ha un `this`; poiché
l'ambito che racchiude la funzione `myName` è un oggetto, il `this` nella arrow function punta all'oggetto.

### Ordine di precedenza

Qual è l'ordine di precedenza se più di una regola corrisponde a dove invocata la funzione?

- se la funzione è stata invocata con la parola chiave `new`, `this` fa riferimento all'oggetto appena creato;
- se è stata invocata con uno di questi metodi, `call()` o `apply()`, o si usa `bind()`, allora il `this` fa riferimento
  al contesto dell'oggetto specificato;
- se è stata invocata con il contesto di oggetto, il `this` fa riferimento all'oggetto stesso;
- infine, imposta l'oggetto globale per impostazione predefinita se una qualsiasi delle regole precedenti non
  corrisponde e la funzione non è in esecuzione in modalità `strict`.

> Buona lavoro 👨‍💻
