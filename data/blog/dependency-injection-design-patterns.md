---
title: 'Strategy Pattern - Design Patterns'
date: '2023-04-17T07:30:09+01:00'
status: publish
permalink: /strategy-pattern-design-patterns
author: 'Maico Orazio'
excerpt: 'Il pattern Strategy è un pattern comportamentale che consente di definire una famiglia di algoritmi, incapsularli in classi separate e rendere gli algoritmi intercambiabili. In questo modo, si può selezionare un algoritmo a runtime, in base alla necessità o al contesto specifico.'
type: post
id: 906
images: /static/images/posts/logo-design-patterns.webp
category:
  - Design Patterns 
tag:
  - design-patterns
  - programming
  - appunti-dev
post_format: []
---

![Design Patterns](/static/images/posts/logo-design-patterns.webp)

I **Design Patterns sono soluzioni ricorrenti a problemi comuni nell'ambito dello sviluppo software**. Questi 
pattern rappresentano un insieme di **best practice e linee guida per affrontare situazioni complesse** in modo 
strutturato e ripetibile. L'utilizzo di questi pattern **può migliorare la qualità del codice**, rendendolo più 
leggibile, manutenibile e scalabile.

In questa serie di articoli, esploreremo i design patterns più comuni, fornendo esempi pratici in PHP per aiutarti a 
comprendere come e quando utilizzarli. Impareremo a riconoscere **i problemi che questi pattern possono aiutare a 
risolvere e vedremo come implementarli in modo efficace** all'interno del nostro codice.

Iniziamo questa serie con il pattern Dependency Injection.

## Definizione

La **Dependency Injection (DI) è un pattern architetturale** che viene spesso utilizzato nei progetti software. Il 
suo scopo principale è quello di **migliorare la modularità e la manutenibilità del codice**, riducendo la 
complessità delle dipendenze tra i vari componenti del sistema.

In pratica, il pattern DI prevede di suddividere il codice in una serie di classi e moduli, **ognuno dei quali è 
responsabile di una specifica funzionalità**. Le dipendenze tra questi componenti vengono gestite in modo esplicito, 
utilizzando un meccanismo di "iniezione" delle dipendenze stesse.

Più precisamente, invece di creare e gestire le dipendenze all'interno di ciascuna classe, **il pattern DI prevede 
di definire un "contenitore" di dipendenze**, ovvero un componente che si occupa di creare e fornire istanze di 
tutte le classi che necessitano di altre dipendenze.

In questo modo, le classi che utilizzano le dipendenze non devono preoccuparsi di crearle o gestirle, ma 
semplicemente di richiederle al contenitore. Questo rende il codice più modulare e meno soggetto a errori, 
facilitando anche la manutenzione e il testing del sistema.

Ci sono diverse implementazioni del pattern DI, tra cui l'**Inversion of Control (IoC)**, che prevede di spostare il 
controllo della creazione degli oggetti da una classe ad un framework o ad un contenitore, e il **Service Locator**, 
che prevede di utilizzare un componente apposito per cercare e fornire le dipendenze richieste.

## Casi d'uso

Ecco alcuni casi d'uso in cui il pattern Dependency Injection può risultare utile:

* **Modularità del codice**: utilizzando il pattern DI, possiamo suddividere il codice in una serie di moduli o classi indipendenti, ciascuno dei quali ha un'interfaccia chiara e definita. In questo modo, possiamo modificare o sostituire una classe o un modulo senza dover modificare il codice delle altre parti del sistema.
* **Riusabilità del codice**: utilizzando il pattern DI, possiamo creare componenti software riusabili e configurabili, che possono essere utilizzati in diversi contesti e progetti. Ad esempio, una libreria che fornisce un'implementazione standard di un'interfaccia di database può essere utilizzata in diversi progetti senza dover scrivere codice ad-hoc per ogni progetto.
* **Manutenibilità del codice**: utilizzando il pattern DI, possiamo semplificare la gestione delle dipendenze e migliorare la manutenibilità del codice, in quanto rendiamo esplicite le dipendenze tra i vari componenti del sistema. In questo modo, possiamo identificare e gestire più facilmente eventuali errori o problemi di compatibilità tra le varie parti del sistema.
* **Testing unitario**: il pattern DI rende più facile scrivere test unitari per le classi, in quanto permette di iniettare dipendenze "mock" al posto delle vere implementazioni. In questo modo, possiamo testare la classe in isolamento, senza doverci preoccupare delle sue dipendenze esterne.

