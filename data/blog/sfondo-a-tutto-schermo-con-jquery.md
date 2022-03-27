---
title: 'Sfondo a tutto schermo con jQuery'
date: '2009-12-07T08:00:45+01:00'
status: publish
permalink: /sfondo-a-tutto-schermo-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 295
images: /static/images/posts/supersized.jpg
category:
  - javascript
  - jQuery
  - Webdesign
tag:
  - javascript
  - 'galleria immagine'
  - jQuery
  - 'plugin jquery'
post_format: []
---

![supersized.jpg](/static/images/posts/supersized.jpg)

Inserire un’**immagine come sfondo a tutto schermo** di un layout web comporta realizzare diverse immagini di backgroud adatte ad ogni risoluzione dello schermo degli utenti.

Questo tipo di soluzione è possibile solo utilizzando un script Javascript che rilevi la risoluzione dello schermo dell’utente e richiami la corrispondente immagine.

Il **plugin jQuery** che presento oggi risolve il problema utilizzando un unico background di dimensioni fisse che verrà automaticamente **ridimensionato per riempire l’intero browser**, pur mantenendo il rapporto dimensione dell’immagine.

Altra caratteristica molto interessante, permette di realizzare una vero e proprio **slideshow di immagini**, con transazioni e preloading, come **sfondo del layout web**.

Il plugin in esame si chiama **Supersized**, potete vedere un [esempio di utilizzo](https://github.com/buildinternet/supersized 'Default settings w/ fade demo').

Il plugin è personalizzabile inizializzando le sue opzioni tramite i valori 1 _(attivo)_ e 0 _(non attivo)_):

- **startwidth, startheight:** dimensioni dell’immagine di sfondo utilizzati per calcolare il rapporto del ridimensionamento. Tutte le immagini dello slideshow devono avere la stessa risoluzione.
- **vertical_center:** valore 1 centra l’immagine verticalmente, altrimenti dall’angolo in alto a sinistra.
- **slideshow:** se attivo implementa lo slideshow.
- **navigation:** se attivo in caso di slideshow visualizza la barra di navigazione con i bottoni di play/pausa e avanti/indietro.
- **transition:** effetto di transazione nello slideshow. Gli effetti sono:
  - **0:** nessun effetto
  - **1:** effetto dissolvenza (default)
  - **2:** entrata dall’alto
  - **3:** entrata da destra
  - **4:** entrata dal basso
  - **5:** entrata da sinistra
- **pause_hover:** mette in pausa lo slideshow quando ci troviamo con il mouse sull’immagine.
- **slide_counter:** mostra il numero dell’immagine visualizzata nell’elemento con _id=”#slide_counter”._
- **slide_caption:** mostra il contenuto dell’attributo _alt_ nell’elemento con _id=”#slidecaption”._
- **slide_internal:** intervallo in millisecondi tra il cambio di immagine.

Il plugin jQuery è scaricabile dal repository dell’autore: [sfondo a tutto schermo con Supersized](https://github.com/buildinternet/supersized 'Supersized - Full Screen Background/Slideshow jQuery Plugin').
