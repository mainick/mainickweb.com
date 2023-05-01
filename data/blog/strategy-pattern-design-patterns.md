---
title: 'Strategy Pattern - Design Patterns'
date: '2023-05-02T07:30:09+01:00'
status: publish
permalink: /strategy-pattern-design-patterns
author: 'Maico Orazio'
excerpt: 'Il pattern Strategy è un pattern comportamentale che consente di definire una famiglia di algoritmi, incapsularli in classi separate e rendere gli algoritmi intercambiabili. In questo modo, si può selezionare un algoritmo a runtime, in base alla necessità o al contesto specifico.'
type: post
id: 907
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

Secondo artico della serie [**Design Patterns**](https://www.mainickweb.com/tags/design-patterns). Procediamo con il pattern Strategy.

## Definizione

Il pattern **Strategy è un pattern comportamentale** che consente di definire una famiglia di algoritmi, 
incapsularli in classi separate e rendere gli algoritmi intercambiabili. In questo modo, si può selezionare un 
algoritmo a runtime, in base alla necessità o al contesto specifico.

In pratica, il pattern Strategy prevede la definizione di una interfaccia o classe astratta (nota come "strategia"), 
che definisce il **comportamento generico che devono implementare tutti gli algoritmi concreti**. Questi ultimi sono 
implementati in classi separate, ciascuna delle quali fornisce un'**implementazione specifica del comportamento 
definito dalla strategia**.

In questo modo, è possibile creare una classe "_context_", che utilizza l'interfaccia della strategia per eseguire 
il comportamento richiesto, senza conoscerne l'implementazione specifica. Il contesto accetta un oggetto strategia 
all'avvio e può facilmente cambiarlo a runtime per adattarsi a nuove esigenze.

Il pattern Strategy è utile in situazioni in cui è necessario **eseguire diverse operazioni o algoritmi a seconda 
del contesto**, ad esempio per eseguire diverse operazioni di ordinamento, selezionare diverse strategie di caching, 
o per applicare diverse politiche di sconto in base alla tipologia di utente.

## Casi d'uso

Ecco alcuni casi d'uso in cui il pattern Strategy potrebbe essere utile:
* **Gestione di diversi algoritmi di elaborazione dei dati**: potrebbe essere utilizzato per selezionare l'algoritmo di compressione più adatto per diversi tipi di file.
* **Gestione di diversi tipi di connessione a database**: potrebbe essere utilizzato per selezionare il tipo di connessione a seconda del tipo di database utilizzato.
* **Gestione di diversi metodi di autenticazione**: potrebbe essere utilizzato per selezionare il metodo di autenticazione a seconda del tipo di sistema o applicazione utilizzata.
* **Gestione di diversi metodi di pagamento**: potrebbe essere utilizzato per selezionare il metodo di pagamento (carta di credito, PayPal, bonifico bancario, ecc.) a seconda del tipo di transazione o dei requisiti del cliente.

## Esempio pratico

Sviluppiamo un esempio pratico riguardo l'ultimo punto riportato nei casi d'uso. 

Definiamo la classe `PaymentStrategy`, l'interfaccia della strategia, che prevede un unico metodo `pay()` che accetta 
l'importo da pagare come parametro.

```php
<?php
interface PaymentStrategy 
{
    public function pay($amount);
}
```

Le classi `CreditCardStrategy` e `PayPalStrategy` implementano questa interfaccia, fornendo due implementazioni 
diverse per il metodo `pay()`, specifiche per la tipologia di pagamento richiesta.

```php
<?php

// Implementazione di una strategia di pagamento con carta di credito
class CreditCardStrategy implements PaymentStrategy 
{
    private $name;
    private $cardNumber;
    private $cvv;
    private $expirationDate;

    public function __construct($name, $cardNumber, $cvv, $expirationDate) 
    {
        $this->name = $name;
        $this->cardNumber = $cardNumber;
        $this->cvv = $cvv;
        $this->expirationDate = $expirationDate;
    }

    public function pay($amount) 
    {
        echo "Pagamento di $amount euro effettuato con carta di credito.";
    }
}

// Implementazione di una strategia di pagamento con PayPal
class PayPalStrategy implements PaymentStrategy 
{
    private $email;
    private $password;

    public function __construct($email, $password) 
    {
        $this->email = $email;
        $this->password = $password;
    }

    public function pay($amount) 
    {
        echo "Pagamento di $amount euro effettuato con PayPal.";
    }
}
```

La classe `ShoppingCart` rappresenta il contesto che utilizza le strategie per effettuare il pagamento. La classe 
tiene traccia dei prodotti aggiunti al carrello (metodo `addItem()`), calcola il totale degli importi dei prodotti 
nel carrello (metodo `calculateTotal()`), e infine effettua il pagamento utilizzando la strategia attualmente 
impostata (metodo `pay()`). La strategia corrente viene impostata con il metodo `setPaymentStrategy()`.

```php
<?php
class ShoppingCart 
{
    private $items = [];
    private $paymentStrategy;

    public function setPaymentStrategy(PaymentStrategy $paymentStrategy) 
    {
        $this->paymentStrategy = $paymentStrategy;
    }

    public function addItem($item) 
    {
        $this->items[] = $item;
    }

    public function calculateTotal() 
    {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item['price'];
        }
        return $total;
    }

    public function pay() 
    {
        $total = $this->calculateTotal();
        $this->paymentStrategy->pay($total);
    }
}
```

Di seguito creiamo un nuovo oggetto `ShoppingCart` e aggiungiamo due prodotti al carrello. Viene quindi creato un 
oggetto `CreditCardStrategy` e utilizzato per effettuare il primo pagamento. Successivamente, viene creato un 
oggetto `PayPalStrategy` e utilizzato per effettuare il secondo pagamento.

```php
<?php
$shoppingCart = new ShoppingCart();
$shoppingCart->addItem(array('name' => 'Prodotto 1', 'price' => 10));
$shoppingCart->addItem(array('name' => 'Prodotto 2', 'price' => 20));

$creditCardStrategy = new CreditCardStrategy('Mario Rossi', '1234567890', '123', '12/24');
$shoppingCart->setPaymentStrategy($creditCardStrategy);
$shoppingCart->pay(); // Pagamento di 30 euro effettuato con carta di credito.

$paypalStrategy = new PayPalStrategy('mario.rossi@example.com', 'password');
$shoppingCart->setPaymentStrategy($paypalStrategy);
$shoppingCart->pay(); // Pagamento di 30 euro effettuato con PayPal.
```

In questo modo, il contesto `ShoppingCart` può facilmente utilizzare diverse strategie di pagamento a seconda delle 
esigenze, senza dover conoscere l'implementazione specifica delle strategie.

## Conclusione

In generale, il pattern Strategy è utile in qualsiasi situazione in cui si ha bisogno di selezionare un algoritmo o 
una strategia specifica a seconda delle esigenze proprie del contesto.

> Buon lavoro 👨‍💻
