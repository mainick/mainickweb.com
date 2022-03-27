---
title: 'Crea una classifica mp3 musicale con jQuery'
date: '2009-10-09T08:00:18+01:00'
status: publish
permalink: /crea-una-classifica-mp3-musicale-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 267
category:
  - javascript
  - jQuery
tag:
  - audio
  - jmp3
  - jQuery
  - mp3
  - 'plugin jquery'
post_format: []
---

La settimana scorsa ho iniziato lo sviluppo di un sito _community_ con tematica **musicale**. Nel creare una prima bozza da far vedere al cliente, mi posi il problema della sezione _classifiche hit della musica_.  
Navigando alla ricerca di un **[plugin jQuery](http://plugins.jquery.com/ 'Plugins | jQuery Plugins')** che faccia al caso mio, tra i pochi risultati ho scelto il plugin **[jMP3](http://www.sean-o.com/jquery/jmp3/ "jMP3: Sean O's javaScript MP3 Player / jQuery plugin")** per la sua facilità di implementarlo nelle proprie pagine: è semplicissimo ricreare una **playlist musicale** integrandolo con Flash Single MP3 Player (un piccolo componente Flash per la riproduzione di file MP3).  
Come ho specificato per funzionare jMP3 ha bisogno di un componente Flash, ma nessuna riga di codice Flash troveremo o dovremo scrivere all’interno della nostra pagina.

Implementarlo è veramente semplice: iniziamo scaricando il [pacchetto di esempio](/static/esempi/plugin-jmp3/esempio-jMP3.zip 'Esempio con plugin jMP3'). Nell’intestazione della pagina principale di esempio richiamiamo la **libreria jQuery** e il plugin:

```html
<script type="text/javascript" src="jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="jquery.jmp3.js"></script>
<script type="text/javascript">
  $(document).ready(function () {
    $('#sound').jmp3({
      filepath: '',
      backcolor: 'C52C7C',
      forecolor: 'FFFFFF',
      width: '310',
      volume: '100',
      showdownload: 'false',
      showfilename: 'false',
    })
  })
</script>
```

segue la parte di codice in javascript per l’inizializzazione del plugin. Indichiamo tramite il selettore la _classe_ dei div che vogliamo trasformare in **player** e le caratteristiche per personalizzarlo:

- _filepath_ – percorso del file MP3 rispetto alla directory in cui si trova questa pagina;
- _backcolor_ – colore di sfondo;
- _forecolor_ – colore di primo piano (pulsanti);
- _width_ – larghezza del player (misurata in px);
- _repeat_ – MP3 in loop (_true_ o _false_);
- _volume_ – volume musica (0-100);
- _autoplay_ – riproduzione automatica (_true_ o _false_);
- _showdownload_ – visualizza pulsante per il download del file (_true_ o _false_);
- _showfilename_ – visualizza il nome del file dopo il player (_true_ o _false_);

Una cosa da fare subito, riguardo le impostazioni, è aprire il file _js_ del plugin e specificare la posizione del player _singlemp3player.swf_ alla variabile _playerpath_.

Infine non resta che inserire nel corpo della nostra pagina i _div_ o qualsiasi altro elemento vogliamo trasformare in player, specificando la _classe_ scelta nel codice sopra e il nome del file MP3 da riprodurre:

```html
<body>
    <div class="sound">sound.mp3</span>
    <div class="sound">sound.mp3</span>
    <div class="sound">sound.mp3</span>
</body>
```

Siamo arrivati alla fine… lo so passa molto tempo tra un post e l’altro, a me dispiace tantissimo non so voi?! Mi scuso ma il tempo è questo, devo chiedere qualche consiglio in più a [Davide Pozzi](http://blog.tagliaerbe.com/ 'TagliaBlog - Web Marketing Blog') per organizzare nel migliore dei modi il mio tempo libero, anche perché le idee ci sono!

😉 alla prossima
