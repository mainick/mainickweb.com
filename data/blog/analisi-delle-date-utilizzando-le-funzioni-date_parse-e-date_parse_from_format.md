---
title: 'Analisi delle date utilizzando le funzioni `date_parse()` e `date_parse_from_format()`'
date: '2023-02-20T07:30:09+01:00'
status: draft
permalink: /analisi-delle-date-utilizzando-le-funzioni-date_parse-e-date_parse_from_format
author: 'Maico Orazio'
excerpt: ''
type: post
id: 910
images: /static/images/posts/logo-php.webp
category:
  - PHP
tag:
  - appunti-dev
  - php
  - date
post_format: []
---

![PHP](/static/images/posts/logo-php.webp)

La **funzione `date_parse()`** viene utilizzata per ottenere informazioni dettagliate su una data specifica.

Questa funzione restituisce un array associativo contenente maggiori dettagli sulla data analizzata,
altrimenti restituisce `false` in caso di errore.
Accetta un solo argomento che specifica la data in un formato accettato dalla funzione `strtotime()`.

```php
$date_parsed = date_parse('2023-02-20T07:30:09+02:00');
print_r($date_parsed);
```

L'esempio riportato sopra restituisce le seguenti informazioni:

```shell
Array
(
    [year] => 2023
    [month] => 2
    [day] => 20
    [hour] => 7
    [minute] => 30
    [second] => 9
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array
        (
        )

    [error_count] => 0
    [errors] => Array
        (
        )

    [is_localtime] => 1
    [zone_type] => 1
    [zone] => 7200
    [is_dst] =>
)
```

Possiamo effettuare un'analisi della data partendo da un formato specifico.
La **funzione `date_parse_from_format()`** viene utilizzata per ottenere informazioni dettagliate sulla data specificata
formattata in base al formato specificato.

La funzione `date_parse_from_format()` accetta come primo argomento una stringa di formato e poi la data specificata e
restituisce, come `date_parse()`, un array associativo di informazioni dettagliate sulla data specificata nel formato specificato,
altrimenti restituisce `false` in caso di errore.

```php
$date_parsed = date_parse_from_format('d/m/Y H:i:s T', '20/02/2023 07:30:09 Europe/Rome');
print_r($date_parsed);
```

L'esempio riportato sopra restituisce le seguenti informazioni:

```shell
Array
(
    [year] => 2023
    [month] => 2
    [day] => 20
    [hour] => 7
    [minute] => 30
    [second] => 9
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array
        (
        )

    [error_count] => 0
    [errors] => Array
        (
        )

    [is_localtime] => 1
    [zone_type] => 3
    [tz_id] => Europe/Rome
)
```

Se proviamo a indicargli un formato errato, otteniamo un risultato sbagliato dove sono riportati anche i relativi errori in `errors`.

```php
$date_parsed =  date_parse_from_format('Y-m-d H:i:s T', '20/02/2023 07:30:09 Europe/Rome');
print_r($date_parsed);
```

```shell
Array
(
    [year] => 20
    [month] => 2
    [day] => 20
    [hour] => 23
    [minute] => 7
    [second] => 30
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array
        (
        )

    [error_count] => 8
    [errors] => Array
        (
            [2] => Unexpected data found.
            [5] => Unexpected data found.
            [10] => Unexpected data found.
            [16] => The timezone could not be found in the database
            [19] => Trailing data
        )

    [is_localtime] => 1
    [zone_type] => 0
)
```

> Buona lavoro 👨‍💻
