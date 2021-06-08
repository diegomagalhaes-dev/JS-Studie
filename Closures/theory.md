# Closures em JavaScript 
## Conceito 
As funções em JavaScript são closures pois elas **lembram** do seu escopo léxico, mesmo quando são executadas fora dele. 

A busca do escopo ocorre em uma ação de cadeia. Ou seja, caso a função não encontre o que busca no seu escopo imediato ("pai") ela - sucessivamente - em um grau acima ("avo"...). 
```javascript
const number = 20;

function modifyNumber(){
    return function addThree(){
        return number + 3;
    }
}

console.log(modifyNumber()()); // 23 
```