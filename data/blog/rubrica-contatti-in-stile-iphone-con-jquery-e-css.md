---
title: 'Rubrica contatti in stile iPhone con jQuery e CSS'
date: '2010-06-02T08:00:58+01:00'
status: publish
permalink: /rubrica-contatti-in-stile-iphone-con-jquery-e-css
author: 'Maico Orazio'
excerpt: ''
type: post
id: 448
images: /static/images/posts/slidernav.jpg
category:
  - Creatività
  - javascript
  - jQuery
tag:
  - javascript
  - 'app contatti iphone'
  - CSS
  - jQuery
  - 'lista contatti'
  - 'rubrica contatti'
  - SliderNav
post_format: []
---

![slidernav.jpg](/static/images/posts/slidernav.jpg)

**SliderNav** è un plugin per jQuery che permette di **scorrere una lista dinamica mediante una barra di navigazione verticale**, costituita da indici. L’autore prende ispirazione dalla rabrica telefonica dell’iPhone, infatti è realizzato principalmente per un elenco alfabetico, ad esempio una rubrica di contatti, ma può essere utilizzato per qualsiasi cosa.

Il plugin aggiunge automaticamente la barra di navigazione e imposta l’altezza per la lista in base a quanto è alta la barra. E’ possibile scorrere il contenuto della lista utilizzando la rotellina del mouse.

## Utilizzo

SliderNav è semplice da far funzionare, ma prima nell’intestazione `head` della nostra pagina HTML dobbiamo richiamare la **libreria jQuery** (dai server di Google), includere il plugin e il foglio di stile CSS associato:

```html
<link rel="stylesheet" type="text/css" href="slidernav.css" media="screen, projection" />
<script
  type="text/javascript"
  src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"
></script>
<script type="text/javascript" src="slidernav.js"></script>
```

Aggiungiamo il codice HTML che crea la nostra lista di contatti utilizzando la struttura seguente:

```html
<div id="slider">
  <div class="slider-content">
    <ul>
      <li id="a">
        <a name="a" class="title">A</a>
        <ul>
          <li><a href="/">Adam</a></li>
          <li><a href="/">Alex</a></li>
          <li><a href="/">Ali</a></li>
          <li><a href="/">Apple</a></li>
          <li><a href="/">Arthur</a></li>
          <li><a href="/">Ashley</a></li>
        </ul>
      </li>
      <li id="b">
        <a name="b" class="title">B</a>
        <ul>
          <li><a href="/">Barry</a></li>
          <li><a href="/">Becky</a></li>
          <li><a href="/">Biff</a></li>
          <li><a href="/">Billy</a></li>
          <li><a href="/">Bozarking</a></li>
          <li><a href="/">Bryan</a></li>
        </ul>
      </li>
      etc...
    </ul>
  </div>
</div>
```

Una volta impostato l’intera lista, è semplicemente una questione di chiamare la funzione `sliderNav` sull’elemento che abbiamo appena creato:

```html
<script type="text/javascript">
$(document).ready(function(){
  $('#slider').sliderNav();
});
```

il codice sopra è da scrivere nell’intestazione `head` della nostra pagina HTML, dopo aver richiamato il plugin.

## Opzioni

E’ possibile inizializzare il plugin modificando le impostazioni predefinite in base alle proprie esigenze:

- **height**: impostare questo valore in pixel se si vuole evitare il rilevamento automatico basato sull’altezza della barra di navigazione verticale.
- **items**: per default il plugin genera la navigazione in ordine alfabetico utilizzando tutte le 26 lettere dell’alfabeto inglese, ma è possibile inizializzarlo utilizzando delle **voci personalizzate**.
- **arrows**: il plugin visualizza delle frecce di scorrimento sulla lista, utili per gli utenti che non dispongono di un mouse con rotellina; i valori possibili di tipo booleano sono `true` (visualizza) o `false` (nasconde).

Ecco il codice per inizializzare il plugin, da sostituire a quello semplice:

```js
$(document).ready(function () {
  $('#slider').sliderNav({
    items: ['voce1', 'voce2', 'voce3'],
    height: '200',
    arrows: false,
  })
})
```

## Conclusioni

SliderNav, come ci consiglia lo stesso autore, può tornare utile principalmente quando vogliamo mostrare molte informazioni in un piccolo box organizzate con un ordine alfabetico (o per data).  
Sulla [pagina dedicata al plugin SliderNav](http://devgrow.com/slidernav/ 'SliderNav plugin per jQuery') è possibile scaricare il codice, [visualizzare la demo](http://devgrow.com/slidernav-jquery-plugin/ 'Demo SliderNav') e ottenere ulteriori aggiornamenti.
