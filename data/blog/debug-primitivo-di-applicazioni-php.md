---
title: 'Debug primitivo di applicazioni PHP'
date: '2008-11-07T13:30:15+01:00'
status: publish
permalink: /debug-primitivo-di-applicazioni-php
author: 'Maico Orazio'
excerpt: ''
type: post
id: 204
category:
  - PHP
tag:
  - debug
  - PHP
post_format: []
---

Se vi trovate alla ricerca di **errori in una pagina PHP**, è possibile senza alcun IDE utilizzare queste semplici funzioni di PHP.

## echo

Mostrare il testo all’utente; quindi anche variabili.

```php
<?php echo "HELLO WORLD"; ?>
```

N.B. echo non è una funzione PHP, ma è un costrutto, per questo non richede l’uso di parentesi tonde.

## var_dump

La funzione **var_dump** mostra il tipo e il valore di una variabile nello stream dell’output (in realtà è possibile assegnarvi più di una variabile: la funzione elabora il risultato di qualsiasi espressione PHP valida). Nel caso delle stringhe, var_dump restituisce anche il numero di caratteri che compongono la stringa:

```php
<?php
    $randomNum = array(5, 3, 6, 4, 2, 1);
    var_dump($randomNum);
?>
```

Il codice precedente genera in un browser web il seguente output:

```text
array(6) { [0]=&gt; int(5) [1]=&gt; int(3) [2]=&gt; int(6)
               [3]=&gt; int(4) [4]=&gt; int(2) [5]=&gt; int(1) }
```

## print_r

La funzione **print_r** è simile a var_dump, ma cerca di rendere leggibile l’output agli utenti. print_r permette anche di specificare un valore facoltativo (chiamato parametro di una funzione) che indica alla funzione di restituire i risultati in una stringa e non di mostrarli nello stream di output.

L’output particolarmente leggibile generato da questa funzione è utile soprattutto per oggetti e array.

```php
<?php
    $drinks = array("Coffee", "Caf&eacute; au Lait", "Mocha", "Espresso", "Americano", "Latte");
    print_r($drinks);
?>
```

Lo script precedente mostra il seguente output in un browser web:

```text
Array ([0] =&gt; Coffee [1] =&gt; Caf&eacute; [2] =&gt; Mocha
         [3] =&gt; Espresso [4] =&gt; Americano [5] =&gt; Latte )
```

## var_export

L’ultimo di questo gruppo di funzioni utili per la visualizzazione delle variabili e del loro contenuto è la funzione **var_export**, anch’essa molto simile a var_dump, tranne per il fatto che l’output è costituito da una rappresentazione valida di codice PHP dei valori contenuti nelle variabili fornite come parametro.

Per esempio, il seguente script:

```php
<?php
    $arr = array(1, 2, 3, 4);
    var_export($arr);
?>
```

produce il seguente output (formattato per una lettura più semplice):

```text
array (
    0 =&gt; 1,
    1 =&gt; 2,
    2 =&gt; 3,
    3 =&gt; 4
)
```
