---
title: 'Observer Pattern - Design Patterns'
date: '2023-05-07T07:30:09+01:00'
status: publish
permalink: /observer-pattern-design-patterns
author: 'Maico Orazio'
excerpt: 'Il pattern Observer (anche noto come Publisher-Subscriber) è un pattern comportamentale che consente ad un oggetto, detto subject (soggetto), di notificare ad un insieme di oggetti dipendenti, detti observers (osservatori), un cambiamento di stato.'
type: post
id: 908
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

Terzo articolo della serie [**Design Patterns**](https://www.mainickweb.com/tags/design-patterns). Procediamo con l'Observer pattern.

## Definizione

Il pattern **Observer (*anche noto come Publisher-Subscriber*) è un pattern comportamentale** che consente ad un 
oggetto, detto "subject" (soggetto), di notificare ad un insieme di oggetti dipendenti, detti "observers" 
(osservatori), un cambiamento di stato.

La teoria del pattern Observer afferma che ci possono essere situazioni in cui una o più parti di un sistema devono 
essere informate quando uno stato interno di un'altra parte cambia. Invece di far dipendere queste parti l'una 
dall'altra direttamente, il **pattern Observer suggerisce di utilizzare un soggetto (subject) intermedio che 
notifichi gli osservatori (observers) quando lo stato cambia**.

Il soggetto mantiene una lista di riferimenti agli osservatori e fornisce metodi per l'aggiunta e la rimozione di 
osservatori da questa lista. Quando lo stato del soggetto cambia, esso notifica tutti gli osservatori registrati, 
richiamando un metodo di notifica sull'interfaccia di ogni osservatore.

In questo modo, gli osservatori possono rimanere disaccoppiati dal soggetto e non hanno bisogno di conoscere il suo 
stato interno. Ciò consente di **ridurre la dipendenza tra le parti del sistema e di rendere il codice più modulare 
e flessibile**.

## Casi d'uso

Ecco alcuni casi d'uso comuni del pattern Observer:
* **GUI**: è spesso utilizzato per gestire eventi e notificare gli oggetti che dipendono da essi nelle interfacce utente. Ad esempio, un pulsante di una GUI potrebbe notificare gli oggetti dipendenti quando viene cliccato.
* **Notifiche**: può essere utilizzato per implementare un sistema di notifiche in cui i soggetti inviano notifiche agli osservatori quando si verificano determinati eventi. Ad esempio, un servizio di posta elettronica potrebbe notificare gli utenti quando ricevono un nuovo messaggio.
* **Logica di business**: può essere utilizzato per separare la logica di business dal codice che gestisce l'interfaccia utente o altre parti del sistema. Ad esempio, una classe che rappresenta un ordine potrebbe notificare gli oggetti dipendenti quando viene aggiornata.
* **Gestione degli errori**: può essere utilizzato per gestire gli errori in modo centralizzato e notificare gli oggetti dipendenti quando si verifica un errore. Ad esempio, una classe che rappresenta un servizio web potrebbe notificare gli oggetti dipendenti quando si verifica un errore durante la connessione.
* **Integrazione di sistemi**: può essere utilizzato per integrare sistemi diversi che dipendono l'uno dall'altro. Ad esempio, un sistema di gestione delle scorte potrebbe notificare un sistema di contabilità quando vengono effettuate determinate transazioni.

## Esempio pratico

Implementiamo un esempio pratico del pattern Observer in PHP:

```php
<?php
// Definiamo l'interfaccia dell'osservatore
interface Observer 
{
    public function update($subject);
}

// Definiamo la classe del soggetto
class Subject 
{
    private $observers = array();
    private $state;
    
    public function attach(Observer $observer) 
    {
        $this->observers[] = $observer;
    }
    
    public function detach(Observer $observer) 
    {
        $key = array_search($observer, $this->observers, true);
        if ($key !== false) {
            unset($this->observers[$key]);
        }
    }
    
    public function setState($state) 
    {
        $this->state = $state;
        $this->notify();
    }
    
    public function getState() 
    {
        return $this->state;
    }
    
    public function notify() 
    {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }
}

// Definiamo la classe di un possibile osservatore
class ExampleObserver implements Observer 
{
    private $name;
    
    public function __construct($name) 
    {
        $this->name = $name;
    }
    
    public function update($subject) 
    {
        $state = $subject->getState();
        echo "Osservatore {$this->name} ha ricevuto una notifica di cambio di stato. Nuovo stato: {$state}\n";
    }
}

// Creiamo un soggetto e due osservatori
$subject = new Subject();
$observer1 = new ExampleObserver("Osservatore 1");
$observer2 = new ExampleObserver("Osservatore 2");

// Registriamo gli osservatori al soggetto
$subject->attach($observer1);
$subject->attach($observer2);

// Cambiamo lo stato del soggetto e notifichiamo gli osservatori
$subject->setState("Stato 1");

// Rimuoviamo un osservatore dal soggetto
$subject->detach($observer2);

// Cambiamo nuovamente lo stato del soggetto e notifichiamo gli osservatori rimanenti
$subject->setState("Stato 2");
```

In questo esempio, abbiamo definito un'interfaccia `Observer` che definisce un metodo `update()`, il quale viene 
richiamato dal soggetto quando lo stato cambia. Abbiamo quindi definito una classe `Subject` che mantiene una lista 
di osservatori registrati e fornisce i metodi:

* `attach()`: per gestire l'aggiunta di un osservatore
* `detach()`: per gestire la rimozione di un osservatore
* `setState`: per modificare lo stato del soggetto
* `getState`: per recuperare lo stato corrente del soggetto
* `notify()`: per notificare gli osservatori.

Abbiamo quindi creato una classe `ExampleObserver` che implementa l'interfaccia `Observer` e definisce il 
comportamento da adottare quando avviene la notifica del cambiamento di stato del soggetto.

Nella restante parte del codice abbiamo utilizzato le classi implementate per eseguire un possibile scenario del 
pattern Observer. Abbiamo creato un'istanza del soggetto, due istanze di osservatori, li abbiamo registrati al 
soggetto, abbiamo cambiato lo stato del soggetto e notificato gli osservatori. Abbiamo quindi rimosso un osservatore 
dal soggetto, abbiamo cambiato nuovamente lo stato del soggetto e notificato gli osservatori rimanenti.

Di seguito il risultato di ciò che abbiamo implementato:

```shell
Osservatore Osservatore 1 ha ricevuto una notifica di cambio di stato. Nuovo stato: Stato 1
Osservatore Osservatore 2 ha ricevuto una notifica di cambio di stato. Nuovo stato: Stato 1
Osservatore Osservatore 1 ha ricevuto una notifica di cambio di stato. Nuovo stato: Stato 2
```

## Conclusione

In sintesi, il pattern Observer permette di definire una dipendenza uno-a-molti tra oggetti, in modo che quando un 
oggetto cambia stato, tutti gli oggetti dipendenti vengono notificati e aggiornati automaticamente.

> Buon lavoro 👨‍💻
