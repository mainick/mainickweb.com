---
title: 'Notazione heredoc: sistema per specificare stringhe in php'
date: '2008-11-06T07:30:27+01:00'
status: publish
permalink: /notazione-heredoc-sistema-per-specificare-stringhe-in-php
author: 'Maico Orazio'
excerpt: ''
type: post
id: 195
category:
  - PHP
tag:
  - php
  - heredoc
post_format: []
---

Sono disponibili tre sistemi per specificare un valore di stringa

1. _virgolette singole_
2. _virgolette doppie_
3. _notazione heredoc_

Nel primo sistema non sono supportati né l’escaping né l’estensione; quindi ‘\\A’ visualizza solo i due caratteri. Le stringhe con virgolette doppie sono simili a quelle con virgolette singole, a parte il fatto che l’interprete del linguaggio PHP le analizza per trovare e sostituire le sequenze di escape e le variabili.

Il terzo sistema per includere le **stringhe in uno script PHP** è un’innovazione riscontrabile in linguaggi come Perl. Esclude gli apici come delimitatori, e questo è sicuramente un vantaggio perchè ci permette di sfruttarli per ulteriori annidamenti. Le **stringhe heredoc** si comportano come le stringhe delimitate da vingolette doppie anche se non è necessario applicare l’**escaping ad altrettanti caratteri**: è sufficiente effettuare l’escaping dei caratteri $.

In questo caso una stringa inizia con &lt;&lt;&lt; e un identificatore e continua finché PHP non incontra una riga di testo di input che consiste solo nello stesso identificatore allineato a sinistra e in un punto e virgola, senza spazi prima o dopo il (;). L’identificatore ha un unico vincolo: deve contenere solo lettere, numeri e underscore e il primo carattere deve essere una lettera o un underscore.

Nel caso di stringhe di un certo ‘_peso_‘, la notazione heredoc è sicuramente il migliore **delimitatore di stringhe**: è l’ideale per la stesura di grossi blocchi di codice html o javascript (da inviare poi con un unico comando ‘echo’) pur mantenendo un certo ordine di codifica.

```php
<?php
echo <<<HTML
    <p>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book.
    </p>
HTML;
?>
```
