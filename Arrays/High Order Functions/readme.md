# Array: High Order Functions 
## o que são? 
Funções que **recebem** ou **retornam** outras funções 

```javascript
// Exemplo 01
const numbers = [1,2,3,4];

const numbers++ = numbers.map((number)=>{
    return number+1;
});
```
### Outros exemplos: 
~~~javascript
.reduce()
.find()
.filter()
~~~
# Seguem o princípio da Imutabilidade:
## Filter ()
O filter filtra o array e retorna um novo array contendo os elementos com base nas **condições** especificadas. 

## Find ()
O find itera sobre o array e retorna um novo array contendo o primeiro elemento que corresponda as **condições** especificadas.

## Map()
O map retorna um novo array **respeitando o tamanho do array original**, mesmo que tenha que retornar este array com elementos "undefined".

## Reduce()
Ele reduz um objeto a um valor único e retorna o que especificamos para ele. Temos nele os seguintes parâmetros: ``(callBackfn(valorAnterior, valorAtual, indexAtual, array) => {retorno}, valorInicial)``
* Nem todos os parâmetros são obrigatórios. 
* O ```valorInicial``` pode assumir diferentes tipos: `{}, [] ...` 
* O ``valorAnterior`` é o acumulador do método reduce e se inicia com o valor especificado em ``valorInicial``. A função - ```callBackfn``` - é chamada durante toda a iteração pelo array. A ideia é que o valor do parâmetro ```valorAnterior``` seja diferente a cada invocação, pois ele é cumulativo e se altera com base no retorno que especificamos na função. 

## Sort()
O sort serve para ordenar os elementos de um array baseado no unicode. 
* Caso uma comparação, por exemplo `(a - b)`, retorne um valor negativo, significa que `b` é maior que `a`, portanto `b` estará ordenado acima de `a`. 


# Não segue o princípio da Imutabilidade:
## forEach()
o forEach - diferente da maior parte das high order functions - não retorna por si só um novo objeto.   
