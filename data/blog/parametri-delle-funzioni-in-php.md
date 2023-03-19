---
title: 'Parametri delle funzioni in PHP'
date: '2023-03-20T07:30:09+01:00'
status: publish
permalink: /parametri-delle-funzioni-in-php
author: 'Maico Orazio'
excerpt: 'In questo articolo parleremo degli argomenti delle funzioni, valori predefiniti, unione di tipi, decompressione degli argomenti, passaggio per valore o riferimento e per finire, introdotto in PHP 8, argomenti denominati'
type: publish
id: 905
images: /static/images/posts/logo-php.webp
category:
  - PHP
tag:
  - appunti-dev
  - php
  - funzioni
post_format: []
---

![PHP](/static/images/posts/logo-php.webp)

In questo articolo parleremo degli **argomenti delle funzioni**, **valori predefiniti**, **unione di tipi**,
**decompressione degli argomenti**, **passaggio per valore o riferimento** e per finire, introdotto in PHP 8, **argomenti denominati**.

## Definire i parametri della funzione

Siamo in grado di definire i parametri della funzione all'interno delle parentesi della definizione della funzione.

```php
function foo($x, $y) 
{
	return $x * $y;
}
```

Quando chiamiamo la funzione `foo()` dobbiamo passare due argomenti.

```php
echo foo(5, 10); // 50
```

I **parametri sono le variabili riportate nella definizione della funzione**, mentre **gli argomenti sono i valori
effettivi che passiamo alla funzione** quando la invochiamo; nell'esempio sopra `$x` e `$y` sono i parametri della funzione
e `5` e `10` sono gli argomenti passati, ovvero i valori assegnati ai parametri della funzione `foo()`.

## Type Hinting

**Type Hinting** è una funzionalità introdotta da PHP a partire dalla versione 5, che consente di specificare il tipo
di oggetto/dato passato, come argomento, a una funzione o a un metodo.

Dalla versione 7 di PHP, in alternativa alla _weak mode_ (modalità debole) esiste la _strict mode_ (modalità rigorosa);
impostando questa modalità, forziamo PHP a interpretare la tipologia delle variabili,
nel caso non viene soddisfatta, otterremo un errore fatale.

Per cui, se, nell'esempio sopra, vogliamo essere più restrittivi e accettare solo il formato `int` e non altri, 
dovremo dichiararlo in testa al codice, tramite l'istruzione `declare` seguito da `strict_types=1`.

```php
declare(strict_types=1);

function foo(int $x, int $y) 
{
	return $x * $y;
}
```

Adesso se proviamo a passargli un argomento di tipo `float` o `string`, otterremo un errore.

```php
echo foo(5.0, '10');
// Fatal error: Uncaught TypeError: foo(): Argument #1 must be of type int, float given, called in ...
```

## Unione di tipi

Dalla versione 8 di PHP è possibile accettare più tipi di dati. Possiamo specificare l'**unione di tipi**,
attraverso il carattere `|`.

```php
declare(strict_types=1);

function foo(int|float $x, int|float $y) 
{
	return $x * $y;
}
echo foo(5.0, 10); // 50
```

In questo caso possiamo invocare la funzione `foo()` passando come argomenti sia numeri interi che decimali.

## Valori predefiniti

Per ogni parametro riportato nella definizione della funzione è necessario passare un argomento altrimenti otterremo un errore fatale.

```php
echo foo(5.0); 
// Fatal error: Uncaught ArgumentCountError: Too few arguments to function foo(), 1 passed in ...
```

È possibile impostare dei **valori predefiniti ai parametri** in modo da assegnare un valore nel caso non venga passato come argomento.

```php
declare(strict_types=1);

function foo(int|float $x, int|float $y = 10) 
{
	return $x * $y;
}
echo foo(5.0); // 50
```

È possibile assegnare array scalari e valori `null` come valori predefiniti, ma non una chiamata di funzione o un oggetto:
è necessario che sia un'espressione costante.

Altra cosa importante, i parametri facoltativi devono essere definiti dopo qualsiasi parametro obbligatorio.

## Passare argomenti per valore vs per riferimento

Per impostazione predefinita, gli argomenti dei **parametri richiesti sono passati per valore**.
È possibile specificare di **passare un argomento per riferimento** utilizzando il carattere `&` nella definizione del parametro.

Come esempio, definiamo una funzione `foo()` che accetta 2 argomenti e restituisce la moltiplicazione degli argomenti, 
se il primo argomento è un numero pari lo divide per 2.

```php
declare(strict_types=1);

function foo(int|float $x, int|float $y): int|float 
{
	if ($x % 2 === 2) {
		$x /= 2;
	}
	return $x * $y;
}

$a = 6.0
$b = 7;
echo foo($a, $b); // 21
var_dump($a, $b); // float(6) int(7)
```

Abbiamo detto che per impostazione predefinita gli argomenti vengono passati per valore, infatti,
la modifica del valore di `$x` (`$x /= 2;`), il primo argomento passato alla funzione,
non influisce sulla variabile originale `$a` che corrisponde ancora al valore `float(6)`.

Se cambiamo la definizione del primo argomento, passando il riferimento alla variabile `$a`, in questo caso la modifica
del parametro `$x` influisce anche sul valore della variabile originale `$a`.

```php
declare(strict_types=1);

function foo(int|float &$x, int|float $y): int|float 
{
	if ($x % 2 === 2) {
		$x /= 2;
	}
	return $x * $y;
}

$a = 6.0
$b = 7;
echo foo($a, $b); // 21
var_dump($a, $b); // float(3) int(7)
```

