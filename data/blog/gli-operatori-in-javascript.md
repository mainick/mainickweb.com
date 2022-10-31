---
title: 'Gli operatori in JavaScript'
date: '2022-11-07T07:30:12+01:00'
status: draft
permalink: /gli-operatori-in-javascript
author: 'Maico Orazio'
excerpt: ''
type: post
id: 845
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

# Operatori in Javascript

![JavaScript](/static/images/posts/logo-javascript.webp)

## Operatori Logici

Ci sono tre tipi di operatori logici in JavaScript. L'operatore logico AND (`&&`),
l'operatore logico OR (`||`) e l'operatore logico NOT (`!`).

È possibile utilizzare questi **operatori per confrontare le variabili**; essi restituiscono
i valori booleani `true` e `false`, consentendo di **prendere decisioni o eseguire
azioni in base al risultato del confronto**. Possono essere utilizzati con
variabili di qualsiasi tipo di dati.

### OR logico (`||`)

Questo operatore restituisce il primo valore veritiero da un elenco di variabili,
espressioni o operandi a partire da sinistra verso destra. Converte gli operandi
in valori booleani, se il risultato è `true`, si ferma e restituisce il valore
dell'operando; altrimenti, restituisce l'ultimo operando se tutti risultano `false`.

```javascript
true || false // true
false || false // false
false || true // true
false || true || false // true
'' || 'hello' // 'Hello'
undefined || null || 0 // 0
```

### AND logico (`&&`)

Valuta sempre da sinistra a destra, se incontra un valore `false`, si ferma e restituisce
il valore dell'operando; altrimenti, restituisce l'ultimo operando se tutti gli
operandi sono stati valutati.

```javascript
false && true // false
1 && 0 && 1 // 0
'' && null // ''
undefined && true // undefined
```

### NOT logico (`!`)

È un operatore unario, accetta solo un operando. Prima converte il suo operando
in un booleano e poi restituisce il valore inverso.

```javascript
!0 // true
!'Hello' // false
!!null // false
!undefined // true
```

## Operatore di coalescenza nullo

ES2020 ha introdotto l'**operatore di coalescenza nullo**, che è un operatore logico
rappresentato da due punti interrogativi (`??`). Accetta due operandi e valuta
l'operando sul lato destro dell'espressione solo se l'operando sul lato sinistro
è `null` o `undefined`.

```javascript
let varIsNull = null
let varEmpty = ''
let num = 10
console.log(varIsNull ?? varEmpty) // ''
console.log(varEmpty ?? num) // ''
```

Questo operatore può essere utilizzato anche per specificare un valore predefinito
per una variabile

```javascript
const firstDayOfTheWeek = (day) => {
  return day ?? 'Sunday'
}
console.log(firstDayOfTheWeek('Monday')) // Monday
console.log(firstDayOfTheWeek('')) // ''
console.log(firstDayOfTheWeek()) // Sunday
```

Di seguito qualche esempio di come possiamo utilizzare l'operatore di coalescenza
nullo in [React](https://www.mainickweb.com/tags/react)

```javascript
export function AwesomeComponent({numOfViews}) {
  let views = numOfViews ?? 'not specified'
  return (
    <p>{views}</p>
  )
}

<AwesomeComponent numOfViews='' /> // views settato a ''
<AwesomeComponent numOfViews={200} /> // views settato a 200
<AwesomeComponent /> // views settato a 'not specified'
<AwesomeComponent numOfViews={0} /> // views settato a 0
<AwesomeComponent numOfViews={false} /> // views settato a false
<AwesomeComponent numOfViews={null} /> // views settato a 'not specified'
```

L'operatore di coalescenza nullo non considera altri valori falsi oltre a `null`
e `undefined`.

> Buona lavoro 👨‍💻
