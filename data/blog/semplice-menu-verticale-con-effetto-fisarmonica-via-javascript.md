---
title: 'Semplice menu verticale con effetto fisarmonica via JavaScript!'
date: '2008-07-13T17:50:50+01:00'
status: publish
permalink: /semplice-menu-verticale-con-effetto-fisarmonica-via-javascript
author: 'Maico Orazio'
excerpt: ''
type: post
id: 12
images: /static/images/posts/simpleaccordions.jpg
category:
  - javascript
tag:
  - javascript
  - accordions
post_format: []
---

![Simple Accordions](/static/images/posts/simpleaccordions.jpg 'simpleAccordions')

Di effetti a fisarmonica in JavaScript ne sono stati creati moltissimi, ma quello che oggi vi voglio presentare ha una caratteristica molto importante per gli sviluppatori, è **leggerissimo**.

Uno JavaScript che vi permette di avere un **effetto fisarmonica sul menu o qualsiasi altro box dei vostri siti internet**. **La caratteristica fondamentale, come dicevo prima, è che pesa poco più di 1Kb**, questo rende lo script **più funzionale e veloce nel caricamento**.

Uno degli **accordion script più piccoli** ed estremamente semplice e facile da integrare. Non richiede alcun [framework](http://it.wikipedia.org/wiki/Framework 'Framework - Wikipedia') ed è completamente cross-browser compatibile.

La prima cosa da fare è quella di inserire il seguente codice JavaScript, all’interno della sezione &lt;head&gt; del vostro sito:

```html
<script type="text/javascript" src="js/accordian.pack.js"></script>
```

e inserire all’interno del tag &lt;body&gt; il seguente codice JavaScript per il controllo della fisarmonica e per caricare all’apertura della pagina lo script:

```html
<body onload="new Accordian('basic-accordian',5,'header_highlight');"></body>
```

che è nella forma:

```html
<body onload="new Accordian('id DIV container',velocità,'classe voce di fisarmonica');"></body>
```

Una volta inserito questo andremo a creare il nostro menu o box con il seguente codice:

```html
<div id="basic-accordian">
  <!--DIV Container Accordion-->
  <div>Simple Accordions</div>
  <!--Inizio voce di fisarmonica-->
  <div id="test-header" class="accordion_headings header_highlight">Home</div>
  <!--Voce della fisarmonica (clic per mostrare) -->
  <!--Prefisso della voce (il DIV di sopra) e del contenuto (il DIV al di sotto di questa) devono essere lo stesso ... ad es. foo-header &#038; foo-content-->
  <div id="test-content">
    <!--DIV che viene mostrato / nascosto facendo clic su voce di intestazione-->
    <div class="accordion_child">
      <!--Questo DIV è utilizzato come padding...-->
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc ligula nisl, egestas non,
      pharetra vel, scelerisque accumsan, lacus. Proin nibh. Aenean dapibus. Quisque facilisis,
      ligula ut blandit hendrerit, purus neque rhoncus ipsum, sit amet ultrices mauris augue non
      arcu. Donec et sem nec libero viverra accumsan.
    </div>
  </div>
  <!--Fine voce di fisarmonica-->
  <!--Inizio voce di fisarmonica-->
  <div id="test1-header" class="accordion_headings">
    <div id="test1-content">
      <div class="accordion_child">
        Quisque facilisis, ligula ut blandit hendrerit, purus neque rhoncus ipsum, sit amet ultrices
        mauris augue non arcu. Donec et sem nec libero viverra accumsan.
      </div>
    </div>
    <!--Fine voce di fisarmonica-->
    <!--Inizio voce di fisarmonica-->
    <div id="test1-header" class="accordion_headings">About Us</div>
    <div id="test1-content">
      <div class="accordion_child">
        Quisque facilisis, ligula ut blandit hendrerit, purus neque rhoncus ipsum, sit amet ultrices
        mauris augue non arcu. Donec et sem nec libero viverra accumsan.
      </div>
    </div>
    <!--Fine voce di fisarmonica-->
    <!--Iniziovoce di fisarmonica-->
    <div id="test2-header" class="accordion_headings">Downloads</div>
    <div id="test2-content">
      <div class="accordion_child">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc ligula nisl, egestas non,
        pharetra vel, scelerisque accumsan, lacus. Proin nibh. Aenean dapibus. Quisque facilisis,
        ligula ut blandit hendrerit, purus neque rhoncus ipsum, sit amet ultrices mauris augue non
        arcu. Donec et sem nec libero viverra accumsan.
      </div>
    </div>
    <!--Fine voce di fisarmonica-->
  </div>
  <!--Fine DIV Container Accordion-->
</div>
```

Terminate queste tre operazioni avremo un menu con effetto fisarmonica **leggero e funzionante al 100%**. Lo script è veramente comodo, un altro **effetto 2.0 da inserire sul nostro sito personale**.

Maggiori informazioni sullo script li troverete nel [**sito**](http://www.dezinerfolio.com/2007/07/19/simple-javascript-accordions/ 'Simple Javascript Accordions') dell’autore; è possibile vedere anche cosa fa lo script stesso andando alla pagina dedicata alle [**demo**](http://www.dezinerfolio.com/wp-content/uploads/accordemo/01.html 'Simple Javascript Accordions - demo').
