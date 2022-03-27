---
title: 'Come rendere il database più sicuro'
date: '2011-05-09T07:30:00+01:00'
status: publish
permalink: /come-rendere-il-database-pi-sicuro
author: 'Maico Orazio'
excerpt: ''
type: post
id: 657
images: /static/images/posts/sql-inject.jpg
category:
  - MySQL
  - PHP
tag:
  - php
  - mysql
post_format: []
---

![SQL inject](/static/images/posts/sql-inject.jpg)

Se hai un sito web in cui memorizzi dati dell’utente è probabile che utilizzi un database, come MySQL, SQLite o altro, ed è importante assicurarsi che il proprio **database sia sicuro** da e per gli utenti.

Creare istruzioni di query al volo come la sequente:

```php
$sql = "INSERT INTO commenti (nome, commento) VALUES (".$nome.",".$commento.")";
```

è considerata una cattiva pratica che può essere facilmente superata, eliminando la maggior parte dei problemi, utilizzando **dichiarazioni SQL prepare**.

Realizzare istruzioni SQL come la precedente può essere rischioso. Se un utente malizioso invia, tramite il modulo del commento, una istruzione SQL appositamente predisposta, è possibile eseguire query al database. Invece, è necessario utilizzare **dichiarazioni prepare** come questa:

```php
$sql = $db->prepare('INSERT INTO commenti (nome, commento) VALUES (?,?)');
```

aggiungere poi i valori singolarmente

```php
$sql->bindParam(1, $nome);
$sql->bindParam(2, $commento);
```

e infine eseguire la query

```php
$sql->execute();
```

Si trattano di poche righe in più, ma che rendono il vostro **codice molto più sicuro**.

Non solo il database deve essere al sicuro contro le query non intenzionali, ma anche gli utenti.  
Se qualcuno è in grado di memorizzare un commento che sarà visualizzato da tutti gli altri utenti, allora l’input deve essere limitato a quello che ci aspettiamo, come in questo caso solo testo. Se invece permettiamo di scrivere codice HTML, un utente malizioso potrebbe caricare un malware da un altro sito, il classico exploit XSS.

Una soluzione semplice può essere l’utilizzo di funzioni per **sterilizzare l’input**, dunque sostituire, come nel caso citato, i tag HTML con quelli innocui.  
Ad esempio, in un codice PHP che si interfaccia con un database MySQL è possibile utilizzare:

```php
$nome = mysql_real_escape_string($_POST['nome']);
```

che inserisce l’escape davanti a caratteri speciali in una istruzione SQL.

Puoi leggere l’articolo su come [utilizzare più istruzioni SQL prepare con PHP](/blog/utilizzare-piu-istruzioni-sql-prepare-con-php-mysqli/ 'Utilizzare più istruzioni SQL prepare con PHP') per approfondire l’argomento, e risolvere il problema di utilizzare più dichiarazioni SQL prepare per l’esecuzione.
