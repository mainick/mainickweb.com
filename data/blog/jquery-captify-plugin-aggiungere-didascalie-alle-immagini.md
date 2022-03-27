---
title: 'jQuery Captify Plugin: Aggiungere didascalie alle immagini'
date: '2009-12-15T08:00:06+01:00'
status: publish
permalink: /jquery-captify-plugin-aggiungere-didascalie-alle-immagini
author: 'Maico Orazio'
excerpt: ''
type: post
id: 307
images: /static/images/posts/captify1.jpg
category:
  - javascript
  - jQuery
tag:
  - javascript
  - jQuery
  - 'plugin jquery'
post_format: []
---

![captify.jpg](/static/images/posts/captify1.jpg 'Captify')

[**Captify**](https://ilhamar.com/js/captify/sample.html 'jQuery Captify Plugin') è un **plugin jQuery** in grado di visualizzare le **didascalie delle immagini** in modo alternativo al semplice rollover.

Funzionante in tutti i principali browser: Firefox, Chrome, Safari, Opera e tutte le versioni di Internet Explore.

Quello che differenzia Captify da tutti gli altri plugin che permettono lo stesso effetto è la **facilità d’uso** e la **leggerezza dello script di soli 2.3kb**.

# Opzioni

Il seguente script javascript inizializza il plugin con le opzioni personalizzabili:

```js
$(function () {
  $('img.captify').captify({
    // velocità dell'effetto mouseover
    speedOver: 'fast',
    // velocità dell'effetto mouseout
    speedOut: 'normal',
    // tempo nascondere la didascalia dopo mouseout (millisecondi)
    hideDelay: 500,
    // animazioni possibili: 'fade', 'slide', 'always-on'
    animation: 'slide',
    // text/html da inserire all'inizio di ogni didascalia
    prefix: '',
    // opacità della didascalia
    opacity: '0.7',
    // classe CSS da applicare al box della didascalia
    className: 'caption-bottom',
    // posizione della didascalia (top o bottom)
    position: 'bottom',
    // dimensione larghezza didascalia rispetto all'immagine (in %)
    spanWidth: '100%',
  })
})
```

# Utilizzo

Prima di tutto, se non l’avete già fatto, scaricate [Captify 1.1.3](https://ilhamar.com/js/captify/sample.html 'Codice sorgente Captify Plugin jQuery').

Inserite nell’intestazione (_&lt;head&gt;…&lt;/head&gt;_) del vostro documento il plugin, appena scaricato, e la [**libreria jQuery**](http://jquery.com 'Libreria jQuery'), seguiti dallo script illustrato sopra.

Inotre è necessario scrivere nel vostro foglio di stile le seguenti regole CSS riguardanti solo la visualizzazione della didascalia:

```css
.caption-top,
.caption-bottom {
  color: #ffffff;
  padding: 1.2em;
  font-weight: bold;
  font-size: 13px;
  font-family: arial;
  cursor: default;
  border: 0px solid #334143;
  background: #000000;
  text-shadow: 1px 1px 0 #202020;
}
.caption-top {
  border-width: 0px 0px 8px 0px;
}
.caption-bottom {
  border-width: 8px 0px 0px 0px;
}
.caption a,
.caption a {
  border: 0 none;
  text-decoration: none;
  background: #000000;
  padding: 0.3em;
}
.caption a:hover,
.caption a:hover {
  background: #202020;
}
.caption-wrapper {
  float: left;
}
br.c {
  clear: both;
}
```

Queste sono le uniche operazioni un pò più difficili da eseguire per l’**integrazione di Captify al vostro documento**, infatti per utilizzarlo sulle immagini bisogna seguire una dei seguenti metodi:

1. Utilizzando l’attributo _alt_:

```html
<img src="image.jpg" class="captify" alt="Testo didascalia" />
```

2. Inserire il testo della didascalia in un _div_ con id collegato all’attributo _rel_ dell’immagine:

```html
<img src="image.jpg" class="captify" rel="caption1" />
<div id="caption1">Testo didascalia</div>
```
