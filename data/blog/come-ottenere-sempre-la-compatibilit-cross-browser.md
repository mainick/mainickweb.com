---
title: 'Come ottenere sempre la compatibilità Cross Browser'
date: '2008-12-01T07:30:38+01:00'
status: publish
permalink: /come-ottenere-sempre-la-compatibilit-cross-browser
author: 'Maico Orazio'
excerpt: ''
type: post
id: 232
category:
  - CSS
tag:
  - browser
  - 'cross browser'
  - CSS
  - font
  - html
  - IE6
post_format: []
---

Questo è un elenco di problemi principali che si hanno lavorando con Internet Explorer.

## Contraddizioni dell’elemento

---

Ogni browser rende diversi particolari elementi – importi differenti per padding, margini e bordi etc. – se lasciamo utilizzare lo stile predefinito dei browser.

### Soluzione

La prima cosa da fare è ripristinare i vostri stili. Disporre all’inizio del vostro css una soluzione di _reset_ che rimuove il padding, margin e border e altre incongruenze dagli elementi.  
Un buon esempio è il codice [reset.css di Eric Meyer](http://meyerweb.com/eric/thoughts/2008/01/15/resetting-again/ 'Stile reset.css di Eric Meyer').

## Image Rendering

---

IE6 e IE7 rendono estremamente male le immagini ridimensionate, quando le loro dimensioni sono cambiate con CSS o nel HTML.

### Soluzione

Ridimensionare le immagini alla dimensione desiderata prima di utilizzarla nel sito.

## Font Rendering

---

Safari 3+ ha un problema con il modo in cui rende testo chiaro su sfondo scuro. Esiste un modo per farlo sembrare più chiaro.

### Soluzione

E’ necessario aggiungere questa regola al selettore:

```css
p {
  text-shadow: #000 0 0 0;
}
```

## Selezione font

---

Ci sono font web sicuri che usiamo – Arial, Georgia, Verdana etc. Ma ci sono alcuni font che sono comuni sia al PC che al Mac – – Century Gothic, Arial Narrow etc. – tuttavia, browser e OS differenti li rendono di tipo differente.

### Soluzione

Finché è un font sicuro va tutto bene nella visualizzazione. Tuttavia bisogna informarsi e verificare questi problemi di rappresentazione: ad esempio, un font che probabilmente non dovreste usare è Lucida Grande/Sans, il quale rende bruttissimo in Internet Explorer.

## Dimensione testo

---

La capacità di ridimensionare il testo differisce fra i browser e gli OS. Se vogliamo impostare tutto il testo in em, IE esagererà i formati del testo una volta ridimensionato.

### Soluzione

È necessario specificare la dimensione in percentuale nell’elemento body, e quindi la dimensione in em, attraverso il resto del foglio. line-height è necessario definirla in em, piuttosto che in pixel, per una rappresentazione costante.  
Una cosa da ricordare è che la dimensione del font di default è 16px. Quindi, per ridimensionarlo a 12px usiamo:

```css
body {
  font-size: 75%;
  line-height: 1.5em;
}
h1 {
  font-size: 3em; /* 36px */
}
```

## Doppi margini su elementi flottanti

---

Creiamo un CSS layout con elementi flottanti a destra:

```css
#content {
  float: right;
  width: 300px;
  margin-right: 10px;
}
#sidebar {
  float: right;
  width: 100px;
}
```

In IE qualsiasi margine che si trova sullo stesso lato del float sarà raddoppiato. Questo significa che l’elemento content a sinistra avrà tale margine esteso a 20px.

### Soluzione

Per risolvere il problema, tutto quello che dovete fare è applicare la proprietà display:inline sui box del layout:

```css
#content {
  float: right;
  width: 300px;
  margin-right: 10px;
  display: inline;
}
#sidebar {
  float: right;
  width: 100px;
  display: inline;
}
```

## Compensazione elementi flottanti

---

Si verifica quando un div contenitore non avvolge correttamente intorno ai div contenuti.  
Probabilmente non noterete questo fino a che non si prova a mettere uno sfondo sul vostro contenitore.

### Soluzione

La soluzione migliore è un semplice overflow:auto o overflow:hidden nel div contenitore:

```css
#container {
  width: 966px;
  margin: 0 auto;
  overflow: auto;
}
```

È necessario tenere a mente che overflow: auto potrebbe causare alcuni problemi con Firefox: se si verificano problemi usare overlflow:hidden.

## CSS selettori

---

Se vorremmo utilizzare tutti i nuovi CSS3 selettori, IE6 non supporta tutti quelli importanti.  
Molti di questi selettori non sono supportati neppure da Firefox 3. Per un elenco completo dei selettori supportati, consultare questo post sul [supporto dei CSS selettori nei browser](https://caniuse.com/?search=selectors 'Browser CSS Selector Support').

### Soluzione

Usare soltanto E + F, E &gt; F, E ~ F. Se realmente dovete utilizzare questi selettori, dovreste esaminare IE8.js che dà a IE6 il migliore supporto dei selettori. Tuttavia questo rallenterà il vostro sito.

## PNG Trasparenza

---

IE6 non supporta la trasparenza alfa del PNG. Il più fastidioso bug/problema di IE.

### Soluzione

Esistono tre soluzioni per questo problema.  
E’ possibile utilizzare **AlphaImageLoader** in un foglio di stile specifico per IE: aggiungi queste proprietà a qualsiasi immagine PNG che si desidera avere la trasparenza.

```css
.trans {
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/images/transparent.png', sizingMethod='image/scale/crop');
}
```

È necessario creare una PNG trasparente 1×1 e collegarla ad essa nell’attributo src.  
Un modo migliore per farlo è [**IE5.5+ PNG Alpha Fix**](http://www.twinhelix.com/css/iepngfix/ 'IE PNG Fix v1.0 / 2.0 Alpha 3') simile al AlphaImageLoader, tranne per il fatto che si collega ad uno script JavaScript che innesca la trasparenza.  
Il terzo metodo è quello di utilizzare IE8.js citato sopra. E’ anche più sicuro rispetto al metodo precedente. Realizzerà la trasparenza a qualsiasi png che finisce -trans; ad es. myimage-trans.png.
