---
title: 'Effetto Growl con jQuery'
date: '2009-12-07T14:00:49+01:00'
status: publish
permalink: /effetto-growl-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 299
images: /static/images/posts/Gritter.jpg
category:
  - javascript
  - jQuery
  - Webdesign
tag:
  - javascript
  - growl
  - jQuery
  - 'plugin jquery'
post_format: []
---

![Gritter.jpg](/static/images/posts/Gritter.jpg 'Gritter plugin jQuery')

Uno dei primi software che ho installato dopo l’acquisto del MacBook Pro è stato **Growl**, un’applicazione che intercetta i messaggi generati dai vari software presenti nel sistema e li mostra sullo schermo in modo semplice e sicuramente **di effetto**.

Il **plugin jQuery** di cui parlo oggi si ispira all’applicazione descritta sopra: con **Gritter** è possibile realizzare lo stesso effetto, una soluzione molto carina per **generare notifiche** di messaggi all’interno dei propri siti web.

## Utilizzo

Generare una semplice notifica con solo testo:

```js
$.gritter.add({
  // (obbligatorio) titolo della notifica
  title: 'Titolo della notifica',
  // (obbligatorio) testo della notifica
  text: 'Messaggio di notifica',
})
```

oppure una notifica più complessa:

```js
$.gritter.add({
  // (obbligatorio) titolo della notifica
  title: 'Titolo della notifica',
  // (obbligatorio) testo della notifica
  text: 'Messaggio di notifica',
  // immagine a sinistra
  image: 'url immagine',
  // tempo chiusura notifica in millisecondi
  time: 5000,
  // classe da applicare per lo stile personalizzato
  class_name: 'my-class',
  // funzione chiamata prima che si apre
  before_open: function(){}
  // funzione chiamata dopo che si è aperta
  after_open: function(e){}
  // funzione chiamata prima che si chiude
  before_close: function(e){}
  // funzione chiamata dopo che si è chiusa
  after_close: function(){}
});
```

## Opzioni

All’interno dell’intestazione _&lt;head&gt;..&lt;/head&gt;_ dopo aver richiamato il plugin possiamo inizializzarlo con opzioni globali per tutte le notifiche della pagina web:

```js
$.extend($.gritter.options, {
  // velocità visualizzazione notifica (stringa o millisecondi)
  fade_in_speed: 'medium',
  // velocità chiusura notifica (stringa o millisecondi)
  fade_out_speed: 3000,
  // tempo visualizzato sullo schermo
  time: 5000,
})
```

## Progetto

Sul [repository dell’autore](https://github.com/jboesch/Gritter 'Gritter plugin jQuery (Growl)') potete scaricare il plugin e vedere le altre opzioni.
