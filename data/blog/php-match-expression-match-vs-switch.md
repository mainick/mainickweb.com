---
title: 'PHP Match Expression - Match vs Switch'
date: '2023-02-06T07:30:09+01:00'
status: draft
permalink: /php-match-expression-match-vs-switch
author: 'Maico Orazio'
excerpt: ''
type: post
id: 900
images: /static/images/posts/logo-php.webp
category:
  - PHP
tag:
  - appunti-dev
  - php
  - match
  - switch
post_format: []
---

![PHP](/static/images/posts/logo-php.webp)

L'espressione di corrispondenza **Match** è praticamente la stessa dell'istruzione Switch ed è stata introdotta in PHP 8.
La parola chiave è `match`, quindi ricreiamo l'istruzione `switch` riportata sotto:

```php
$paymentStatus = 1;

switch ($paymentStatus) {
	case 1:
		echo 'Paid';
		break;

	case 2:
	case 3:
		echo 'Payment Declined';
		break;

	case 0:
		echo 'Pending Payment';
		break;

	default:
		echo 'Unknown Payment Status';
		break;
}
```

All'interno delle parentesi graffe forniamo coppie di valori dove la chiave è la singola espressione condizionale e
il valore è l'espressione di ritorno.

```php
$paymentStatusDisplay = match ($paymentStatus) {
	1 => 'Paid',
	2,3 => 'Payment Declined',
	0 => 'Pending Payment',
	default => 'Unknown Payment Status',
};
echo $paymentStatusDisplay;
```

Parliamo delle differerenze.

La prima differenza è che l'espressione di corrispondenza è in realta' un'espressione e valuta un valore e
quindi puo' essere assegnata a una variabile. Puo' essere praticamente qualsiasi tipo di espressione,
ad esempio potresti avere una funzione che restituisce un valore.
La seconda differenza è che all'interno dell'istruzione `switch` ha necessita' di utilizzare `break` per evitare
alcuni risultati inaspettati, perché, senza l'istruzione `break`, saranno valutati anche gli altri `case`.
L'istruzione `match` restituira' solo un valore una volta trovata la corrispondenza.

La terza differenza è che nell'istruzione `switch` il valore predefinito non è richiesto, mentre viene generato
un errore fatale se in `match` non viene trovata la relativa corrispondenza in uno dei casi riportati e
non viene specificato il valore predefinito.

La quarta differenza è che l'espressione di corrispondenza esegue un confronto rigoroso mentre l'istruzione `switch`
esegue il confronto libero. Entrambi i lati sono espressioni e potremmo avere espressioni complesse, chiamate di funzioni,
operatori logici da utilizzare in una espressione condizionale.

```php
$paymentStatus = false;
// switch print 'Pending Payment'
// match print 'Unknown Payment Status'
```

Una cosa da notare è che l'espressione `match` non fara' deprecare l'istruzione `switch` in quanto ha ancora i suoi casi d'uso;
ad esempio, `match` restituisce un valore trovata la corrispondenza, con `switch` puoi eseguire più istruzioni.

> Buona lavoro 👨‍💻
