# This 🔍
O comportamento do **this** no JavaScript depende do contexto `context` ou do escopo `scope`. 

## Escopo vs. Contexto💡
1. Escopo (`scope`)
    - Tem o **acesso** as variáveis, funções e objetos numa parte do código, durante o tempo de execução.
        - Determina a **visibilidade** desses recursos em alguma parte do código. 
    - Sempre que invocamos uma função, estamos criando um novo `scope`. 
2. Contexto (`context`)
    - Enquanto o `scope` se refere às diversas variáveis, o `context` se refere ao valor do `this` no mesmo `scope`.
    - Pode ser mudado com funções especiais, como: `.apply()`, `.call()` e `.bind()`.
    - No contexto de execução `execution context` o contexto já não é mais esse contexto que estamos discutindo. Ele será o 
    `scope`.
    - Temos 2 `scopes`:
        1. **Global**
            - No momento que começamos a escrever o código, estamos neste contexto.
            - Existe enquanto existir a aplicação. 
        2. **Local**
            - Dentro de alguma função, variáveis estão no escopo (contexto) local.
            - Existe enquanto existir a função ou o objeto.
## Modo Estrito (`strict mode`)💡
- Muda a semântica do javascript.
- É opcional.
- usamos '`use strict`' para habilitá-lo no contexto.
- Elima alguns erros.
- Proíbe algumas sintaxes. 

## Browser 🔥 
No contexto dos browser's, o escopo local consegue, em funções, ter acesso ao escopo global (_bem louco isso, né? 😆_). No entanto, como era de se esperar em todos os casos, o escopo local de métodos (funções em objetos) não possuem o acesso ao escopo global. Para padronizar, portanto, usa-se o `'use strict'` (ver a pasta Browser). 



