---
title: 'Angoli arrotondati con jQuery'
date: '2008-11-17T07:30:09+01:00'
status: publish
permalink: /angoli-arrotondati-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 226
category:
  - jQuery
tag:
  - javascript
  - jQuery
  - 'plugin jquery'
post_format: []
---

Dopo l’uso di tanti script per creare l’**effetto arrotondato ad angoli**, ho trovato questo plugin di jQuery che mi ricrea lo stesso effetto senza l’utilizzo di immagini o margini.

Compatibile con i maggiori browser, anche i più datati, il plugin [**jQuery Corners**](http://www.atblabs.com/jquery.corners.html 'jQuery Corners') è cartterizzato dalle seguenti features:

- pesa meno di 8000 bytes dopo la compressione effettuata con [YUI Compressor](http://developer.yahoo.com/yui/compressor/ 'Yahoo UI Compressor')
- anti-aliasing veloce per i browser più anziani
- **angoli nativi** per browser utilizzati su Safari, iPhone e Firefox 3
- tasti dei moduli e ancore facilmente designati e arrotondati

Una volta che jQuery e lo script **jQuery.corners** vengono caricati, è semplice creare gli **angoli arrotondati**:

```html
<div style="background-color:#c00; padding:5px;" class="rounded">Esempio div</div>
<script type="text/javascript">
  $(document).ready(function () {
    $('.rounded').corners()
  })
</script>
```

l’unica raccomandazione è dare abbastanza riempimento al box, poi è possibile anche impostare il raggio d’angolo:

```html
<div style="background-color:#acc; padding:10px" class="rounded">
  Esempio con raggio X e Y con dimensioni diverse.
</div>
<script type="text/javascript">
  $(document).ready(function () {
    $('.rounded').corners('30px 10px')
  })
</script>
```

Per quanto riguarda i bottoni nei moduli e le ancore possono essere trasformati in pulsanti con angoli arrotondati:

```html
<a href="javascript:" onclick="alert('Hello, World!')" class="{transparent} button rounded">
  Premere
</a>
<form action="#">
  <input type="submit" value="Submit" class="{transparent} button rounded" />
  <input
    type="button"
    value="Javascript"
    class="{transparent} button rounded"
    onclick="alert('OK!'); return false;"
  />
</form>
```

richiedono regole CSS

```css
a.rounded,
.button {
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: middle; /* or top */
  display: -moz-inline-box;
  display: inline-block;
  overflow: visible; /* IE6 form button fix */
}
.button {
  color: #000;
  background-color: #c00;
  padding: 5px 7px;
}
.button:hover {
  background-color: #c00;
}
```

E’ possibile personalizzare lo script con opzioni passate come stringhe:

- **5px** – imposta raggio dell’angolo (di default è 5)
- **10px 6px** – imposta raggio X e Y con valori diversi
- **anti-alias** – angoli anti-alias (di defaut)
- **transparent** – per immagini di sfondo utilizzare qusta opzione
- **no-native** – disabilita tutte le estensioni border-radius specifiche per i diversi browser
- **webkit** – consente l’uso di -webkit-border-radius compatibile con i browser Safari e iPhone
- **mozilla** – consente l’uso di -moz-border-radius su Firefox 3+ e altri browser basati su Mozilla
- **top, right, bottom, left, top-left, top-right, bottom-left, bottom-right** – applica effetto solo su specifici angoli
