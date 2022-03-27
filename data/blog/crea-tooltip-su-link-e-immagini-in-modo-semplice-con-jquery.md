---
title: 'Crea tooltip su link e immagini in modo semplice con jQuery'
date: '2009-12-16T13:00:23+01:00'
status: publish
permalink: /crea-tooltip-su-link-e-immagini-in-modo-semplice-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 315
images: /static/images/posts/sticky_tooltip.jpg
category:
  - javascript
  - jQuery
  - Webdesign
tag:
  - javascript
  - jQuery
  - 'plugin jquery'
  - tooltip
post_format: []
---

![sticky_tooltip.jpg](/static/images/posts/sticky_tooltip.jpg)

[**Sticky Tooltip**](http://www.dynamicdrive.com/dynamicindex5/stickytooltip.htm 'Sticky Tooltip plugin jQuery') è un plugin jQuery che permette di **aggiungere un tooltip**, azione di passaggio del mouse sopra l’elemento, contenente ulteriore codice HTML.

In generale il tooltip segue il cursore che si muove sull’area occupata dall’elemento, una caratteristica importante di questo plugin è che il suggerimento può essere mantenuto fisso, **visibile**, sullo schermo facendo click con il _pulsante destro del mouse_ oppure premendo il tasto _S_ sulla tastiera, qualora l’utente voglia interagire con il **contenuto del tooltip**.

Come detto, il contenuto di ogni suggerimento può essere definito come **normale codice HTML**, dunque molto facile da definire e personalizzare.

# Utilizzo

Inserire nella sezione _&lt;head&gt;_ del vostro documento il seguente codice:

```html
<link rel="stylesheet" type="text/css" href="stickytooltip.css" />
<script
  type="text/javascript"
  src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"
></script>
<script type="text/javascript" src="stickytooltip.js"></script>
```

carichiamo la libreria jQuery dai server di Google e il plugin in esame, con il foglio di stile correlato.

Creiamo dei link di esempio su sui attivare i tooltip:

```html
<p><a href="http://www.google.it/" data-tooltip="sticky1">Google Italy</a></p>
<p><a href="http://www.apple.com/it/" data-tooltip="sticky2">Apple Italy</a></p>
<p><img src="http://www.mainickweb.com/logo.jpg" data-tooltip="sticky3" /></p>
```

i link e le immagini su cui vogliamo far visualizzare i tooltip devono avere come attributo _data-tooltip_ e valore il nome o identificato del box dove andremo a definire il contenuto del tooltip.

Tutti i suggerimenti della pagina devono essere definiti all’interno di un _div_ con _attributo id univoco_ specificato nel codice sopra. A loro volta tutti questi suggerimenti devono essere definiti all’interno di un unico _div_ con classe _stickytooltip_ da non cambiare.

# Opzioni

Possiamo personalizzare a nostro piacimento il **plugin Sticky Tooltip** impostando alcune variabili nel codice dello script _stickytooltip.js_:

- **tooltipoffsets: \[20, -30\]** : posizione x,y del tooltip dal cursore del mouse.
- **fadeinspeed: 200** : durata effetto dissolvenza (millisecondi).
- **rightclickstick: true** – rendere fisso il tooltip sulla pagina.
- **stickybordercolors: \[black, darkred\]** – colore bordo del tooltip a seconda dello stato (sciolto, fisso).
- **stickynotice1: \[Premere \\s\\, o click destro, per fissare\]** – messaggio stato sciolto.
- **tickynotice2: Click fuori da questo box per nasconderlo** – messaggio stato fisso.

Sviluppato da Dynamic Drive, **Sticky Tooltip plugin jQuery** è disponibile con ulteriori informazioni, demo e script sulla [pagina del progetto](http://www.dynamicdrive.com/dynamicindex5/stickytooltip.htm 'Dynamic Drive DHTML Scripts- Sticky Tooltip script').
