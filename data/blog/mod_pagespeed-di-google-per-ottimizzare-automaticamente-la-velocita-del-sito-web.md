---
title: 'Mod_PageSpeed di Google per ottimizzare automaticamente la velocità del sito Web'
date: '2010-11-22T07:00:00+01:00'
status: publish
permalink: /mod_pagespeed-di-google-per-ottimizzare-automaticamente-la-velocita-del-sito-web
author: 'Maico Orazio'
excerpt: ''
type: post
id: 515
images: /static/images/posts/mod_pagespeed.jpg
category:
  - Servizi
tag:
  - apache
  - google
  - pagespeed
  - performance
post_format: []
---

![mod_pagespeed di Google](/static/images/posts/mod_pagespeed.jpg)

Dopo diversi mesi di sviluppo, Google annuncia una versione stabile di **mod_pagespeed**, un modulo per i server web Apache 2 in grado di **ottimizzare automaticamente la velocità delle pagine dei siti web**, senza alcuna modifica agli script reali che generano le pagine.

Se c’è una sola società che è sempre stata ossessionata dalla **velocità di accesso ai siti web**, tale società è Google.

Più di recente, Google ha investito anche nell’invogliare gli sviluppatori a rendere i loro siti più veloci. Per esempio, all’inizio dell’anno Google ha annunciato che la velocità del sito è diventato [uno dei fattori che influenzano il ranking](http://www.googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html) delle pagine visualizzate nei risultati di ricerca del suo algoritmo.

Questo annuncio ha motivato molti sviluppatori ad **ottimizzare le proprie pagine web**. Strumenti che aiutano lo sviluppatore web sono [YSlow](http://yslow.org/) e [Page Speed](http://code.google.com/speed/page-speed/), della stessa Google, ma che tuttavia richiedono una buona conoscenza tecnica e abbastanza tempo per modificare il codice del sito per servire le pagine più velocemente.

Questo è il punto a favore di mod_pagespeed, che analizza automaticamente ogni pagina servita all’utente ed **esegue al volo alcune ottimizzazioni**: basta installare il modulo sul server web e farà le modifiche necessarie per HTML, CSS, JavaScript e intestazioni HTTP per far **servire le pagine in modo più veloce**.

Ciò che [mod_pagespeed](https://developers.google.com/speed/pagespeed/module) è in grado di ottimizzare in questa prima release:

- **ottimizzazione della cache**: memorizza nella cache del browser le immagini, i file CSS e JavaScript, con scadenza dopo un lungo periodo di tempo, in modo che la prossima volta che l’utente torna sul sito, il browser non ha bisogno di ricaricare quei file e le pagine saranno caricate più velocemente.
- **minimizzare richieste andate/ritorno**: ogni pagina può richiedere al browser di eseguire una serie di richieste HTTP al server.
- **minimizzare richieste in sovraccarico**: per caricare una pagine spesso si inviano molte richieste HTTP al server, anche se di dimensioni piccole ma molto sovraccaricate, tipo l’invio di cookie di dimensione elevate e quindi con troppi valori.
- **ridurre al minimo la dimensione del payload**: la quantità di dati che il server invia per caricare l’intera pagina, utilizzando la compressione HTTP, del codice HTML, CSS, JavaScript e immagini.
- **ottimizzare il rendering del browser**: si riferisce alla struttura del documento HTML e degli stili CSS utilizzati per la visualizzazione della pagina.

Insomma, installare mod_pagespeed è come avere al proprio servizio un **esperto di ottimizzazione pagine web** in modo del tutto gratis.

Ovviamente sarebbe molto meglio creare le proprie pagine già in maniera ottimizzata.

[![mod_pagespeed](http://img.youtube.com/vi/8moGR2qf994/0.jpg)](http://www.youtube.com/watch?v=8moGR2qf994)
