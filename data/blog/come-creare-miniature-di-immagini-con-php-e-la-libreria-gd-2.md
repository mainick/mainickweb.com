---
title: 'Come creare miniature di immagini con PHP e la libreria GD'
date: '2010-05-10T08:00:39+01:00'
status: publish
permalink: /come-creare-miniature-di-immagini-con-php-e-la-libreria-gd-2
author: 'Maico Orazio'
excerpt: ''
type: post
id: 417
images: /static/images/posts/ridimensiona-immagini.jpg
category:
  - PHP
tag:
  - immagini
  - 'libreria GD'
  - PHP
  - thumbnails
post_format: []
---

![ridimensiona-immagini.jpg](/static/images/posts/ridimensiona-immagini.jpg)

In questo tutorial di oggi vedremo come **creare miniature di immagini** con PHP e l’uso della [libreria GD](http://php.net/manual/en/book.image.php 'Manuale libreria GD').

Caricare sul server immagini in dimensioni originali può essere dispendioso per lo spazio a disposizione ma soprattutto per la banda quando bisogna visualizzarle ad ogni richiesta al server.  
In questo caso la libreria GD si rivela utilissima perché permette di poter prendere un’immagine jpg, gif o png e crearne una nuova con **dimensioni ridotte**, quindi **più leggera e più veloce da caricare**.  
Durante il ridimensionamento delle immagini è inoltre possibile ridefinire il livello di compressione, regolando quindi il rapporto qualità/dimensione, rendendo così più veloce il caricamento della miniatura.

Questa funzione php permette il resize di immagini jpeg, gif e png. I parametri da settare per la funzione sono il nome del file da ridimensionare, la cartella dove è presente l’immagine, la cartella dove salvare la nuova immagine e la larghezza della nuova immagine.  
Ho deciso di poter passare solo la larghezza perché una dimensione fissa dei lati dell’immagine potrebbe portare a creare un’immagine che non mantiene le proporzioni e quindi deformata.

## Funzione per creare e salvare sul server un’immagine ridimensionata

```php
/**
 * =---------------------------------------------------------------------=
 * createThumbnail
 * =---------------------------------------------------------------------=
 * Questa funzione creer&agrave; una miniatura dell'immagine caricata.
 *
 * @param $filename	- nome immagine.
 * @param $dir_in		- directory dove &egrave; presente l'immagine.
 * @param $dir_out		- directory dove caricare l'immagine.
 * @param $width_image	- larghezza immagine da creare.
 */
function createThumbnail($filename, $dir_in, $dir_out, $width_image) {
  // apro l'immagine originale (jpeg,gif,png)
  if (preg_match('/[.]jpg$/', $filename)) {
    $im = imagecreatefromjpeg($dir_in.$filename);
  }
  else if (preg_match('/[.]gif$/', $filename)) {
    $im = imagecreatefromgif($dir_in.$filename);
  }
  else if (preg_match('/[.]png$/', $filename)) {
    $im = imagecreatefrompng($dir_in.$filename);
  }
  // calcolo la larghezza e l'altezza dell'immagine originale
  $ox = imagesx($im);
  $oy = imagesy($im);
  // larghezza della miniatura data in input
  $nx = $width_image;
  // altezza calcolata proporzionalmente all'immagine originale
  $ny = floor($oy * ($width_image / $ox));
  // creo l'immagine della miniatura
  $nm = imagecreatetruecolor($nx, $ny);
  // copio l'immagine originale in quella della miniatura ridimensionaldola
  imagecopyresized($nm, $im, 0,0,0,0, $nx, $ny, $ox, $oy);
  // verifico l'esistenza della cartella dove salvare la miniatura
  if (!file_exists($dir_out)) {
    if (!mkdir($dir_out)) {
      die("There was a problem.");
    }
  }
  // salvo l'immagine della miniatura
  if (imagejpeg($nm, $dir_out.$filename)) {
    return TRUE;
  } else {
    return FALSE;
  }
}
```

Con le prime istruzioni condizionali apriamo l’immagine originale sia che essa sia jpeg, gif e png. Poi memorizziamo le dimensioni (larghezza `$ox` e altezza `$oy`) dell’immagine originale e le dimensioni della miniatura da creare; la larghezza `$width_image ` fissa passata in input alla funzione e l’altezza calcolate per mantenere la proporzione e non deformare l’immagine nella miniatura.  
Una volta creata la base per la miniatura, andiamo a copiare il contenuto dell’immagine originale con le nuove dimensioni (`imagecopyresized()`). Copiata l’immagine la salviamo con `imagejpeg()` nel formato jpeg: il terzo parametro, omesso, rappresenta il grado di compressione che può essere un valore variabile da 0 a 100 (più l’immagine è compressa più è leggera e allo stesso tempo più perde di definizione).

Possiamo modificare l’ultima parte della funzione per salvare l’immagine di miniatura nello stesso formato del file originale utilizzando, come nella prima parte, delle istruzioni condizionali e le rispettive funzioni `imagejpeg()`, `imagegif()` e ` imagepng()`, di cui è facile intuire il significato.

In conclusione ricordo che la libreria GD è nativa su PHP a partire dalla versione 4.3.0, questo comporta il non funzionamento della funzione `createThumbnail()` con una versione di PHP inferiore.
