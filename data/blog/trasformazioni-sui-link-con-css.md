---
title: 'Trasformazioni sui link con CSS'
date: '2010-07-15T07:00:25+01:00'
status: publish
permalink: /trasformazioni-sui-link-con-css
author: 'Maico Orazio'
excerpt: ''
type: post
id: 490
images: /static/images/posts/css_links.jpg
category:
  - CSS
  - Webdesign
tag:
  - snippets
  - CSS
  - 'css hack'
  - 'css transform'
  - 'css transition'
  - 'css trasformazioni'
  - css3
  - 'hover link'
post_format: []
---

![css_links.jpg](/static/images/posts/css_links.jpg)

Quando si passa su un link, l’elemento **si anima e si inclina verso sinistra o destra**. Gli effetti sono stati creati solo con i CSS.

Vengono utilizzate le **funzionalità di transizione** specifiche per ogni browser tramite **hack CSS** (dato che ciascuno ha il proprio prefisso). La durata della transizione è impostata su 250 millisecondi e la scala/rotazione è impostata ad un valore predefinito.  
Sempre tramite CSS, allo stato _hover_ dei link viene assegnato un colore di sfondo, gli angoli arrotondati per migliorare l’effetto e la scala/rotazione modificati per inclinare l’elemento.

## Foglio di stile CSS

```css
.cpojer-links a {
  display: inline-block;
  padding: 4px;
  outline: 0;
  color: #3a599d;
  -webkit-transition-duration: 0.25s;
  -moz-transition-duration: 0.25s;
  -o-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
  -webkit-transform: scale(1) rotate(0);
  -moz-transform: scale(1) rotate(0);
  -o-transform: scale(1) rotate(0);
  transform: scale(1) rotate(0);
}
.cpojer-links a:hover {
  background: #3a599d;
  text-decoration: none;
  color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -webkit-transform: scale(1.05) rotate(-1deg);
  -moz-transform: scale(1.05) rotate(-1deg);
  -o-transform: scale(1.05) rotate(-1deg);
  transform: scale(1.05) rotate(-1deg);
}
.cpojer-links a:nth-child(2n):hover {
  -webkit-transform: scale(1.05) rotate(1deg);
  -moz-transform: scale(1.05) rotate(1deg);
  -o-transform: scale(1.05) rotate(1deg);
  transform: scale(1.05) rotate(1deg);
}
```

Fonte [David Walsh Blog](http://davidwalsh.name/css-transformations 'Sexy Link Transformations with CSS') e [demo](http://davidwalsh.name/dw-content/cpojer-links.php 'Esempio trasformazione link con CSS').
