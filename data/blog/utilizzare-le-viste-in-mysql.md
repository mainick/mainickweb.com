---
title: 'Utilizzare le Viste in MySQL'
date: '2010-08-05T07:00:00+01:00'
status: publish
permalink: /utilizzare-le-viste-in-mysql
author: 'Maico Orazio'
excerpt: ''
type: post
id: 501
thumbnail: /static/images/posts/logo-mysql.webp
category:
  - MySQL
  - snippets
tag:
  - MySQL
  - snippets
post_format: []
---

![MySQL](/static/images/posts/logo-mysql.webp)

Un errore particolarmente importante che fanno molti programmatori è mescolare la **logica applicativa e il modello**. Gli sviluppatori PHP, ad esempio, hanno la tendenza di mettere insieme una quantità tremenda di query SQL nella loro logica del sito web, con conseguente codice impossibile da mantenere. Un buon numero di prodotti sono emersi per aiutare gli sviluppatori per evitare ciò, soprattutto framework MVC come Symfony o Zend Framework.

Tuttavia, se si sta utilizzando un framework MVC o codice personalizzato, si può ulteriormente separare la logica dal modello, approfittando di due funzioni dei database relazionali, **Viste** e [**stored procedure**](http://it.wikipedia.org/wiki/Stored_procedure 'Stored procedure - Wikipedia'). Entrambe le funzioni consentono di spostare la logica applicativa all’**interno del server del database stesso**, minimizzando in tal modo la serie di modifica da fare in secondo momento a causa di (_rifattorizzazione_) **refactoring del codice**.

Le viste sono essenzialmente alisa query che permettono di semplificare notevolmente la sintassi utilizzata per eseguire lunghe query, come ad esempio una _join_.  
Ad esempio, supponiamo che stiamo costruendo un sito e-commerce e che deve fornire ai clienti un modo semplice per visualizzare i loro prodotti precedentemente acquistati. Questa caratteristiche comporta spesso l’uso di una _join_, come la seguente:

```sql
SELECT p.id as id, p.titolo as titolo FROM prodotti p LEFT JOIN ordine_dettagli od ON od.prodotto_id = p.id
LEFT JOIN ordini o ON o.id = od.ordini_id WHERE o.cliente_id='12345';
```

Utilizzando una vista è possibile eliminare molti dei problemi che circondano l’incorporamento di query complesse, solo un alias al posto della join come questo:

```sql
SELECT * from prodotti_clienti_join WHERE o.cliente_id = '12345';
```

Per creare una vista, accedere al vostro client MySQL o tool Web-based, come [phpMyAdmin](http://www.phpmyadmin.net/ 'Sito web phpMyAdmin'), ed eseguire la seguente query:

```sql
CREATE VIEW prodotti_clienti_join AS SELECT p.id as id, p.titolo as titolo FROM prodotti p
LEFT JOIN ordine_dettagli od ON od.prodotto_id = p.id LEFT JOIN ordini o ON o.id = od.ordini_id;
```

Dopo aver creato la vista, se si decide di aggiungere un’altra colonna ad essa, tutto quello che dovete fare è accedere nuovamente al client MySQL e utilizzare l’istruzione [_ALTER VIEW_](http://dev.mysql.com/doc/refman/5.1/en/alter-view.html). Dopo che la vista è stata cambiata, la colonna nuova sarà immediatamente disponibile all’interno di ogni set di record recuperato dalla query vista.
