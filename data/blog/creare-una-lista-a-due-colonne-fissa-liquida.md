---
title: 'Creare una lista a due colonne: fissa + liquida'
date: '2009-12-18T08:00:44+01:00'
status: publish
permalink: /creare-una-lista-a-due-colonne-fissa-liquida
author: 'Maico Orazio'
excerpt: ''
type: post
id: 327
images: /static/images/posts/column-liquid.jpg
category:
  - CSS
  - Webdesign
tag:
  - CSS
post_format: []
---

![column-liquid.jpg](/static/images/posts/column-liquid.jpg)

Questo tutorial risolverà la maggior parte dei problemi CSS che si hanno in generale quando si vuole realizzare un effetto come da titolo: **una lista a due colonne di cui la prima di larghezza fissa e la seconda che occupa tutta la parte rimanente nel browser**.

Si crea prima la lista, di cui ogni elemento è costituito da due _div_ che rappresenteranno le colonne.  
Il primo _div_ sarà la colonna fissa, che, secondo l’esempio qui riportato, conterrà un’immagine e la sua didascalia. Il secondo _div_ rappresenterà la colonna **liquida**, permettendo al **contenuto di essere flessibile** – _in larghezza_ – in base alla risoluzione del browser.

Ecco il codice html dell’esempio:

```html
<ul class="column">
  <li>
    <div class="imgblock">
      <img src="http://upload.wikimedia.org/wikipedia/it/b/bc/Wiki.png" alt="" />
    </div>
    <div class="detail">
      <h2>Cosa è Wikipedia</h2>
      <p>
        Wikipedia è un'enciclopedia multilingue liberamente consultabile sul Web, fondata sulla
        certezza che ciascuno possiede delle conoscenze che può condividere con gli altri.
        L'ambizioso progetto, che prende il via il 15 gennaio 2001 in lingua inglese, nell'arco di
        soli quattro mesi ha visto nascere altre 13 edizioni, tra cui quella in italiano.
      </p>
    </div>
  </li>
</ul>
```

Diamo uno stile alla lista tramite codice CSS:

```css
ul.column {
  float: left;
  width: 100%;
  margin: 10px 0;
  padding: 0;
  border-top: 1px solid #ddd;
  font-size: 1.2em;
  list-style: none;
}
ul.column li {
  float: left;
  width: 100%;
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  background: #f0f0f0;
}
```

Il seguente è il codice CSS che rende l’effetto:

```css
ul.column li .imgblock {
  float: left;
  width: 150px;
  padding: 0 10px;
  font-weight: bold;
  text-align: center;
}
ul.column li .imgblock img {
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  background: #fff;
}
ul.column li .detail {
  padding-left: 170px;
}
```

specifichiamo una larghezza fissa per il primo _div_, quindi per la prima colonna, e niente alla seconda in modo che sia larga quando tutto la finestra del browser (_width: 100%_).  
Dunque il testo si adatterà per tutto lo spazio di destra, dando, nello stesso momento, spazio alla prima colonna a sinistra.
