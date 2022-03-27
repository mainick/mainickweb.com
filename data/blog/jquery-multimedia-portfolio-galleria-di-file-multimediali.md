---
title: 'jQuery Multimedia portfolio: galleria di file multimediali'
date: '2008-07-20T22:11:37+01:00'
status: publish
permalink: /jquery-multimedia-portfolio-galleria-di-file-multimediali
author: 'Maico Orazio'
excerpt: ''
type: post
id: 17
images: /static/images/posts/mediaportfolio.jpg
category:
  - jQuery
tag:
  - javascript
  - jquery
  - 'plugin jquery'
post_format: []
---

[![jQuery Multimedia Portfolio](/static/images/posts/mediaportfolio.jpg 'mediaportfolio')]

Oggi vi presento un plugin di jQuery realizzato da [OpenStudio](http://www.openstudio.fr/jquery/ 'jQuery Multimedia Portfolio - OpenStudio') che permette di realizzare gallerie di file multimediali miste con immagini, video (formato flv) e audio (formato mp3).

Chiaramente ispirato dal famoso effetto “[**coverflow**](http://it.wikipedia.org/wiki/Cover_Flow 'Cover Flow - Wikipedia')” di iTunes, jQuery Multimedia Portfolio è un semplice effetto che _permette di realizzare gallerie che l’utente può scrollare_ usando una scrollbar presente sotto alle anteprime.

Il plugin automaticamente riconosce il tipo di file multimediale. Quando l’utente fa click su un’immagine utilizza un’altro script [Thickbox](http://codylindley.com/thickbox/ 'Thickbox') che permette di vedere l’immagine in una finestra modale come il plugin Lightbox presentato in un’altro [**articolo**](/blog/lightbox-plugin-con-jquery/ 'Lightbox plugin di jQuery'). Mentre facendo click su un video o audio lo riproduce con il player adatto.

Per utilizzarlo in una documento html inserire all’interno dei tag &lt;head&gt; i collegamenti al foglio di stile del plugin e ai file JavaScript:

```html
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.dimensions.js" type="text/javascript"></script>
<script src="js/ui.mouse.js" type="text/javascript"></script>
<script src="js/ui.slider.js" type="text/javascript"></script>
<script src="js/jquery.multimedia-portfolio.js" type="text/javascript"></script>
```

Nel &lt;body&gt; del documento è sufficiente aggiungere una semplice lista html di media:

```html
<ul class="multimedia-portfolio">
  <li>
    <a href="link-to-document"><img title="doc-title" src="doc-thumbnail" alt="" /></a>
  </li>
  <li>...</li>
  ...
</ul>
```

Nell’elemento della lista è possibile inserire un’immagine:

```html
<ul class="multimedia-portfolio">
  <li>
    <a href="documents/image1.jpg"
      ><img title="voiture dans un champ" src="thumbnails/image1.jpg" alt=""
    /></a>
  </li>
</ul>
```

un video in formato flv e audio in formato mp3:

```html
<ul class="multimedia-portfolio">
  <li>
    <a href="http://pulp2.podemus.net/Audio/pulp_tence_131007.mp3"
      ><img
        title="Enquête sur le changement climatique - M-P Lefebvre"
        src="thumbnails/pulp.jpg"
        alt=""
    /></a>
  </li>
</ul>
```

Questo è un esempio completo è preso dal codice della [demo](http://www.openstudio.fr/jquery/ 'jQuery Multimedia Portfolio - Demo') dell’autore:

```html
<ul class="multimedia-portfolio">
  <li>
    <a class="thickbox" href="documents/image1.jpg"
      ><img title="voiture dans un champ" src="thumbnails/image1.jpg" alt="voiture dans un champ"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image2.jpg"
      ><img title="moutons" src="thumbnails/image2.jpg" alt="moutons"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image3.jpg"
      ><img title="ballade en forêt" src="thumbnails/image3.jpg" alt="ballade en forêt"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image5.jpg"
      ><img title="arbre mort" src="thumbnails/image5.jpg" alt="arbre mort"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image6.jpg"
      ><img title="bottes de paille" src="thumbnails/image6.jpg" alt="bottes de paille"
    /></a>
  </li>
  <li>
    <a href="documents/tbilissoba.flv"
      ><img
        title="Tbilisoba"
        src="thumbnails/tbilisoba.jpg"
        alt="Tbilisoba"
        width="320"
        height="240"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image7.jpg"
      ><img title="couleurs d'automne" src="thumbnails/image7.jpg" alt="couleurs d'automne"
    /></a>
  </li>
  <li>
    <a href="http://pulp2.podemus.net/Audio/pulp_tence_131007.mp3"
      ><img
        title="Enquête sur le changement climatique - M-P Lefebvre"
        src="thumbnails/pulp.jpg"
        alt="Enquête sur le changement climatique - M-P Lefebvre"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image8.jpg"
      ><img
        title="couleurs d'automne encore"
        src="thumbnails/image8.jpg"
        alt="couleurs d'automne encore"
    /></a>
  </li>
  <li>
    <a class="thickbox" href="documents/image4.jpg"
      ><img title="dans les arbres" src="thumbnails/image4.jpg" alt="dans les arbres"
    /></a>
  </li>
</ul>
```
