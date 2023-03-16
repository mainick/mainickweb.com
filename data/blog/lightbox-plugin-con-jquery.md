---
title: 'Lightbox plugin con jQuery'
date: '2008-07-01T20:44:15+01:00'
status: publish
permalink: /lightbox-plugin-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 8
images: /static/images/posts/logo-jquery.jpg
category:
  - jQuery
tag:
  - javascript
  - jQuery
  - lightbox
  - 'plugin jquery'
post_format: []
---

![Logo jQuery](/static/images/posts/logo-jquery.jpg 'logo-jquery')

Inizio con un primo articolo su un plugin per **jQuery** alternativo alla famosissima **Lightbox JS** di [Lokesh Dhakar](http://www.lokeshdhakar.com/projects/lightbox2/ 'Lightbox 2').

Questo plugin, semplice e facile da usare è una creazione di **Leandro Vieira**, per utilizzarlo è necessario scaricare la libreria [**jQuery**](http://jquery.com/ 'jQuery - The Write Less, Do More, JavaScript Library') e il [**plugin**](https://avioli.github.io/jquery-lightbox/ 'jQuery lightbox plugin') alla pagina dedicata al progetto.

Per utilizzarlo in qualsiasi documento html inserire all’interno dei tag Head i collegamenti ai file javascript:

```html
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.lightbox-0.4.js" type="text/javascript"></script>
```

E sempre all’interno degli stessi tag il foglio di stile del plugin:

```html
<link rel="stylesheet" type="text/css" href="css/jquery.lightbox-0.4.css" media="screen" />
```

Non è necessario stravolgere il codice del documento html, basta richiamare la funzione con il tag scelto per contenere le immagini che avranno tale effetto:

```js
$(function () {
  $('a[@rel*=lightbox]').lightBox() //Seleziona tutti i link che contengono "lightbox" nel'attributo rel
  $('#gallery a').lightBox() //Seleziona tutti i link con ID="galley"
  $('a.lightbox').lightBox() //Seleziona tutti i link con classe "lightbox"
  $('a').lightBox() //Seleziona tutt i link della pagina
})
```

E’ possibile definire alcune configurazioni da codice alla chiamata della funzione, senza modificare alcuna riga del codice del plugin, personalizzando il tuo **jQuery Lightbox plugin**:

- **overlayBgColor**: definisce il colore di sfondo (#000 nero di default)
- **overlayOpacity**: definisce l’opacità dello sfondo (0.8 di default)
- **imageLoading**: indirizzo immagine GIF di caricamento
- **imageBtnClose**: indirizzo immagine GIF pulsante di chiusura
- **imageBtnPrev**: indirizzo immagine GIF pulsante precedente
- **imageBtnNext**: indirizzo immagine GIF pulsante successiva
- **containerBorderSize**: dimensione spazio intorno all’immagine (10px padding di default)
- **containerResizeSpeed**: durata dell’effetto di ridimensionamento box (400 di default)