## Decompressione degli argomenti

Vogliamo definire una funzione che restituisce la somma di 2 o più argomenti. Possiamo cambiare la definizione
della funzione man mano che aggiungiamo un argomento oppure utilizzare l'**operatore spread** che catturerà in un array
qualsiasi argomento passato alla funzione.

```php
declare(strict_types=1);

function sum(...$numbers): int|float 
{
	$sum = 0;
	foreach ($numbers as $number) {
		$sum += $number;
	}
	return $sum;
	//return array_sum($numbers);
}

$a = 6.0
$b = 7;
echo sum($a, $b, 10, 25); // 48
```

È possibile utilizzare l'operatore spread anche dopo un numero fisso di parametri, nel qual caso solo gli argomenti
passati dopo quelli fissi saranno aggiunti all'array.

```php
declare(strict_types=1);

function sum(int|float &$x, int|float $y, ...$numbers): int|float 
{
	return $x + $y + array_sum($numbers);
}

$a = 6.0
$b = 7;
echo sum($a, $b, 10, 25); // 48
```

Nell'esempio sopra, `$x` e `$y` sono uguali rispettivamente a `6.0` e `7` e tutto il resto degli argomenti passati
alla funzione vengono catturati all'interno dell'array `$numbers`.

Possiamo specificare il tipo degli argomenti _extra_ passati alla funzione.

```php
declare(strict_types=1);

function sum(int|float &$x, int|float $y, int|float...$numbers): int|float 
{
	return $x + $y + array_sum($numbers);
}

$a = 6.0
$b = 7;
echo sum($a, $b, 10, 25, '8');
// Fatal error: Uncaught TypeError: sum(): Argument #5 must be of type int|float, string given, called in ...
```

In questo caso riceviamo un errore, perché l'ultimo argomento passato alla funzione è una stringa.

L'operatore spread puo' essere utilizzato anche per decomprimere un array nell'elenco degli argomenti da passare a una funzione.

```php
declare(strict_types=1);

function sum(int|float &$x, int|float $y, int|float...$numbers): int|float 
{
	return $x + $y + array_sum($numbers);
}

$a = 6.0
$b = 7;
$numbers = [10, 25, 8];
echo sum($a, $b, ...$numbers); // 56
```

## Argomenti denominati

In PHP 8.0 abbiamo la possibilità di specificare il nome dell'argomento da passare alla funzione, non considerando
l'ordine riportato nella definizione della funzione.

Definiamo una funzione dove se il primo parametro `$x` è divisibile per il secondo `$y` restituisce la loro divisione
altrimenti restituisce il valore di `$x`.

```php
declare(strict_types=1);

function foo(int &$x, int $y): int 
{
	if ($x % $y === 0) {
		return $x / $y;
	}
	return $x;
}

$a = 6
$b = 3;
echo foo($a, $b); // 2
```

Cosa succede se cambiamo l'ordine degli argomenti passati alla funzione?

```php
echo foo($b, $a); // 3
```

Otteniamo il valore di `$b` perché non più divisibili. Questa nuova funzionalità di PHP 8 consente effettivamente di
nominare l'argomento in modo da indicare il valore del relativo parametro dichiarato nella funzione indipendentemente
dall'ordine.

```php
echo foo(y: $b, x: $a); // 2
```

Questa funzionalità risulta molto utile in diversi casi d'uso, ad esempio, se vogliamo cambiare l'ordine della
definizione dei parametri dovremmo cercare in tutto il codice dove viene utilizzata la funzione e aggiornare l'ordine
di come passiamo gli argomenti. Con gli argomenti denominati non dobbiamo più preoccuparci di aggiornare le funzioni
esistenti perché l'ordine non ha importanza, tuttavia se cambiamo il nome di un parametro dovremmo comunque aggiornare
il nome in ogni parte del codice dove è utilizzato.

Un altro caso d'uso davvero valido è quando hai una serie di parametri che hanno valori predefiniti. Ad esempio PHP ha
una funzione chiamata `setcookie()` che ha molti parametri con valori predefiniti; se volessimo passare solo gli
argomenti `name` e l'ultimo, dovremmo passargli anche tutti gli altri definiti prima dell'ultimo.

```php
/*
firma del metodo
setcookie (
 string $name,
 string $value = "",
 int $expires = 0,
 string $path = "",
 string $domain = "",
 bool $secure = false,
 bool $httponly = false,
) : bool
*/

setcookie('test', '', 0, '', '', false, true);
// named arguments
setcookie(name: 'test', httponly: true);
```

Passando lo stesso argomento più volte otteniamo un errore perché sovrascrive l'argomento precedente.

```php
echo foo(x: $b, x: $a);
// Fatal error: Uncaught Error: Named parameter $x overwrites previous argoument in ...
```

È possibile combinare gli argomenti denominati con gli argomenti posizionali fintanto che gli argomenti denominati
vengano riportati dopo quelli posizionali.

```php
echo foo($a, y: $b); // 2
```

Passando di nuovo `x` va in conflitto perché abbiamo già un argomento per il parametro `$x`.

```php
echo foo($a, x: $b);
// Fatal error: Uncaught Error: Named parameter $x overwrites previous argoument in ...
```

Altra cosa da notare, se utilizziamo la decompressione degli argomenti e l'array contiene chiavi, quest'ultime saranno
trattate come nomi degli argomenti.

```php
$arr = ['y': 3, 'x' => 6];
echo foo(...$arr); // 2
```

> Buon lavoro 👨‍💻
