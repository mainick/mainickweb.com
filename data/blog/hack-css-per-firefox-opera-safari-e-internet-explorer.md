---
title: 'Hack CSS per Firefox, Opera, Safari e Internet Explorer'
date: '2008-10-16T14:00:14+01:00'
status: publish
permalink: /hack-css-per-firefox-opera-safari-e-internet-explorer
author: 'Maico Orazio'
excerpt: ''
type: post
id: 145
category:
  - CSS
tag:
  - browser
  - CSS
  - 'css hacks'
post_format: []
---

Neal Grosskopf in un articolo propone una [**lista di hack CSS**](http://www.nealgrosskopf.com/tech/thread.asp?pid=20 'Hack trucchi CSS per i principali browser') con cui è possibile scrivere regole specifiche per ciascuno dei principali browser.

Come introduce l’autore, è una pratica non consigliabile, ma qualche volta potrebbe tornare utile, soprattutto quando avrete bisogno di un modo rapido come obiettivo un browser diverso da Internet Explorer.

L’autore ha creato 6 paragrafi con identificativo i diversi browser per vedere a quali sarà applicata la regola CSS:

```html
<p id="opera">Opera 7.2 - 9.5</p>
<p id="safari">Safari</p>
<p id="firefox">Firefox</p>
<p id="firefox12">Firefox 1 - 2</p>
<p id="ie7">IE 7</p>
<p id="ie6">IE 6</p>
```

nascondendo tutti i tag `p`, aprendo il documento nei diversi browser noteremo solo quello appartenente ad esso.

```html
<style type="text/css">
  body p {
    display: none;
  }
</style>
```

## Internet Explorer utilizzando commenti condizionali

Vi è una robusta sintassi che Microsoft ha creato per consentire agli autori di farlo. Esistono due alternative a seconda della versione del browser:

```html
<!--[if IE 7]>
  <style type="text/css"></style>
<![endif]-->

<!--[if IE 6]>
  <style type="text/css"></style>
<![endif]-->
```

## Internet Explorer utilizzando Parser Hacks

Non è molto consigliabile questa tecnica hack in quanto è molto più semplice utilizzare i **commenti condizionali** descritti sopra, ma se si desidera mantenere tutte le regole CSS in un solo file, questa è l’alternativa:

```css
/* IE 7 */
html > body #ie7 {
  *display: block;
}

/* IE 6 */
body #ie6 {
  _display: block;
}
```

si noti che il trucco IE7 si applica solo alla versione 7 del browser di casa Microsoft perché la versione 6 non interpreta bene il selettore _‘&gt;’_; va inoltre notato che nessuno degli altri browser riconosce questo hack.

## Firefox

Il primo hack ha come obiettivo Firefox versioni 1 e 2, utilizzando un **hack vuoto** sul tag _body_. Il secondo trucco, riconosciuto da tutte le versioni di Firefox, si ha utilizzando la proprietà _‘-moz’_ combinato con _‘-document url-prefix()’_:

```css
/* Firefox 1 - 2 */
body:empty #firefox12 {
  display: block;
}

/* Firefox */
@-moz-document url-prefix() {
  #firefox {
    display: block;
  }
}
```

## Safari

Anche Safari ha una propria proprietà CSS, usando _‘-webkit prefix’_ viene riconosciuto solo dal browser di Apple:

```css
/* Safari */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  #safari {
    display: block;
  }
}
```

## Opera

Il trucco per Opera può funzionare solo negando una proprietà CSS. Questo hack risulta debole semplicemente perchè presto Firefox supporterà tale hack, quindi sarà riconosciuto anche dalla **“volpe di fuoco”**.

```css
/* Opera */
@media all and (-webkit-min-device-pixel-ratio: 10000),
  not all and (-webkit-min-device-pixel-ratio: 0) {
  head ~ body #opera {
    display: block;
  }
}
```
