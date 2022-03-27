---
title: 'Effetto newsticker con jQuery'
date: '2009-12-17T10:29:39+01:00'
status: publish
permalink: /effetto-newsticker-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 320
category:
  - javascript
  - jQuery
  - Webdesign
tag:
  - jQuery
  - 'news a scorrimento'
  - newsticker
  - 'plugin jquery'
post_format: []
---

Con questo piccolo articolo voglio illustrare un modo per visualizzare le notizie recenti con [**liScroll**](http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html 'liScroll (a jQuery News Ticker made easy)'), un plugin per jQuery che trasforma qualsiasi elenco non ordinato _ul_ in un **news ticker a scorrimento**.

Con il termine _“newsticker”_ si vuole intendere un box in cui si possono leggere le **ultime notizie con effetto scorrimento** tipico dei siti di informazione giornalistica

# Utilizzo

Tutto ciò che serve per costruire il vostro box news ticker è una lista non ordinata che come attributo ha un _id_ univoco:

```html
<ul id="newsticker01">
  <li>
    <span>16/12/2009</span
    ><a
      href="http://www.mainickweb.com/crea-tooltip-su-link-e-immagini-in-modo-semplice-con-jquery/"
      >Crea tooltip su link e immagini in modo semplice con jQuery</a
    >
  </li>
  <li>
    <span>15/12/2009</span
    ><a href="http://www.mainickweb.com/jquery-captify-plugin-aggiungere-didascalie-alle-immagini/"
      >jQuery Captify Plugin: Aggiungere didascalie alle immagini</a
    >
  </li>
  <li>
    <span>07/12/2009</span
    ><a href="http://www.mainickweb.com/effetto-growl-con-jquery/">Effetto Growl con jQuery</a>
  </li>
  <li>
    <span>07/12/2009</span
    ><a href="http://www.mainickweb.com/sfondo-a-tutto-schermo-con-jquery/"
      >Sfondo a tutto schermo con jQuery</a
    >
  </li>
  <li>
    <span>09/10/2009</span
    ><a href="http://www.mainickweb.com/crea-una-classifica-mp3-musicale-con-jquery/"
      >Crea una classifica mp3 musicale con jQuery</a
    >
  </li>
</ul>
```

Per realizzare l’effetto bisogna collegare alla vostra pagina web, come sempre, la **libreria jQuery**, il plugin liScroll e il seguente semplice codice javascript:

```js
$(function () {
  $('ul#newsticker01').liScroll()
})
```

# Opzioni

L’unica opzione personalizzabile di questo plugin jQuery è la velocità:

```js
$(function () {
  $('ul#newsticker01').liScroll({ travelocity: 0.15 })
})
```

modificando il valore del parametro _travelocity_.

Sul [pagina dedicata](http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html 'liScroll (a jQuery News Ticker made easy)') a **liScroll plugin jQuery** sono disponibili demo e script.
