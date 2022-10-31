---
title: 'Come utilizzare funzioni di callback in PHP'
date: '2010-11-24T07:30:09+01:00'
status: publish
permalink: /come-utilizzare-funzioni-di-callback-in-php
author: 'Maico Orazio'
excerpt: ''
type: post
id: 520
images: /static/images/posts/logo-php.webp
category:
  - PHP
tag:
  - callback
  - PHP
  - snippets
post_format: []
---

![PHP](/static/images/posts/logo-php.webp)

Una tecnica comunemente usata in programmazione è l’utilizzo delle **callback**. Una callback è una funzione che data come parametro ad un’altra funzione può essere richiamata nello svolgimento di quest’ultima.

In questo articolo vi mostrerò come **definire e richiamare callbacks in PHP**, e come può essere utile farne uso.

Supponiamo di avere uno script PHP che quando viene eseguito fa una ricerca del termine su diversi motori di ricerca. Il tutorial non vuole spiegherà come elaborare i risultati di ricerca, ma solo dimostrare come una callback può essere utile.

Implementare l’esempio sopra senza l’utilizzo di callback può essere simile al seguente codice:

```php
<?php
function searchBySearchEngine($term, $searchEngine) {
  $result = array();
  foreach ($searchEngine as $engine( {
    // ricerca termine per ciascun motore di ricerca
    $result[] = array(
      'search_engine' => $engine,
      'result' => 'risultati di ricerca'
    );
  }
  return $result;
}
$searchEngine = array('http://www.google.it', 'http://www.bing.com', 'http://it.yahoo.com', // altri...);
// inizio ricerca del termine sui motori di ricerca
$term = 'MaiNick';
$data = searchBySearchEngine($term, $searchEngine);
// output dei risultati
foreach ($data as $result) {
  echo "Risultati di ricerca di " . $term . " eseguita su " . $result['search_engine'] . "<br />";
}
?>
```

L’esempio può essere modificato per utilizzare la **funzione di callback**, richiamata ogni volta che un singolo motore di ricerca ha completato la ricerca.

Ci sono tre tipi di utilizzo di callback:

- una **funzione PHP** standard: passata come una stringa.
- un **metodo statico** di una classe: passato come un array in cui il primo elemento è il nome della classe e il secondo è il nome del metodo.
- un **metodo di un oggetto**: anch’esso passato come prima tramite array, dove il primo elemento è l’oggetto stesso.

Ecco il codice che illustra come definire ogni tipologia di callback:

```php
<?php
// 1 metodo
function myCallback() {
}
$callback = 'myCallback';

// 2 metodo
class MyClass {
  public static function myCallback() {
  }
}
$callback = array('MyClass', 'myCallback');

// 3 metodo
class MyClassObj {
  public function myCallback() {
  }
}
$obj = new MyClassObj();
$callback = array($obj, 'myCallback');
?>
```

Per verificare se una variabile può essere definita come una funzione, e quindi utilizzato come una callback, possiamo utilizzare `is_callable()`, una funzione PHP che accetta la callback come unico argomento. Quindi possiamo utilizzare la funzione `call_user_func()` che permette di **richiamare la funzione callback** passata come primo argomento e ulteriori argomenti passati come parametri alla callback stessa.

Tornando al nostro esempio iniziale, possiamo modificare la funzione `searchBySearchEngine` in modo che prenda come terzo argomento la callback, richiamata ogni volta che un motore di ricerca ha completato la sua ricerca.

```php
<?php
function searchBySearchEngine($term, $searchEngine, $callback = null) {
  $result = array();
  foreach ($searchEngine as $engine( {
    // ricerca termine per ciascun motore di ricerca
    if (is_callable($callback)) {
      $result = call_user_func($callback, $term, $searchEngine);
    }
  }
  return $result;
}

// classe fittizia utilizzate per la callback
class MyClass {
  public static function searchComplete($term, $searchEngine) {
    $values = array(
      'search_engine' => $engine,
      'result' => 'risultati di ricerca'
    );
    echo "Risultati di ricerca di $quot; . $term . " eseguita su " . $values['search_engine'] . "<br />";

    return $values;
  }
}
$searchEngine = array('http://www.google.it', 'http://www.bing.com', 'http://it.yahoo.com', // altri...);
// inizio ricerca del termine sui motori di ricerca
$term = 'MaiNick';
$data = searchBySearchEngine($term, $searchEngine, array('MyClass', 'searchComplete'));
?>
```

Potere notare che all’esecuzione del codice sopra i messaggi di feedback vengono visualizzati ogni qual volta un motore di ricerca ha restituito dei risultati, e non come nel primo codice al termine dello script.
