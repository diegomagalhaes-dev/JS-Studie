# Generators ( function* ) 🔎

➡️  Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop, de forma **cooperativa**. Os gerators são bastante utilizados para a implementação de funções "pausáveis". 

<br>
<h3 style="color:#FF9300; font-weight:400; letter-spacing:.05em;">Métodos de Generator Functions</h3>

**next()**
<br>
Os generators utilizam o método Next para iterar sobre os valores disponíveis durante a execução da função. <br>
O retorno do método *Next*  é um objeto contento ***value*** e ***done***, conforme o protocolo de iteração da linguagem. <br>
Por meio do *Next* é possível ***passar*** valores para o generator. 
<br><br>
**yield**
<br>
Ao encontrar um *yield*, a execução da função é pausada até o método next ser invocado novamente.  <br>
Por meio do *yield* é possível retornar valores, de forma similar ao return. 
<br><br>
**return()** <br>
O return encerra o fluxo de execução do generator, tornando *done: true*.
<br><br>
**throw()** <br>
O métoro *throw* retorna um erro na execução do generator, e pode ser encadeada com *try.catch()*.
<br> <br>
<h3 style="color:#FF9300; font-weight:400; letter-spacing:.05em;">Algumas utilizações de Generators</h3>

**Criar Iterações** 
<br>
Utilizando os generators, é possível criar iterações através do protocolo *Iterable* de maneira mais simples e direta ([veja o exemplo](https://github.com/diegomagalhaes-dev/JS-Studie/blob/master/Generators/generators_2.js)).
<br><br>
**Sincronizar chamadas assíncronas**
