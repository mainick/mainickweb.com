---
title: 'Iterazione foreach degli array in JavaScript'
date: '2010-08-02T07:00:25+01:00'
status: publish
permalink: /iterazione-foreach-degli-array-in-javascript
author: 'Maico Orazio'
excerpt: ''
type: post
id: 495
images: /static/images/posts/snippet-javascript.jpg
category:
  - javascript
  - snippets
tag:
  - javascript
  - snippets
post_format: []
---

![snippet-javascript.jpg](/static/images/posts/snippet-javascript.jpg)

Iterare gli **array associativi** in PHP è molto più semplice, ma proprio in questi giorni ho avuto l’esigenza di ottenere la **stessa funzionalità in JavaScript**, e mi sono reso conto di non saper come recuperare i dati da un array associativo con un ciclo nel linguaggio JavaScript.

L’utilità nell’utilizzare un array associativo è dato dal fatto che posso selezionare tutti i valori relativi ad una determinata chiave, (_indice dell’array_), senza dover sapere in quale posizione dell’array è presente il dato.

In PHP per elencare in maniera ciclica tutti i dati occorre fare ricorso ad una struttura logica conosciuta come **Foreach**. Volendola applicare avremmo un codice simile al seguente:

```php
$array_associativo = array(
  'gen' => 'Gennaio',
  'feb' => 'Febbraio',
  'mar' => 'Marzo',
  'apr' => 'Aprile',
  'mag' => 'Maggio',
  'giu' => 'Giugno',
  'lug' => 'Luglio',
  'ago' => 'Agosto',
  'set' => 'Settembre',
  'ott' => 'Ottobre',
  'nov' => 'Novembre',
  'dic' => 'Dicembre'
);
foreach ($array_associativo as $key => $value) {
  echo '[' . $key . '] => ' . $modello . ',&lt;br /&gt;';
}
```

In JavaScript lo stessa variabile la si potrebbe creare in questo modo:

```js
var array_associativo = new Array()
array_associativo['gen'] = 'Gennaio'
array_associativo['feb'] = 'Febbraio'
array_associativo['mar'] = 'Marzo'
array_associativo['apr'] = 'Aprile'
array_associativo['mag'] = 'Maggio'
array_associativo['giu'] = 'Giugno'
array_associativo['lug'] = 'Luglio'
array_associativo['ago'] = 'Agosto'
array_associativo['set'] = 'Settembre'
array_associativo['ott'] = 'Ottobre'
array_associativo['nov'] = 'Novembre'
array_associativo['dic'] = 'Dicembre'
```

Anche in JavaScript esiste una struttura logica che esegue questa funzione, ma non si chiama **Foreach**:

```js
for (var key in array_associativo) {
  document.write('[' + key + '] => ' + array_associativo[key] + ',&lt;br /&gt; ')
}
```

In effetti è sempre il solito for, ma con una condizione differente che permette di **analizzare un array associativo**.
