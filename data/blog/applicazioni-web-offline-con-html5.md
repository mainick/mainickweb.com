---
title: 'Applicazioni Web Offline con HTML5'
date: '2011-06-20T07:00:00+01:00'
status: publish
permalink: /applicazioni-web-offline-con-html5
author: 'Maico Orazio'
excerpt: ''
type: post
id: 722
images: /static/images/posts/web-application-offline.jpg
category:
  - HMTL5
  - javascript
tag:
  - cache
  - 'cache manifest'
  - html5
  - 'web application offline'
post_format: []
---

![Web Application Offline](/static/images/posts/web-application-offline.jpg)

HTML5 fornisce una nuova [funzionalità di caching](http://www.w3.org/TR/offline-webapps/ 'Offline Web Applications') per supportare le **applicazioni web in modalità offline**.

E’ necessario specificare un determinato file chiamato **“cache manifest”** nella pagina web a cui vogliamo applicare il sistema di caching.  
L’URL del file cache manifest va specificato nel tag `html` del documento in cui vogliamo attivare la funzione di caching HTML5.

```html
<html manifest="myapp.cache">
  ...
</html>
```

E’ importante che, per essere correttamente analizzato dal browser, il file di cache manifest deve avere come intestazione in `header` il tipo MIME `text/cache-manifest`; dunque è necessario aggiungere al web server l’associazione all’estensione del tipo di file o specificarlo manualmente, ad esempio utilizzando la direttiva `header` di PHP.

L’aspetto di un tipico file di cache manifest è il seguente:

```text
CACHE MANIFEST
index.html
css/style.css
js/jquery.js
images/logo.png

NETWORK:
search.php
```

specifica diversi file di cache, e poi specifica che il file _search.php_ non deve mai essere memorizzato nella cache, in modo da consentire che ad ogni tentativo di accesso al file è consentito di bypassare il file di cache.

Il procedimento di caching funziona nel momento in cui un utente fa richiesta o accede alla pagina corrispondente ad un documento a cui è associato un cache manifest, allora il browser deve prima controllare se su server quest’ultimo è stato modificato:

- se non è stato modificato, viene utilizzato il contenuto della cache
- altrimenti se presente una nuova versione del cache manifest, il contenuto presente della cache viene considerato obsoleto e ricaricato dal server.

Altra funzionalità importante del cache manifest è che può contenere anche voci di ripiego (sotto la voce `FALLBACK`), utilizzate dal client/browser se non è possibile recuperare il contenuto originale.

```text
CACHE MANIFEST
index.html
css/style.css
js/jquery.js
images/logo.png

NETWORK:
search.php

FALLBACK
images/thumb.php	error.png
```

nell’esempio viene utilizzata un’immagine statica quando il recupero di un’immagine generata dinamicamente fallisce.

In HTML5 sono definite delle [API](http://www.whatwg.org/specs/web-apps/current-work/#application-cache-api 'Application cache API') che permettono di attivare manualmente gli aggiornamenti della cache:

- **update()**: aggiorna la cache per il documento corrente in background;
- **swapCache()**: passa alla cache dell’applicazione più recente, se vi è una più recente; valida anche per le successive richieste di risorse dalla cache;
- **onchecking()**: cattura l’evento _checking_ che si manifesta quando il client/browser verifica se disponibile un aggiornamento o tenta di scaricare per la prima volta il file di cache manifest (questo è sempre il primo evento della sequenza);
- **onerror()**: cattura l’evento _error_ che si manifesta per tutti gli errori che possono verificarsi del tipo: nello scaricare il cache manifest il client/browser ha ricevuto errore 404 o 410, non è stato possibile scariche le risorse elencate nel cache manifest, si è verificato un errore durante il recupero delle risorse;
- **onnoupdate()**: cattura l’evento _noupdate_ che si manifesta quando il client/browser verifica se disponibile un aggiornamento il cache manifest non è cambiato;
- **ondownloading()**: cattura l’evento _downloading_ che si manifesta quando il client/browser sta scaricando le risorse elencate nel cache manifest dopo aver verificato un aggiornamento di quel’ultimo;
- **onprogress()**: cattura l’evento _progress_ che si manifesta quando il client/browser sta scaricando le risorse elencate nel cache manifest;
- **onupdateready()**: cattura l’evento _updateready_ che si manifesta quando le risorse elencate nel cache manifest sono state appena ri-scaricate e lo script può utilizzare il metodo `swapCache()` per passare alla nuova cache;
- **oncached()**: cattura l’evento _cached_ che si manifesta quando le risorse elencate nel cache manifest sono state scaricate e ora si trovano nella cache;
- **onobsolete()**: cattura l’evento _obsolete_ che si manifesta quando per trovare il cache manifest il client/browser ha ricevuto l’errore 404 o 410, per cui la cache dell’applicazione viene cancellata;
