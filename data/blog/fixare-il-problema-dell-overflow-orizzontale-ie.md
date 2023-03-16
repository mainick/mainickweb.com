---
title: 'Fixare il problema dell overflow orizzontale IE'
date: '2008-10-16T07:30:53+01:00'
status: publish
permalink: /fixare-il-problema-dell-overflow-orizzontale-ie
author: 'Maico Orazio'
excerpt: ''
type: post
id: 143
category:
  - javascript
  - jQuery
tag:
  - javascript
  - css
  - overflow
  - 'plugin jquery'
post_format: []
---

Internet Explorer ha una diversa impostazione dell’**overflow** rispetto a Firefox o Safari.

Ho trovato questo plugin per jQuery che permette di fissare il **problema dell’overflow orizzontale** sullo stesso browser. E’ possibile seguire il [progetto](http://remysharp.com/2008/01/21/fixing-ie-overflow-problem/ "fissare il problema dell'overflow orizzontale in Internet Explorer") alla pagina dell’autore.

In particolare , Firefox e altri, se si ha un overflow orizzontale dell’elemento pone la barra di scorrimento sul lato esterno dell’elemento. In Internet Explorer, se non possiamo vedere tutto il contenuto in verticale, genera la barra di scorrimento verticale, insieme alla barra di scorrimento orizzontale.

Ma il caso peggiore si ha quando abbiamo una **sola riga overflowed**: la barra di scorrimento orizzontale non è estesa su tutto l’elemento, rimane comunque un piccolo spazio laterale per la barra di scorrimento verticale anche non visualizzandola.

Seguendo l’autore, una soluzione al problema è di applicare i seguenti passi, solo per Internet Explorer:

1. trovare tutti gli elementi il cui contenuto è visualizzato con barra di scorrimento orizzontale
2. aggiungere 20 pixel di padding-bottom agli elementi
3. scostare la barra di scorrimento verticale

E’ possibile applicare questi tre punti tramite JavaScript:

```js
window.onload = function () {
  // solo IE
  if (!(/*@cc_on!@*/ 0)) return

  // trova gli element di prova
  var all = document.getElementsByTagName('*')
  var i = all.length

  while (i--) {
    // se scrollWidth (la reale larghezza) è superiore alla
    // alla larghezza visibile, applicare le modifiche di stile
    if (all[i].scrollWidth > all[i].offsetWidth) {
      all[i].style['paddingBottom'] = '20px'
      all[i].style['overflowY'] = 'hidden'
    }
  }
}
```

o creare un **plugin per jQuery** con tale codice:

```js
;(function ($) {
  $.fn.fixOverflow = function () {
    if ($.browser.msie) {
      return this.each(function () {
        if (this.scrollWidth > this.offsetWidth) {
          $(this).css({ 'padding-bottom': '20px', 'overflow-y': 'hidden' })
        }
      })
    } else {
      return this
    }
  }
})(jQuery)

// uso
$('pre').fixOverflow().doOtherPlugin()
```
