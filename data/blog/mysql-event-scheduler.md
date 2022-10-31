---
title: 'MySQL Event Scheduler'
date: '2012-12-17T07:30:12+01:00'
status: publish
permalink: /mysql-event-scheduler
author: 'Maico Orazio'
excerpt: ''
type: post
id: 760
images: /static/images/posts/logo-mysql.webp
category:
  - MySQL
tag:
  - event
  - MySQL
post_format: []
_yoast_wpseo_content_score:
  - '90'
---

![MySQL](/static/images/posts/logo-mysql.webp)

Nel gestire grandi applicazioni Web si possono avere un sacco di righe di dati indesiderate. Ad esempio se un e-commerce è realizzato in modo da memorizzare in modo permanente la gestione del carrello dinamico, oppure la permanenza di vecchi listini divisi per gruppi d’acquisto, avremo la necessità nel tempo di cancellare questi dati dal database.

In questo articolo voglio spiegare un semplice suggerimento come utilizzare i MySQL Event Scheduler per l’eliminazione di righe di dati non più desiderati nel database.

Per abilitare la schedulazione degli eventi in MySQL bisogna eseguire la seguente query in PhpMyAdmin o in un qualsiasi altro ide per la gestione del vostro database:

```sql
SET GLOBAL event_scheduler = ON;
o
SET GLOBAL event_scheduler = 1;
```

Di seguito la query per creare un evento che ogni giorno cancella i dati dalla tabella del carrello di 10 giorni fà:

```sql
CREATE EVENT newEvent
ON SCHEDULE EVERY 1 DAY
DO
DELETE FROM cart WHERE created_at &lt;= DATE_SUB(NOW(), INTERVAL 10 DAY) ;
```

Se si desidera modificare il tempo di esecuzione di un evento è possibile eseguendo la seguente query:

```sql
ALTER newEvent
ON SCHEDULE EVERY 5 HOUR
STARTS TIMESTAMP + 3 HOUR
```

Possiamo visualizzare tutti gli eventi in esecuzione:

```sql
SHOW EVENTS;
```

ed eliminare un evento:

```sql
DROP EVENT newEvents;
```
