# Async Await 🔎
➡️  O **async await** é uma feature baseada em promises e visa facilitar a interação  com chamadas assíncronas, aguardando o retorno de uma determinada promise e permitindo uma "leitura" síncrona do código, sem a necessidade de `callback chain`.

<br><br>
### **Async**
`async function(){}` <br>
Colocamos a palavra *async* antes da função para indicar que a função é **assíncrona**, fazendo-a retornar uma *promise*.
<br><br>
### **Await**
Ao utilizarmos a palavra *await* dentro de uma função *async*, temos pausado o fluxo de execução da função até que a *promise* seja resolvida. 

<br><br>
### 💡 **Requests Paralelos** 
Quando lidamos com *async* *await* para trabalharmos requisições assíncronas podemos fazer requests paralelos, desde que as requisições sejam independentes umas das outras. 