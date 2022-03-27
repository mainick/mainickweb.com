---
title: 'NyroModal: finestre modali con jQuery'
date: '2010-07-08T07:00:34+01:00'
status: publish
permalink: /nyromodal-finestre-modali-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 469
images: /static/images/posts/nyroModal.jpg
category:
  - jQuery
  - Webdesign
tag:
  - 'finestre modali'
  - jQuery
  - ligthbox
  - nyromodal
  - 'plugin jquery'
post_format: []
---

![nyroModal.jpg](/static/images/posts/nyroModal.jpg)

Se state cercando uno **script lightbox** che è in grado di gestire gli iFrame, contenuti provenienti dal server tramite chiamate Ajax, contenuti HTML in linea, immagini, video e altro ancora, **NyroModal è un ottimo plugin jQuery** che permette tutto ciò.

Negli ultimi giorni mi sono trovato nella posizione di aver bisogno di un semplice, funzionale, plugin lightbox per jQuery facile da usare, una valida alternativa a Facebox. Dopo qualche ricerca, ho trovato diversi plugin sviluppati per questo scopo, e tutti hanno i loro pro e contro. Molti dei plugin supportano solo immagini, non utili alla mia richiesta di inserire contenuti in linea, video Flash e contenuto proveniente da chiamate Ajax.

Finalmente ho trovato e provato NyroModal e sono rimasto molto impressionato. Semplice da utilizzare, fondamentalmente tutto quello che dovremo fare è includere i file CSS e JavaScript appropriati, quindi applicare una classe di `nyroModal` agli elementi che si desidera aprire nel lightbox.

NyroModal è **altamente personalizzabile**, è possibile cambiare il suo aspetto grafico utilizzando i CSS, modificare le animazioni utilizzando le funzioni jQuery e personalizzare la sua funzionalità attraverso varie funzioni e proprietà.

Per impostazione predefinita, qualsiasi finestra modale (con eccezione dei file SWF) **si ridimensiona automaticamente** in base alla dimensione corrente della finestra del browser. Se l’utente ridimensiona il suo browser, anche la finestra modale si ridimensiona fino alla dimensione massima del contenuto.

NyroModal permette di impostare una **galleria di contenuti** con estrema facilità, semplicemente assegnando un identico valore all’attributo `rel` da attribuire a ciascuna voce della galleria: è anche possibile implementare gallerie multiple sulla stessa pagina utilizzando diversi attributi `rel` a cui applicare diverse impostazioni del plugin.

Un’altra funzionalità supportata, quella di effettuare l’**upload di file tramite Ajax** e gestire le informazioni del file ricevute, semplicemente associando la classe `nyroModal` al tag `form` del modulo.

## Caratteristiche

- Chiamate Ajax
- Chiamata Ajax con targeting del contenuto
- Immagine singola
- Galleria immagini con freccie di navigazione
- Galleria con ogni tipo di contenuto
- Form
- Form in iFrame
- Form con targeting del contenuto
- Form con upload di file
- Dom Element
- IFrame
- Gestione degli errori
- Finestra modale ridimensionata in base alle dimensioni della finestra del browser
- Bottone ESC da tastiera per chiudere il lightbox
- Animazioni personalizzabili
- Aspetto personalizzabile
- Titolo alla finestra modale
- Standard W3C HTML valido (transitional)

NyroModal è disponibile per il download sotto licenza MIT. Potete trovare ulteriori informazioni, demo e download sul [sito web del progetto NyroModal](http://nyromodal.nyrodev.com/ 'NyroModal plugin jQuery').
