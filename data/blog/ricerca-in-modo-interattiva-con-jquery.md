---
title: 'Ricerca in modo interattiva con jQuery'
date: '2010-02-03T08:00:07+01:00'
status: publish
permalink: /ricerca-in-modo-interattiva-con-jquery
author: 'Maico Orazio'
excerpt: ''
type: post
id: 343
images: /static/images/posts/quicksearch.jpg
category:
  - javascript
  - jQuery
tag:
  - javascript
  - jQuery
  - 'plugin jquery'
post_format: []
_yoast_wpseo_primary_category:
  - '13'
_yoast_wpseo_content_score:
  - '90'
---

![](/static/images/posts/quicksearch.jpg 'quicksearch')

Tra i tantissimi plugin sviluppati per [jQuery](http://jquery.com/ 'Libreria jQuery') da me utilizzati, **QuickSearch** è quello che ho scoperto di recente, ma rapidamente aggiunto nella mia lista di preferiti.  
QuickSearch agisce visualizzando un campo di ricerca posto sopra o sotto determinati elementi – tabelle, elenchi e paragrafi – e permette di **filtrare il contenuto in tempo reale** man mano che vengono digitati i caratteri nel campo di ricerca.

Ho trovato molto utile QuickSearch nei miei progetti utilizzandolo per effettuare ricerche veloci su tabelle.  
Dovete realmente provare per apprezzare la semplicità e velocità nella ricerca.

## Utilizzo

Ecco un esempio semplice per vedere il plugin in azione. La tabella che utilizzeremo nell’esempio dell’articolo è la stessa utilizzata dal creatore sulla pagina di presentazione del plugin.

```html
<table border="0" id="table_example">
  <thead>
    <tr>
      <th>Email</th>
      <th>Id</th>
      <th>Phone</th>
      <th>Total</th>
      <th>Ip</th>
      <th>Url</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>devo@flexomat.com</th>
      <td>66672</td>
      <td>941-964-8535</td>
      <td>$2482.79</td>
      <td>172.78.200.124</td>
      <td>http://gmail.com</td>
    </tr>
    <tr>
      <th>henry@mountdev.net</th>
      <td>35889</td>
      <td>941-964-9543</td>
      <td>$2776.09</td>
      <td>119.232.182.142</td>
      <td>http://www.gmail.com</td>
    </tr>
    <tr>
      <th>christian@reno.gov</th>
      <td>60021</td>
      <td>941-964-5617</td>
      <td>$2743.41</td>
      <td>167.209.64.181</td>
      <td>http://www.dotnet.ca</td>
    </tr>
    <tr>
      <th>muffins@donuts.com</th>
      <td>17927</td>
      <td>941-964-9511</td>
      <td>$2998.18</td>
      <td>210.214.231.182</td>
      <td>http://google.se</td>
    </tr>
    <tr>
      <th>muffins@reno.gov</th>
      <td>76375</td>
      <td>941-964-2757</td>
      <td>$1836.09</td>
      <td>220.222.93.171</td>
      <td>http://www.samba.org</td>
    </tr>
    <tr>
      <th>mendez@gmail.com</th>
      <td>45834</td>
      <td>941-964-2575</td>
      <td>$2805.46</td>
      <td>228.170.245.253</td>
      <td>http://flexomat.com</td>
    </tr>
    <tr>
      <th>dev@gmail.com</th>
      <td>20022</td>
      <td>941-964-4967</td>
      <td>$3296.54</td>
      <td>175.248.70.240</td>
      <td>http://www.flexomat.com</td>
    </tr>
    <tr>
      <th>foo@polyester.se</th>
      <td>55977</td>
      <td>941-964-745</td>
      <td>$2953.73</td>
      <td>222.114.227.156</td>
      <td>http://www.donuts.com</td>
    </tr>
    <tr>
      <th>adam@aftonbladet.se</th>
      <td>38867</td>
      <td>941-964-6302</td>
      <td>$1949.27</td>
      <td>116.241.143.196</td>
      <td>http://flexomat.com</td>
    </tr>
    <tr>
      <th>devo@donuts.com</th>
      <td>51426</td>
      <td>941-964-1234</td>
      <td>$1067.00</td>
      <td>88.96.149.82</td>
      <td>http://www.polyester.se</td>
    </tr>
    <tr>
      <th>henry@samba.org</th>
      <td>40859</td>
      <td>941-964-4856</td>
      <td>$3401.19</td>
      <td>68.152.250.74</td>
      <td>http://www.flexomat.com</td>
    </tr>
    <tr>
      <th>found@dotnet.ca</th>
      <td>23986</td>
      <td>941-964-2686</td>
      <td>$1393.52</td>
      <td>98.102.181.138</td>
      <td>http://lostnfound.org</td>
    </tr>
    <tr>
      <th>carl@fish.org</th>
      <td>73392</td>
      <td>941-964-5792</td>
      <td>$3876.04</td>
      <td>246.234.182.243</td>
      <td>http://www.google.se</td>
    </tr>
    <tr>
      <th>found@mountdev.net</th>
      <td>03519</td>
      <td>941-964-1599</td>
      <td>$1176.48</td>
      <td>104.212.122.177</td>
      <td>http://donuts.com</td>
    </tr>
  </tbody>
</table>
```

Nell’intestazione della nostra pagina richiamiamo la libreria jQuery, il file di QuickSearch e il codice javascript per inizializzare il plugin:

```html
<script src="jquery.js" type="text/javascript"></script>
<script type="text/javascript">
  $('table#table_example tbody tr').quicksearch({
    position: 'before',
    attached: 'table#table_example',
    stripeRowClass: ['odd', 'even'],
    labelText: 'Cerca nella tabella',
  })
</script>
```

Come potete vedere abbiamo provveduto ad intercettare l’elemento tabella tramite il suo _id_, dopo di che specifichiamo le opzioni di inizializzazione.

## Opzioni

Le opzioni specificate sopra nel codice javascript di inizializzazione sono alcune delle tante che possiamo utilizzare, di seguente elencate e descritte:

- **position**: posizione del modulo di ricerca (_before, after, prepend \[default\], append_).
- **attached**: elemento collegato al modulo di ricerca (_default: body_).
- **formId**: attributo id del modulo di ricerca (default: _quicksearch_).
- **labelText**: testo dell’etichetta del campo di ricerca (default: _Quick Search_).
- **labelClass**: attributo class dell’etichetta del campo di ricerca (default: _qs_label_).
- **inputText**: valore del campo input di ricerca.
- **inputClass**: attributo class del campo input di ricerca (default: _qs_input_).
- **loaderId**: attributo id dell’elemento di caricamento risultati (default: _loader_).
- **loaderClass**: attributo class dell’elemento di caricamento risultati (default: _loader_).
- **loaderImg**: visualizza un’immagine insieme al testo di caricamento.
- **loaderText**: testo di caricamento (default: _Loading …_).
- **stripeRowClass**: aggiunge una classe per ogni elemento in base all’array dato (array di stringhe di classi).
- **delay**: ritardo in millisecondi dopo l’ultimo carattere digitato (default: _500_).
- **onBefore**: esegue una funzione prima di effettuare la ricerca (prende: _function() { }_).
- **onAfter**: esegue una funzione dopo di effettuare la ricerca (prende: _function() { }_).

_Nota: Quando QuickSearch è collegata a una tabella, evitate l’uso di prepend o append._

Sviluppato da Rik Lomas potete trovare ulteriori informazioni sulla pagina dedicata a [QuickSearch plugin jQuery](http://rikrikrik.com/jquery/quicksearch/ 'jQuery quickSearch plug-in'), come il file javascript del plugin e le demo implementati sugli altri elementi specificati all’inizio dell’articolo.
