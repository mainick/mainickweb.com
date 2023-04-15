---
title: 'array_merge di PHP utilizzato in un ciclo è una pessima pratica'
date: '2022-10-08T07:30:09+01:00'
status: publish
permalink: /array_merge-di-php-utilizzato-in-un-ciclo-e-una-pessima-pratica
author: 'Maico Orazio'
excerpt: ''
type: post
id: 830
images: /static/images/posts/logo-php.webp
category:
  - PHP
tag:
  - php
  - loop
  - performance
post_format: []
---

![PHP](/static/images/posts/logo-php.webp)

Utilizzare la funzione `array_merge` in un ciclo `for / foreach / while` come in questo modo:

```php
$arraysToMerge = [ [1, 2], [2, 3], [5, 8] ];

$arraysMerged = [];
foreach($arraysToMerge as $array) {
    $arraysMerged = array_merge($arraysMerged, $array);
}
```

è una pessima pratica 😱 perché è un **killer di prestazioni** (soprattutto di memoria).

Da PHP 5.6, c'è un nuovo operatore, l'**operatore spread**

```php
$arraysToMerge = [ [1, 2], [2, 3], [5,8] ];

$arraysMerged = array_merge([], ...$arraysToMerge);
print_r($arraysMerged);
```

output

```shell
Array
(
    [0] => 1
    [1] => 2
    [2] => 2
    [3] => 3
    [4] => 5
    [5] => 8
)
```

che espande in automatico l'array senza la necessità di ciclarlo.

- niente più problemi di prestazioni
- nessun ciclo `for / foreach / while`
- processato in una singola riga di codice

Un esempio più complesso può essere rappresentato dal seguente caso:

- ho un elenco di studenti
- per ognuno di essi devo recuperare i libri usati
- devo memorizzarli in una nuova struttura array

E' possibile utilizzare l'operatore spread, ma è necessario un processo intermedio:

```php
// struttura dati studenti
$students = [['id'=>1],['id'=>2],['id'=>3]];

// recupera i libri usati per ID studente
function searchUsedBooksByStudent($id) {
    $books = [];
    $books[1] = ['italiano', 'storia'];
    $books[2] = ['matematica'];
    $books[3] = ['latino'];
    if (isset($books[$id])) {
        return $books[$id];
    }
    return [];
}


$arrayUsedBooks = [];
foreach ($students as $student) {
    $books = searchUsedBooksByStudent($student['id']);
    if ($books) {
      $arrayUsedBooks[] = $books;
    }
}
$arraysMerged = array_merge([], ...$arrayUsedBooks);
print_r($arraysMerged);
```

output

```shell
 Array
(
    [0] => italiano
    [1] => storia
    [2] => matematica
    [3] => latino
)

```

Spero ti siano utili questi esempi, guarda ora il tuo codice per capire cosa puoi migliorare!!!

> Buon lavoro 👨‍💻
