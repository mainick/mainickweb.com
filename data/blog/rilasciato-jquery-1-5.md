---
title: 'Rilasciato jQuery 1.5'
date: '2011-02-01T11:26:28+01:00'
status: publish
permalink: /rilasciato-jquery-1-5
author: 'Maico Orazio'
excerpt: ''
type: post
id: 562
images: /static/images/posts/logo-jquery.jpg
category:
  - jQuery
tag:
  - javascript
  - jQuery
post_format: []
---

![jQuery 1.5](/static/images/posts/logo-jquery.jpg 'logo-jquery')

Rilasciata la **nuova versione jQuery 1.5**, con un [articolo](http://blog.jquery.com/2011/01/31/jquery-15-released/ 'Annuncio jQuery 1.5') il team annuncia la nuova release ufficiale della libreria javascript più utilizzata.

83 bug risolti e un totale di 460 tickets chiusi, con i 4.437 test **aumentata al compatibilità nei browser**, compreso il criticato IE6:

- Safari dalla 3.1.2 alla 5.0.3
- Opera dalla 9.64 alla 11.01
- IE 6 – 7 – 8
- Firefox dalla 2 alla 4.0b9
- Chrome dalla 8 alla 10 per i developer

Il più grande cambiamento in questa versione è la completa **riscrittura del modulo Ajax**. Ora una chiamata a `jQuery.ajax` (o `jQuery.post`, `jQuery.get`, etc) restituisce un [oggetto jXHR](http://api.jquery.com/jQuery.ajax/ 'Documentazione jQuery.ajax()') che fornisce consistenza all’oggetto `XMLHttpRequest` con tutte le proprietà, metodi e comportamenti dell’oggetto secondo lo standard:

- `readyState`
- `status`
- `statusText`
- `responseXML` o `responseText` quando la richiesta risponde con XML o semplice testo
- `setRequestHeader(name, value)` che non sostituisce il valore precedente con quello nuovo, piuttosto concatena il nuovo al vecchio
- `getAllResponseHeaders()`
- `getResponseHeader()`
- `abort()`

In questa release sono state **migliorate anche le prestazioni di alcuni metodi** come `.children()`, `.prev()` e `.next()`, molto evidente nei browser che utilizzano il motore di WebKit.
