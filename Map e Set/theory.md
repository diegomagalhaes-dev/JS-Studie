# Map
O map é um objeto que armazena um conjunto de **chaves** e **valores** que podem ser de qualquer tipo de dado. 
### Operações:
- **size:** retorna a qtd de elementos
- **set:** Adiciona um par de chave e valor
- **forEach:** Itera sobre o mapa
- **has:** retorna true se a chave existir
- **get:** retorna o valor de uma determinada chave
- **delete:** remove um par de chave e valor
- **clear:** remove todos os elementos
### Map vs Object:
A principal diferença entres os Map's e os Object's é que, enquanto os Object's aceitam keys apenas do tipo String, nos Map's elas podem ser de outros tipos.

# WeakMap
O WeakMap é um objeto, similar ao Map, que **permite apenas chaves do tipo Object**, e mantém as referências de forma _fraca_, sendo volátil e **não iterável**.
### Utilidade:
Por aceitar apenas chaves do tipo Object, as coleções do tipo WeakMap tem referência fraca: no momento em que os objetos da coleção deixam de ser referenciados, eles se tornam elegíveis para o Garbage Colletor, sem que tenhamos que nos preocupar em tirá-los da memória.  
### Operações: 
- **set:** adiciona um par de chave e valor
- **has:** retorna true se a chave existir
- **get:** retorna o valor de uma determinada chave
- **delete:** remove um par de chave e valor 

# Set
Um Set é um objeto que armazena *elementos* únicos, que podem ser de qualquer tipo de dado.
### Operações: 
- **size:** retorna a qtd de elementos
- **add:** adiciona um elemento ao conjunto
- **has:** retorna true se o elemento existir
- **forEach:** itera sobre o conjunto
- **delete:** deleta um elemento e retorna true
- **clear:** limpa toda a estrutura (elementos contidos nela)

### Set vs Arrays
A principal diferença é que as estruturas do tipo Set não permitem *elementos duplicados*.

# WeakSet
O weakset é um objeto, similar ao Set, que *permite apenas valores do tipo Object* e mantém as referências de forma fraca, sendo volátil e *não iterável*. 
### Utilidade:
Por aceitar apenas valores do tipo Object, as coleções do tipo WeakSet tem referência fraca: no momento em que os objetos da coleção deixam de ser referenciados, eles se tornam elegíveis para o Garbage Colletor, sem que tenhamos que nos preocupar em tirá-los da memória.  

### Operações:
- **add:** adiciona um elemento
- **has:** retorna true se o elemento existir
- **delete:** remove um elemento