> In generale, il pattern DI è particolarmente utile in progetti software di grandi dimensioni o complessità, in cui 
la gestione delle dipendenze tra i vari componenti del sistema può diventare difficile da gestire in modo esplicito.

## Esempio pratico

Esistono molti framework e librerie che supportano il pattern Dependency Injection in PHP. 

Uno dei framework più popolari, che utilizziamo anche in azienda, è [Symfony](https://symfony.com/), un framework php adatto a creare 
applicazioni web e microservizi. Ha un potente contenitore di iniezione delle dipendenze che consente agli 
sviluppatori di gestire facilmente le proprie dipendenze e servizi.

Per l'esempio che andremo a sviluppare in questo articolo, utilizzeremo un contenitore di dipendenze basato sulla 
libreria [PHP-DI](https://php-di.org/), che semplifica la configurazione e l'iniezione delle dipendenze. 

PHP-DI è un popolare contenitore DI facile da usare e indipendente dal framework. È progettato per essere pratico e 
potente tenendo conto delle prestazioni.

Ecco un esempio pratico di utilizzo del **Dependency Injection pattern in PHP**: supponiamo di avere una classe `UserService` che si occupa di gestire gli utenti del nostro sistema, e che ha 
bisogno di utilizzare una classe `UserRepository` per accedere ai dati degli utenti dal database. Invece di creare 
l'istanza di `UserRepository` all'interno della classe `UserService`, utilizziamo il pattern DI per iniettare 
l'istanza di `UserRepository` come dipendenza esterna.

Definiamo il nostro contenitore di dipendenze:

```php
<?php
use DI\ContainerBuilder;

// Creiamo un nuovo contenitore di dipendenze
$containerBuilder = new ContainerBuilder();

// Registriamo la classe UserRepository nel contenitore
$containerBuilder->addDefinitions([
    UserRepository::class => function () {
        return new UserRepository();
    },
]);

// Costruiamo il contenitore
$container = $containerBuilder->build();
```

In questo caso, abbiamo registrato la classe `UserRepository` nel contenitore, e abbiamo definito una funzione 
anonima che viene eseguita ogni volta che viene richiesta un'istanza di `UserRepository`.

A questo punto, possiamo utilizzare il nostro contenitore per iniettare la dipendenza di `UserRepository` nella 
classe `UserService`.

```php
<?php
class UserService
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getUserById($id)
    {
        return $this->userRepository->findById($id);
    }
}
```

Come si può vedere, abbiamo utilizzato il costruttore della classe `UserService` per iniettare l'istanza di 
`UserRepository` come dipendenza. In questo modo, possiamo utilizzare la classe `UserService` per accedere ai dati 
degli utenti, senza doverci preoccupare di creare l'istanza di `UserRepository`.

Utilizziamo il nostro `UserService` con il contenitore di dipendenze:

```php
// Richiediamo l'istanza di UserService al contenitore
$userService = $container->get(UserService::class);

// Utilizziamo il metodo getUserById per ottenere l'utente con ID 1
$user = $userService->getUserById(1);

echo $user->getName(); // Output: "Mario Rossi"
```

Abbiamo utilizzato il metodo `get` del contenitore per ottenere l'istanza di `UserService` con 
tutte le sue dipendenze già iniettate. In questo modo, possiamo utilizzare la nostra classe `UserService` in modo 
semplice e trasparente, **senza doverci preoccupare di creare o gestire le sue dipendenze**.

In sintesi, la Dependency Injection è una tecnica di programmazione che rende una classe indipendente dalle sue 
dipendenze disaccoppiando l'utilizzo di un oggetto dalla sua creazione. Consente la separazione della creazione di 
un oggetto dal suo utilizzo, il che riduce il codice boilerplate nella business logic e consente la sostituzione 
delle dipendenze senza modificare alcun codice.

> Buon lavoro 👨‍💻
