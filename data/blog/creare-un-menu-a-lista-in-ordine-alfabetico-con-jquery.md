---
title: 'Creare un menu a lista in ordine alfabetico con jQuery'
date: '2010-02-08T08:00:07+01:00'
status: publish
permalink: /creare-un-menu-a-lista-in-ordine-alfabetico-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 352
images: /static/images/posts/jquery-listmenu-plugin.jpg
category:
  - javascript
  - jQuery
tag:
  - javascript
  - jQuery
  - 'plugin jquery'
post_format: []
---

![Menu a lista in ordine alfabetico con jQuery](/static/images/posts/jquery-listmenu-plugin.jpg 'jquery listmenu plugin')

**ListMenu è un plugin jQuery** che permette di convertire facilmente una **lunga lista di elementi**, difficile da navigare, in un sistema compatto di menu a liste visualizzate in ordine alfabetico, in modo che si presenti **graficamente più pulita** e di **rapido accesso** agli elementi.

**jQuery ListMenu** l’ho trovato molto utile per la presentazione di lunghe liste di contatti, prodotti, liste di cose, etc. Il risultato è un insieme di menu di liste su cui risulta facile spostarsi con il mouse su una lettera e un elenco a colonne di tutte le voci che iniziano con quella lettera appaiono in un sottomenu. Spostarsi tra le lettere è molto veloce e le colonne nei sottomenu sono ben bilanciate.

Se il tag utilizzato per rappresentare la lista è _OL_, la numerazione inizia da 1 in ogni sottomenu e si svolge tra le colonne, dall’alto verso il basso, da sinistra verso destra, mantenendo una sequenza logica.  
Gli elementi della lista che iniziano con caratteri numerici vengono inclusi nella voce di menu opzionale _\[0-9\]_; mentre gli elementi che iniziano con caratteri di punteggiatura o non rappresentati nell’alfabeto visualizzato vengono raccolti nella voce di menu _\[…\]_, sempre opzionale.  
Le voci di menu che non contengono elementi appaiono disabilitate.

## Utilizzo

Nell’intestazione (&lt;head&gt;…&lt;/head&gt;) della nostra pagina html, dopo aver richiamato la **libreria jQuery**, includiamo il plugin ListMenu e il codice javascript che crea il menu di liste:

```html
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/jquery.listmenu-1.1.js"></script>
<script type="text/javascript">
  $(function () {
    $('#lista').listmenu()
  })
</script>
```

Aggiungiamo il codice HTML che crea la nostra lista di elementi con l’attributo _id_ con valore _lista_ indicato sopra nel selettore jQuery:

```html
<ul id="lista">
  <li><a href="#">2 elemento</a></li>
  <li><a href="#">A elemento</a></li>
  <li><a href="#">A elemento</a></li>
  <li><a href="#">B elemento</a></li>
  <li><a href="#">C elemento</a></li>
  <li><a href="#">E elemento</a></li>
  <li><a href="#">F elemento</a></li>
  <li><a href="#">L elemento</a></li>
  <li><a href="#">Z elemento</a></li>
  etc...
</ul>
```

E’ possibile utilizzare qualsiasi [selettore jQuery](http://api.jquery.com/category/selectors/ 'Selettori di jQuery') con _.listmenu()_. Ad esempio, se nella stessa pagina sono presenti più liste e si desidera attivare su tutte le stesse opzioni di ListMenu e tutte hanno associata la stessa classe _lista_, si potrebbe realizzare semplicemente in questo modo:

```js
$(function () {
  //imposta le stesse opzioni per tutte le liste con classe lista
  $('.lista').listmenu()
})
```

## Opzioni

E’ possibile inizializzare il plugin modificando le impostazioni predefinite in base alle proprie esigenze:

- **includeNums** \[_default: true_\]: true mostra nella barra la voce di menu \[0-9\].
- **includeOther** \[_default: false_\]: true mostra nella barra la voce di menu \[…\].
- **flagDisabled** \[_default: true_\]: true applica la classe per mostrare disattivate quelle lettere che non hanno elementi nell’elenco.
- **noMatchText** \[_default: ‘No entries matching’_\]: questo è il testo che appare al posto dell’elenco, se non sono presenti voci corrispondenti ad una lettera; impostare un proprio testo per sostituire quello predefinito.
- **showCounts** \[_default: true_\]: true visualizza il numero di elementi quando ci spostiamo con il mouse su una lettera.
- **menuWidth** \[_default: null_\]: il plugin calcola una larghezza per il menu a discesa utilizzando la larghezza degli elementi visualizzati; specificare con un valore numerico se si vuole forzare la larghezza del menu.
- **cols** \[_default: \{count: 4, gutter: 40\}_\]: per impostazione predefinita l’elenco di oggetti per ogni lettera di navigazione sono convertiti in 4 colonne (‘count’) con uno spazio di 40px (‘gutter’) tra di loro.
- **onClick** \[_default: null_\]: forniture una propria funzione per gestire i clic sugli elementi dei menu a discesa.

**jQuery ListMenu plugin** è sviluppato da iHwy, i quali dedicano una [**pagina al progetto ListMenu**](http://ihwy.com/Labs/jquery-listmenu-plugin/ 'jQuery listmenu plugin - javascript list navigation menu control') dove poter scaricare il plugin, visualizzare le demo e ottenere ulteriori informazioni, aggiornamenti e assistenza.
