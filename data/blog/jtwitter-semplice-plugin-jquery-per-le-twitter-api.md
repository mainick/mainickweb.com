---
title: 'jTwitter: semplice plugin jQuery per le Twitter API'
date: '2010-07-05T08:00:41+01:00'
status: publish
permalink: /jtwitter-semplice-plugin-jquery-per-le-twitter-api
author: 'Maico Orazio'
excerpt: ''
type: post
id: 459
images: /static/images/posts/twitter-mainick.jpg
category:
  - javascript
  - jQuery
  - twitter
tag:
  - javascript
  - jQuery
  - jtwitter
  - twitter
  - 'twitter api'
post_format: []
---

![twitter-mainick.jpg](/static/images/posts/twitter-mainick.jpg 'jTwitter da MaiNick')

**jTwitter** è un semplice plugin jQuery che ci fornisce un facile accesso alle **Twitter API** per prelevare informazioni su uno specifico utente di twitter tramite il suo nome utente.

Il risultato della consultazione delle Twitter API è un **oggetto JSON costituito dai dettagli dell’utente**, quali nome completo, URL homepage, conteggi vari come seguaci, amici, favoriti, numero stati (tweets), localizzazione, etc.

## Utilizzo

Per prima cosa nell’intestazione head della nostra pagina HTML dobbiamo richiamare la **libreria jQuery** (dai server di Google), includere il plugin e poi scrivere il seguente script JavaScript per utilizzare le funzionalità del plugin:

```js
$.jTwitter('nome_utente_twitter', num_tweet, function (tweets) {
  // funzione richiamata per l'utilizzo delle info ricevute
})
```

E’ possibile specificare il nome utente twitter di cui si richiedano le informazioni e gli ultimi stati, e opzionalmente il numero di ultimi tweets postati dall’utente, se non specificato verranno prelevati gli ultimi 5 stati. Infine la funzione in cui gestire e manipolare le informazioni ricevute sotto forma di oggeto JSON

Ecco un mio piccolo esempio:

```html
<html>
  <head>
    <script
      type="text/javascript"
      src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"
    ></script>
    <script type="text/javascript" src="jquery.jtwitter.js"></script>

    <script type="text/javascript">
      $(document).ready(function () {
        // Ottiene gli ultimi 10 stati dal mio account
        $.jTwitter('mainick', 10, function (tweets) {
          $('#tweets').empty()
          $.each(data, function (i, tweet) {
            $('#tweets').append(
              '<div class="tweet">' + ' <div class="testo">' + tweet.text + ' </div>' + '</div>'
            )
          })
        })
      })
    </script>
  </head>
  <body>
    <h1>Tweet by MaiNick</h1>
    <div id="tweets">Attendere...</div>
  </body>
</html>
```
