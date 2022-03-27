---
title: 'Google Font API'
date: '2010-05-27T08:00:52+01:00'
status: publish
permalink: /google-font-api
author: 'Maico Orazio'
excerpt: ''
type: post
id: 422
images: /static/images/posts/google-font-api.jpg
category:
  - CSS
  - Curiosità
  - Webdesign
tag:
  - css
  - fonts
  - google
  - 'google font api'
  - webfont
post_format: []
---

![Google Font API](/static/images/posts/google-font-api.jpg 'Font personalizzato utilizzando Google Font API')

Durante il **Google I/O 2010**, Google ha fatto grandi annunci. Uno di questi riguarda le [Google Fonts API](https://developers.google.com/fonts/docs/developer_api 'Google Font API')

Letteralmente, è possibile integrare tipi di caratteri diversi da quelli _web-safe_, universalmente diffusi su tutti i device, semplicemente collegando il nostro documento ad un carattere tra quelli [ora disponibili](https://fonts.google.com/ 'Lista fonts personalizzati'), memorizzati sui server di Google (risparmiando banda per le prestazioni di caching).

## Utilizzo

Per usufruire delle Google Font API, abbiamo bisogno di un link al nostro carattere desiderato, e farne riferimento nella proprietà `font-family` del css. Questo è tutto!

```html
<html>
  <head>
    <title>Utilizzo Google Font API</title>
    <link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
    <style>
      body {
        font-family: 'Lobster', arial, serif;
        font-size: 70px;
      }
    </style>
  </head>
  <body>
    Hello World
  </body>
</html>
```

Per la lista aggiornata dei fonts disponibili è possibile far riferimento alla [Google Font Directory](https://fonts.google.com/ 'Google Font Directory').

Per conoscere le operazioni eseguite dietro le quinte dalle Google Font API potete leggere l’[articolo](http://blog.html.it/26/05/2010/google-font-directory-dietro-le-quinte/ 'Google Font Directory dietro le quinte') sul blog di Html.it
