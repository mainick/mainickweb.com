---
title: 'Xdebug: debugging e profiling delle applicazioni PHP'
date: '2011-02-17T16:18:41+01:00'
status: publish
permalink: /xdebug-debugging-e-profiling-delle-applicazioni-php
author: 'Maico Orazio'
excerpt: ''
type: post
id: 578
images: /static/images/posts/xdebug-logo.png
category:
  - PHP
tag:
  - snippets
  - xdebug
post_format: []
---

![Xdebug estensione per il debug degli scripts PHP](/static/images/posts/xdebug-logo.png 'Xdebug')

[Xdebug](http://xdebug.org/) è un’estensione PHP gratuita e open source che **permette il debugging e il profiling degli script PHP** in dettaglio.

Considerando che è una estensione, l’utilizzo è facile e richiede **pochissime configurazione** per integrarlo nelle nostre applicazioni.  
Xdebug ti aiuta fornendo molte informazioni utili di debug:

- tracce di funzioni e di **stack delle variabili** nei messaggi di errore con la completa **visualizzazione dei parametri delle funzioni definite dall’utente**, il nome della funzione, il nome del file e il numero di linea nel codice in cui si è verificato l’errore.
- **allocazione di memoria**
- protezione da cicli infiniti

Inoltre fornisce informazioni di profiling, un potente strumento che analizza il codice PHP e **determina i colli di bottiglia** o in generale **individua le parti del codice più lente**, analisi del code coverage ed ha la capacità di eseguire il debug in modo interattivo attraverso un interfaccia da browser, tramite estensioni per i browser di interagire con l’esecuzione degli scripts PHP.
