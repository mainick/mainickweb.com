---
title: 'Come testare un service privato in Symfony'
date: '2023-01-23T07:30:12+01:00'
status: publish
permalink: /come-testare-un-service-privato-in-symfony
author: 'Maico Orazio'
excerpt: ''
type: post
id: 901
images: /static/images/posts/logo-symfony.webp
category:
  - PHP
tag:
  - appunti-dev
  - php
  - symfony
  - tdd
  - test
post_format: []
---

![Symfony](/static/images/posts/logo-symfony.webp)

In Symfony 3.4 hanno reso tutti i services privati per impostazione predefinita, il che significa che non è più
possibile richiamare `$this->get('my_service_id')` nei propri controller per ottenere rapidamente un service.

È stata apportata questa modifica perché l'**utilizzo diretto dal container di services non è considerato una buona pratica**.
Ecco perché i controller consentono l'iniezione dei services con il [Type Hinting](https://symfony.com/doc/current/service_container.html#fetching-and-using-services 'suggerimento del tipo')
nei loro metodi e nei loro constructor.

L'unico inconveniente rimasto è che eseguendo i test otteniamo quanto segue

```shell
> bin/phpunit
# Symfony\Component\DependencyInjection\Exception\ServiceNotFoundException: The "App\Service\S" service or alias has
# been removed or inlined when the container was compiled. You should either make it public, or stop using the container
# directly and use dependency injection instead.
```

### Problema

Vogliamo creare un service e testarlo prima di integrarlo con il resto del progetto
(approccio [**TDD**](https://it.wikipedia.org/wiki/Test_driven_development 'test-driven development') standard).

Ho un repository `R` che implementa l'interfaccia `RInterface`. L'interfaccia `RInterface` viene utilizzata nel
service `S` (type hinted constructor). Il service `S` è utilizzato nel controller `C` (sempre come parametro del constructor).

Quando eseguiamo il test del service `S`

```php
class STest extends KernelTestCase
{
	public function testGetItems(): void
	{
		self::bootKernel();
		$container = self::$kernel->getContainer();

		$service = $container->get(S::class);
		// ... altro
	}
}
```

Visualizziamo il seguente messaggio:

```shell
> bin/phpunit
# Symfony\Component\DependencyInjection\Exception\ServiceNotFoundException: The "App\Service\S" service or alias has
# been removed or inlined when the container was compiled. You should either make it public, or stop using the container
# directly and use dependency injection instead.
```

### Motivo

Il service può essere integrato quando vengono [soddisfatte alcune condizioni](https://github.com/symfony/dependency-injection/blob/6.1/Compiler/InlineServiceDefinitionsPass.php#L158 'Checks if the definition is inlineable').

Per verificare se il service `S` è presente nel container di test, digitiamo il seguente comando:

```shell
> bin/console debug:container 'App\Service\S' --env=test
```

Di seguito il messaggio che visualizzeremo:

```shell
Information for Service "App\Core\Service\S"
=========================================================

 ---------------- ---------------------------------
  Option           Value
 ---------------- ---------------------------------
  Service ID       App\Service\S
  Class            App\Service\S
  Tags             -
  Public           no
  Synthetic        no
  Lazy             no
  Shared           yes
  Abstract         no
  Autowired        yes
  Autoconfigured   yes
 ---------------- ---------------------------------
```

Come riportato nel messaggio ricevuto eseguendo il test, il service `S` risulta privato (`Public: no`).
Bisogna tenere presente che, a causa di come funziona il container di Symfony, i **services inutilizzati vengono
rimossi dal container**. Ciò significa che se si dispone di un service privato non utilizzato da nessun altro service,
Symfony lo rimuove e non è possibile ottenerlo dal container.

### Soluzione

La soluzione è definire esplicitamente il service `public` in modo che Symfony non lo rimuova.
La soluzione più corretta sarebbe quella di creare un alias pubblico solo nell'ambiente di test per il service che
si desidera testare.

```yaml
# config/services_test.yaml
services:
  test_alias.service:s:
    alias: 'App\Service\S'
    public: true
```

> Buon lavoro 👨‍💻
