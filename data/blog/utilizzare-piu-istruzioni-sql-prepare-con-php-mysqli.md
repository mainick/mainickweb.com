---
title: 'Utilizzare più istruzioni SQL prepare con PHP MySQLi'
date: '2010-02-11T08:00:41+01:00'
status: publish
permalink: /utilizzare-piu-istruzioni-sql-prepare-con-php-mysqli
author: 'Maico Orazio'
excerpt: ''
type: post
id: 360
category:
  - MySQL
  - PHP
tag:
  - MySQL
  - mysqli
  - PHP
post_format: []
---

Giorni fa in ufficio, durante lo sviluppo di un’applicazione di gestione, mi sono imbattuto in un errore causato dal tentativo di utilizzare più istruzioni `prepare` di [MySQLi](http://www.php.net/manual/en/book.mysqli.php 'PHP MySQL Improved Extension').  
Ieri ho trovato un articolo che mi ha risolto il problema: Carson McDonald spiega quale sia la causa che genera l’errore e come è possibile utilizzare più istruzioni SQL `prepare` per l’esecuzione.

Carson McDonald ha scoperto l’errore quando ha cercato di eseguire una dichiarazione `prepare` in un ciclo su un set di risultati di un’altra istruzione preparata, dichiarata precedentemente il ciclo ma create entrambe sulla stessa connessione.

Cercando dettagli sull’errore generato nella [documentazione di MySQL](http://dev.mysql.com/doc/refman/5.0/en/commands-out-of-sync.html), emerge che il set di risultati di un’istruzione `prepare` eseguita devono essere scaricati completamente prima di eseguire un’altra istruzione preparata sulla stessa connessione.

Il problema può essere semplicemente risolto utilizzando l’istruzione [**store_result**](http://php.net/manual/en/mysqli-stmt.store-result.php) che trasferisce un set di risultati da una dichiarazione `prepare`.

Riporto lo stesso esempio analizzato nel suo articolo da McDonald:

```php
< ?php
  $db_connection = new mysqli('127.0.0.1', 'user', '', 'test');
  $post_stmt = $db_connection->prepare("select id, title from post where id = 1000");
  $comment_stmt = $db_connection->prepare("select user_id from comment where post_id = ?");
  if ($post_stmt->execute()) {
    $post_stmt->bind_result($post_id, $title);
    if ($post_stmt->fetch()) {
      $comments = array();
      $comment_stmt->bind_param('i', $post_id);
      if ($comment_stmt->execute()) {
        $comment_stmt->bind_result($user_id);
        while ($comment_stmt->fetch()) {
          array_push($comments, array('user_id' => $user_id));
        }
      } else {
        printf("Comment statement error: %s\n", $comment_stmt->error);
      }
    }
  } else {
    printf("Post statement error: %s\n", $post_stmt->error);
  }

  $post_stmt->close();
  $comment_stmt->close();
  $db_connection->close();

  printf("ID: %d -> %s\n", $post_id, $post_title);
  print_r($comments);
?>
```

il codice sopra comporterà il seguente errore:

```bash
Comment statement error: Commands out of sync; you can't run this command now
PHP Notice:  Undefined variable: post_title in error.php on line 41
ID: 9033 -&gt;
Array
(
)
```

Inserendo l’istruzione `store_result` risolviamo il problema:

```php
< ?php
  $db_connection = new mysqli('127.0.0.1', 'user', '', 'test');
  $post_stmt = $db_connection->prepare("select id, title from post where id = 1000");
  $comment_stmt = $db_connection->prepare("select user_id from comment where post_id = ?");
  if ($post_stmt->execute()) {
    //se eseguita correttamente scarico il set di risultati
    $post_stmt->store_result();
    $post_stmt->bind_result($post_id, $title);
    if ($post_stmt->fetch()) {
      $comments = array();
      $comment_stmt->bind_param('i', $post_id);
      if ($comment_stmt->execute()) {
        $comment_stmt->bind_result($user_id);
        while ($comment_stmt->fetch()) {
          array_push($comments, array('user_id' => $user_id));
        }
      } else {
        printf("Comment statement error: %s\n", $comment_stmt->error);
      }
    }
    $post_stmt->free_result();
  } else {
    printf("Post statement error: %s\n", $post_stmt->error);
  }

  $post_stmt->close();
  $comment_stmt->close();
  $db_connection->close();

  printf("ID: %d -> %s\n", $post_id, $post_title);
  print_r($comments);
?>
```

Come è stato utile per me, spero di aver fatto cosa buona anche per voi.  
Se avete utilizzato un’altra soluzione datemene notizia nei commenti.

\[Fonte: [IONCANNON](http://www.ioncannon.net/programming/889/php-mysqli-and-multiple-prepared-statements/ 'PHP MySQLi and Multiple Prepared Statements')\]
