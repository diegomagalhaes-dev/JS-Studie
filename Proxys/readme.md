# Proxy em Java Script 🔍
➡️ As `proxy's` são capazes de **interceptar** um objeto alvo, realizando diversas operações nele. <br> Sempre que, por exemplo, alteramos algo em uma função proxy, podemos colocar alguma IF para que altere também na sua `target`, com base na condição especificada. Isso permite um controle mais reativo do código, podendo ser aplicado em diversos contextos. <br>Por exemplo, um valor, antes de ser enviado para o banco de dados, deve ser colocado em uma máscara.

## Traps
➔ Os traps são métodos para diversos tipos de eventos relacionados a um objeto. Exemplos:
* apply
* construct
* defineProperty
* deleteProperty *(**invocado quando uma propriedade é deletada por meio do operador 'delete'**)*
* get *(**invocado quando uma propriedade é acessada**)*
* has
* set *(**invocado sempre que uma propriedade é definida**)*
* setPrototypeOf
