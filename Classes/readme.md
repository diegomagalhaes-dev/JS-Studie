# Classes 🔎 

💡 As classes em Java Script são uma abstração da `prototype inheritance`, pois a linguagem não é de fato baseada em `OOP` ([veja mais](https://github.com/diegomagalhaes-dev/JS-Studie/blob/master/Function/new02_Funcao_Construtora.js)).


➡️ Os métodos criados com o operador `static` são normalmente usados para operar a própria classe, e não os objetos criados a partir dela. 
```javascript
class Person{
    .
    .
    .
    static nameClass(){
        return this.name;
    }
}

Person.nameClass() // -> Note que a invocação dos métodos estáticos ocorrem com a própria classe, e não com suas instâncias. 
```

💡 Existem diversos problemas na aplicação de `OOP`  em Java Script, o princpal deles é a impossibilidade de trabalhar de forma simples com `privacy` dos atributos de uma Classe, tendo em vista que - ao contrário de linguagens OO - não temos palavras reservadas para isso. Outro ponto a se considerar são os problemas de `acoplamento` causados pela herança de Classes, onde não podemos selecionar em um objeto instanciado os métodos que desejamos. Sendo assim, em geral, é preferível `composição` ao invés de herança(`acoplamento`) (<a href="https://github.com/diegomagalhaes-dev/JS-Studie/blob/master/Classes/classes_3.js">veja o exemplo</a>).