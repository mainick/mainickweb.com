---
title: 'Colonne adattabili a layout liquido con CSS e jQuery'
date: '2009-12-18T13:00:31+01:00'
status: publish
permalink: /colonne-adattabili-a-layout-liquido-con-css-e-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 334
images: /static/images/posts/smart-columns.jpg
category:
  - CSS
  - javascript
  - jQuery
  - Webdesign
tag:
  - javascript
  - CSS
  - jQuery
  - layout
  - 'layout liquid'
post_format: []
---

![smart-columns.jpg](/static/images/posts/smart-columns.jpg)

Twittando mi sono ritrovato a leggere un post che analizzava il problema di avere un layout costituito da **colonne “liquid” adattabile alle dimensioni della finestra del browser**.

In un layout fisso imposteremo una dimensione fissa per ogni colonna, occuperemo tutta la larghezza della pagina; ma ad un certo limite, l’ultima colonna non sarà in grado di adattarsi allo spazio rimanente, andando a capo lascierà un margine di spazio vuoto.

![fixedsample.gif](/static/images/posts/fixedsample.gif)

Invece, in un layout liquido le colonne riempiranno perfettamente l’intero spazio della pagina in qualsiasi caso, ma ci troveremo ad avere un numero predefinito di colonne su singola riga.

![liquidsample.gif](/static/images/posts/liquidsample.gif)

La soluzione trovata dall’autore è stata quella di unire insieme le caratteristiche dei due loyout tramite l’**utilizzo di CSS e jQuery**.

Abbiamo un codice html di base per l’esempio:

```html
<ul class="column">
  <!--Voce elenco colonna-->
  <li>
    <div class="block">
      <!--Contenuto colonna-->
    </div>
  </li>
  <!--Inserire altre colonne-->
</ul>
```

Codice CSS del foglio di stile collegato all’esempio:

```css
ul.column {
  width: 100%; /*layout liquido*/
  margin: 10px 0;
  padding: 0;
  list-style: none;
}
ul.column li {
  float: left;
  display: inline;
  width: 200px; /*larghezza predefinita per ogni colonna*/
  margin: 5px 0;
  padding: 0;
}
.block {
  height: 355px;
  margin-right: 10px; /*margine tra ogni colonna*/
  padding: 20px;
  background: #e3e1d5;
  font-size: 1em;
}
.block img {
  /*Dimensioni flessibili per l'immagine interna alla colonna*/
  display: block;
  width: 89%; /*1% in meno per prevenire un bug in IE6*/
  margin: 0 auto;
  padding: 5%;
  background-color: #fff;
  -ms-interpolation-mode: bicubic; /*prevents image pixelation for IE 6/7 */
}
```

diamo dimensione _100%_ al layout per coprire l’intero spazio della pagina, mentre una dimensione fissa predefinita per le colonne in modo da risolvere il secondo dei due problemi descritti: in caso di colonne liquidi avremo un numero predefinito su singola riga.

Ecco lo **script jQuery** che risolve il primo dei problemi:

```js
//Funzione che calcola la dimensione da applicare alle colonne
function smartColumns() {
  //Resetto dimensione colonne all'intera pagina 100%
  $('ul.column').css({ width: '100%' })
  var colWrap = $('ul.column').width() //larghezza riga
  //Numero di colonne di 200px che vanno bene nell'attuale larghezza della pagina
  var colNum = Math.floor(colWrap / 200)
  //Dividendo la larghezza della pagina per il numero di colonne che possono andare bene,
  //otteniamo come numero intero la larghezza perfetta da assegnare a ciascuna colonna
  var colFixed = Math.floor(colWrap / colNum)
  $('ul.column').css({ width: colWrap }) //Risolve bug in qualche browser
  $('ul.column li').css({ width: colFixed }) //Imposto la nuova larghezza alle colonne
}
smartColumns() //Esegue la funzione quando si carica la pagina la prima volta
$(window).resize(function () {
  //Ogni volta che la finestra &egrave; ridimensionata si esegue la funzione
  smartColumns()
})
```

Come realizza il tutto è descritto nei commenti dello script.
