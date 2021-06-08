# Promises 
`Promise` é um objeto que representa o sucesso ou a falha de uma operação assíncrona. 

-> Promises são responsáveis por modelar o comportamento assíncrono na linguagem, permitindo trata-lo de forma mais simples e direta. 

As `promises` recebem por argumento uma função que tem dois parâmetros que - por convensão - são `(resolve, reject)`. O primeiro é invocado no sucesso da operação assíncrona, e o segundo no contrário:
```javascript
 const aPromise = new Promise((resolve, reject) => {
     //...
 })
``` 
O método `.then()` é responsável por receber a resposta de sucesso da promise. Além disso, cada método `.then()` retorna uma nova promise, podendo ser encadeados:
```javascript
aPromise.then(valueReceiveOfResolve=> valueReceiveOfResolve ).then(valueReceiveOfResolve  => console.log(valueReceiveOfResolve))
```

O tratamento de excessões em promises é feito atráves do método `.catch()`, ele é acoplado ao método `.then()` e só é invocado quando o `.then()` retorna algum erro, ou quando o parâmetro `reject` é invocado na promise. Além disso, ele recebe o valor passado ao `reject`:

```javascript
aPromise
    .then()
    .catch(valueReceiveOfReject => 
        console.log(valueReceiveOfReject));
```