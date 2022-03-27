---
title: 'Conversioni tra tipi di dati'
date: '2008-11-12T13:30:58+01:00'
status: publish
permalink: /conversioni-tra-tipi-di-dati
author: 'Maico Orazio'
excerpt: ''
type: post
id: 218
category:
  - PHP
tag:
  - php
  - 'conversione dati'
  - 'conversione tipi'
post_format: []
---

In php le variabili non sono dichiarate di un certo tipo e il motore del linguaggio converte liberamente tra i diversi tipi durante l’esecuzione. Esistono due sistemi principali per **convertire le variabili** di un tipo in un altro.

## Conversioni di tipo implicite

I casi più frequenti in cui avvengono conversioni implicite (automatiche) di tipo sono i seguenti:

- **_Operatori aritmetici binari_**. Se un operando è un intero e l’altro è un numero a virgola mobile, il valore intero viene convertito in float. Se uno è una stringa e l’altro è un intero, PHP converte la stringa in un intero prima di valutare entrambi gli operandi come interi.
- **_Espressioni booleane e operatori di espressione_**. Nel caso in cui un’espressione deve essere valutata come un booleano, PHP converte il risultato dell’espressione in un booleano.
- **_Alcuni metodi che richiedono le stringhe_**. Alcuni metodi e operatori, echo, print o l’operatore di concatenazione della stringa (.), richiedono che i loro operandi siano stringhe.

## Conversioni di tipo esplicite

Si tenta la conversione di tipo utilizzando il cosiddetto _type casting_: si fa precedere una variabile (o una qualsiasi espressione) da un tipo di dato racchiuso tra parentesi e php prova a convertirla.

- **(float), (double), (real)** Converte in un numero a virgola mobile.
- **(int), (integer)** Converte in un intero.
- **(string)** Converte in una stringa di testo.
- **(bool), (boolean)** Converte in un valore booleano.
- **(array)** Converte in un array.
- **(object)** Converte in un oggetto.

```php
<?php
    $strQta = $_POST['qtaDesiderata'];
    $strQta = (int)$strQta;
?>
```

## Conversioni di tipo specifiche

### Conversione in interi

E’ possibile convertire esplicitamente i valori in interi utilizzando anche la funzione `intval`. Quando si convertono i valori a virgola mobile in interi, php tronca la parte decimale. Quando si converte una stringa in un intero, php analizza la stringa un carattere alla volta finché trova un carattere che non è una cifra; il mancato parsing di un numero decimale valido restituisce il valore 0.

```php
<?php
    echo (int)"123";  //visualizza 123
    echo (int)"+456";  // 456
    echo (int)"55e2";  // 55 - il parsing si ferma alla e
    echo (int)"3 cani"; // 3 - il parsing si ferma allo spazio
    echo (int)"tre cani"; // 0 - non interpretati num scritti in lettere
    echo (int)"-4321"; // -4321
?>
```

Quando si convertirà da un booleano in un intero, FALSE restituirà 0 mentre TRUE restituirà 1. La conversione da array, oggetti o risorse in interi è indefinita e non dovrebbe essere eseguita. Il valore NULL è convertito sempre nel valore intero 0.

### Conversione in numeri in virgola mobile

Le varibili e le espressioni possono essere convertite nel tipo a virgola mobile anche chiamando la funzione `floatval`.

Un intero convertito in numero a virgola mobile potrebbe non essere identico al valore intero originale ( 10000 generi un valore a virgola mobile 9999.9999999 o anche 10000.000001). Non si dovrebbe mai fare affidamento su confronti con valori a virgola mobile. Quando si convertono le stringhe, qualsiasi stringa numerica contenente un decimale (.) o la lettera e può essere convertita in un valore a virgola mobile.

```php
<?php
    $f1 = (float)"+123";  // 123.0
    $f2 = (float)"-123";  // -123.0
    $f3 = (float)"123.456";  // 123.456
    $f4 = (float)"1.23456e2";  // 123.456
    $f5 = (float)"1.234e-2";  // 0.01234
    $f6 = (float)"1000000000000";  //1e12 (mille miliardi)
?>
```

Per il resto avviene come nella conversione in interi, in più specificata la parte decimale.

### Conversione in stringhe

E’ possibie convertire le variabili in stringhe chiamando la funzione `strval` o racchiudendole tra virgolette doppie.

Gli interi e i valori a virgola mobile sono convertiti in stringhe che rappresentano valori numerici. I valori booleani sono convertiti trasformando il valore TRUE nella stringa “1”, mentre FALSE nella stringa vuota (“”). Gli array sono sempre convertiti nel valore della stringa “Array” e gli oggetti nel valore “Object”. Le risorse sono convertite in una stringa come “Resource id #X” in cui X è un identificatore numerico univoco, utilizzato da php per identificare la risorsa. NULL viene convertito nella stringa vuota (“”).

### Conversione in array

E’ possibile convertire una variabile o un’espressione in un array tramite anche la funzione `array`, la stessa utilizzata per creare un nuovo array.

Gli interi, i numeri a virgola mobile, le stringhe, i valori booleani e le risorse sono convertite creando un array con un unico elemento (con indice pari a 0), ossia il valore della variabile o dell’espressione. Gli oggetti vengono convertiti creando un array con le chiavi rappresentate dai nomi delle variabili membro dell’oggetto e con i valori costituiti dal valore delle variabili.

## Funzioni utili per la conversione di tipo

### is_type

Tutte queste funzioni restituiscono un valore booleano che indica se il valore specificato è o non è del tipo richiesto:

```text
is_integer
is_float
is_numeric (restituisce TRUE se l'argomento è un numero a virgola mobile, un intero o una stringa numerica)
is_string
is_bool
is_array
is_object
is_null
```

### gettype

Segnala di quale tipo php considera attualmente una variabile o un’espressione; restituisce:

```text
boolean
integer
double
string
array
object
resource
NULL
unknown type
```

### settype

Questa funzione richiede di specificare due argomenti: la variabile da convertire e il tipo nel quale deve essere convertita, espresso come una stringa. Restituisce un valore booleano che indica se la conversione è avvenuta con successo o meno.

```php
<?php
    $var = 234.234;
    settype($var, "string");
    //ora $var hai il valore "234.234", del tipo stringa
?>
```
