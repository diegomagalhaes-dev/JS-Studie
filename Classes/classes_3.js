// Quero ter acesso, no objeto instanciado de OutherClass apenas os métodos method01 e method02

// -> Usando a abordagem de classes
class MyClass {
    method1() {
        return `Method 01`;
    }

    outherMethod() {
        return `Outher method`;
    }
}

class OutherClass extends MyClass {
    method2() {
        return `Method 02`;
    }
}

const obj1 = new OutherClass();

console.log(obj1.method1, obj1.method2, obj1.outherMethod); // --> Usando herança não é possível obter o resultado desejado (problema de acoplamento)

// -> Usando a abordagem de objetos literais
const method01 = {
    method01() {
        return `Method 01`;
    }
}

const method02 = {
    method02() {
        return `Method 02`;
    }
}

const outherMethod = {
    outherMethod() {
        return `Outher method`;
    }
}

const instance = { ...method01, ...method02 };

console.log(instance.method01, instance.method02); // -> Retorna, pois eles COMPÕEM o objeto instance

console.log(instance.outherMethod()); //-> ERROR: outherMethod() não faz parte do objeto instance

