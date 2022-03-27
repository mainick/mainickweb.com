---
title: 'Semplici espressioni regolari'
date: '2011-12-12T07:30:53+01:00'
status: publish
permalink: /semplici-espressioni-regolari
author: 'Maico Orazio'
excerpt: ''
type: post
id: 738
images: /static/images/posts/regular-expressions.jpg
category:
  - snippets
tag:
  - snippets
  - 'regular expressions'
post_format: []
---

![](/static/images/posts/regular-expressions.jpg 'regular expressions')

Le **espressioni regolari** sono delimitate, di solito un carattere barra /, e queste contengono un modello che descrive una stringa.

Di seguito alcuni semplici esempi:

- `/c[ao]sa/` : corrisponde a “casa” e a “cosa”

un’espressione che descrive qualcosa che contiene la lettera “c”, seguita da qualsiasi delle vocali “a” o “o”, seguito dalle lettere “sa”.

Per indicare un intervallo di caratteri:

- `/[0-9a-f]*/` : tutti valori esadecimale
- `/[0-9a-zA-Z]/` : corrisponde a tutte le stringhe alfanumeriche
- `/./` : il punto corrisponde a qualsiasi carattere
- `/\./` : si si vuole far corrispondere realmente un punto

cercare un punto, ad esempio in nome a dominio, è necessario farlo precedere da un backslash.

Il quantificatore va messo dopo il carattere (o intervallo di caratteri) per indicare il **numero di occorrenze** che ci dovrebbero essere. E’ possibile dare numeri precisi o utilizzare altri caratteri come:

- /ab{2}/ : corrisponde ad un stringa che contiene due caratteri “b” di seguito, ad esempio “abb”
- /ab{2,5}/ : corrisponde ad una stringa che contiene minimo 2 caratteri “b” e massimo 5, ad esempio “abb”, “abbb”, “abbbb” e “abbbbb”
- “?” : 0 o 1 occorrenza
- “+” : 1 o più occorrenze
- “\*” : 0 o più occorrenze

si noti che nei casi in cui indichiamo il numero di occorrenze massimo dobbiamo sempre specificare anche il numero di occorrenze minimo.

Facciamo un esempio:

- `/c[ao]+sa/` : corrisponde a “casa” e a “cosa”, ma anche a “caasa”, “cooosa”, etc.

C’è anche il simbolo `|`, che ha lo stesso significato dell’operatore OR:

- `/Ciao|ciao/` : corrisponde alla stringa “Ciao” oppure “ciao”.

Possiamo anche delimitare i modelli ad inizio e fine delle stringhe usando rispettivamente “^” e “$”:

- `/^c[ao]sa/` : corrisponde a “casa” ma non a “andare a casa”.

Se non ricordiamo tutte le regole per costruirci i nostri modelli di espressioni regolari possiamo utilizzare uno dei tanti [cheat sheet stampabili](http://www.addedbytes.com/cheat-sheets/regular-expressions-cheat-sheet/ 'Regular Expressions Cheat Sheet (V2)') che si trovano in rete.
