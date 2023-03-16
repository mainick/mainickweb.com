---
title: 'Come creare una semplice applicazione di geolocalizzazione'
date: '2012-03-12T07:30:52+01:00'
status: publish
permalink: /come-creare-una-semplice-applicazione-di-geolocalizzazione
author: 'Maico Orazio'
excerpt: ''
type: post
id: 745
images: /static/images/posts/W3C-Geolocation-API.jpg
category:
  - HMTL5
  - javascript
tag:
  - javascript
  - html5
post_format: []
---

![](/static/images/posts/W3C-Geolocation-API.jpg 'W3C Geolocation API')

Qui vi mostrerò come utilizzare la nuova [Geolocation API](http://dev.w3.org/geo/api/spec-source.html 'Geolocation API Specification'), insieme alle **API di Google Maps**, per individuare la **posizione dell’utente e visualizzare una mappa con quella posizione**.

Dopo che la mappa è pronta, vi mostrerò come **aggiungere un marker** e come **recuperare ulteriori informazioni sulla posizione dell’utente con una Reverse Geolocation**.

Per prima cosa, diamo uno sguardo alle risorse da collegare alla nostra pagina necessari per sviluppare l’esempio:

```html
<!-- googlemap API: fundamental to show the map -->
<script src="http://maps.google.com/maps/api/js?sensor=true">
  <!--mce:0-->
</script>
```

**Google Maps API V3** script to visualise, modify and enrich our maps.

## Documento HTML

Questo è tutto il contenuto della nostra pagina html:

```html
<div id="map">
  <img id="mapAjaxLoader" src="img/ajax-loader.gif" alt="loader" width="32" height="32" />
</div>
```

un div contenitore della mappa, che contiene l’immagini di loading che faremo visualizzare fino al caricamento dinamico della mappa di Google nel div `mapHolder`.

## Foglio di stile CSS

Nel foglio di stile collegato alla pagina indichiamo solo le dimensioni del contenitore mappa.

```css
#mapHolder {
  width: 336px;
  height: 224px;
}
```

## Script in JavaScript

Come prima cosa verifichiamo se il browser supporta le Geolocation API:

```js
// individuare il supporto del browser per Geolocation
if (navigator.geolocation !== 'undefined') {
  navigator.geolocation.getCurrentPosition(displayLocation, displayError)
} else {
  alert('Il tuo browser non supporta geolocalizzazione.')
}
```

il metodo `getCurrentPosition` di `navigator.geolocation` serve per rilevare la posizione del visitatore, al quale passiamo come parametri due funzioni che saranno chiamate a seconda del feedback dell’utente (se permette o rifiuta di rilevare la sua posizione):

handler `displayLocation` in caso di successo:

```js
function displayLocation(position) {
  var lat = position.coords.latitude
  var lon = position.coords.longitude
  // chiamiamo createMap con le coordinate della posizione individuata
  createMap(position.coords)
}
```

`position` è l’oggetto generato automaticamente da `getCurrentPosition`, che ha due porprietà la latitudine `position.coords.latitude` e longitudine `position.coords.longitude`. Ottenuto le coordinate creiamo la mappa tramite le API di Google Maps:

```js
function createMap(coords) {
  // crea un oggetto LatLng
  var googleCoords = new google.maps.LatLng(coords.latitude, coords.longitude)
  // opzioni da passare per la creazione della mappa
  var mapOpts = {
    zoom: 15, //zoom della mappa
    center: googleCoords, // centro mappa
    mapTypeId: google.maps.MapTypeId.ROADMAP, //tipo mappa [ROADMAP - SATELLITE - HYBRID]
  }
  var mapDiv = document.getElementById('mapHolder')
  //crea oggetto mappa
  map = new google.maps.Map(mapDiv, mapOpts)
}
```

## Creare un marker sulla mappa e ottente l’indirizzo

Per creare un **marker sulla mappa ad indicare posizione individuata**, chiamiamo la funzione alla fine di `createMap`, passandogli l’oggetto mappa e le opzioni personalizzate:

```js
// aggiunge un marker sulla mappa utilizzando google.maps.Marker
function addMarker(map, googleCoords) {
  //opzioni per il marker
  var markerOpts = {
    animation: google.maps.Animation.BOUNCE, //animazione marker [DROP / BOUNCE]
    position: googleCoords,
    map: map,
  }
  var marker = new google.maps.Marker(markerOpts)
}
```

Possiamo recuperare ulteriori informazioni sulla posizione rilevata, ad esempio l’indirizzo. Dopo aver creato il marker, chiamiamo la funzione e gli passiamo le coordinate del marker:

```js
function getCity(coords) {
  var point = new google.maps.LatLng(coords.latitude, coords.longitude)
  //crea un nuovo oggetto Geocoder
  var geocoder = new google.maps.Geocoder()
  geocoder.geocode({ latLng: point }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        //mettiamo l'indirizzo ricevuto in un div yourCITYdiv
        document.getElementById('yourCITY').innerHTML = results[1].formatted_address
      } else {
        //in caso di errore
        document.getElementById('yourCITY').innerHTML = 'Ricerca indirizzo non riuscita: ' + status
      }
    }
  })
}
```

Nella funzione descritta sopra, definiamo un nuovo oggetto `Geocoder`. Analizziamo, tramite il metodo `geocode`, il punto definito dalle coordinate date in input alla funzione, se non si verificano errori il risultato restituirà l’indirizzo dettagliato della posizione dell’utente in `results[1].formatted_address`.

## Conclusioni

Questo è solo un esempio di creazione della mappa utilizzando le **Geolocation API di HTML5** e quelle di **Google Maps**. Creare una mappa è abbastanza semplice, quindi è possibile personalizzarla utilizzando tutti i tipi di metodi e proprietà delle API; per saperne di più date un’occhiata alla [documentazione delle Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview?hl=it 'Google Maps JavaScript API V3').
