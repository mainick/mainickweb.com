---
title: 'Drop Shadows con CSS3'
date: '2010-07-12T07:00:29+01:00'
status: publish
permalink: /drop-shadows-con-css3
author: 'Maico Orazio'
excerpt: ''
type: post
id: 483
images: /static/images/posts/drop-shadows-css3.jpg
category:
  - CSS
  - Webdesign
tag:
  - snippets
  - box-shadow
  - CSS
  - 'css ombra'
  - 'css trasformazioni'
  - css3
  - 'drop shadows'
  - transform
post_format: []
---

![drop-shadows-css3.jpg](/static/images/posts/drop-shadows-css3.jpg)

Funziona su tutte le ultime versioni di Opera, Chrome, Safari e Firefox, anche se su Opera e Firefox le [trasformazioni](http://www.w3.org/TR/css3-3d-transforms/ 'CSS Transforms') non sono proprio ottime come Webkit, motore di Safari e Google Chroem.

## Pagine HTML

```html
<div id="shadows">
  <!--START ID shadows-->
  <article>
    <h1>CSS3 Wrapping Drop Shadows</h1>
    <p>
      With <del>out any</del> minimal extra bullshit markup(You need the first child to be a
      container element like a header, hgroup or a div). Oh and they stretch G. Webkit only for now,
      although I'm sure Firefox could do this trick as well.
    </p>
  </article>
</div>
```

## Foglio di stile CSS3

```css
body {
  font-family: Helvetica Neue, Arial, Helvetica, Geneva, sans-serif;
  font-size: 13px;
  background: #3a6682;
}
div#shadows {
  position: relative;
  width: 50%;
  margin: 20em auto;
}
article {
  background: #ccc;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 1.5em;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 1px 0 #fff;
  line-height: 1.5;
  text-align: center;
  display: block;
}
article:before,
article:after {
  -webkit-box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 15px;
  z-index: -1;
  width: 50%;
  height: 20%;
  content: '';
  background: rgba(0, 0, 0, 0.7);
}
article:after {
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  right: 10px;
  left: auto;
}
article:before {
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  right: auto;
  left: 10px;
}
```

Fonte [Nimbupani Designs](http://nimbupani.com/drop-shadows-with-css3.html 'Drop Shadows with CSS3') e [demo](http://nimbupani.com/demo/css3-drop-shadows.html 'Demo Drop Shadows with CSS3').
