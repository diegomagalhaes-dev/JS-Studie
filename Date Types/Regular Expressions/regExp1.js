// Declaração e validação

let regExp = /^digengup@gmail.com$/; // O '^' indica com o que o valor deve começar na expressão, e o '$' indica como deve terminar (sem isso a expressão apenas considera que sua formação esteja em algum trecho do valor testado)
let result = regExp.test("digengup@gmail.com");//testa se um dado valor está de acordo com a expressão regular 
let result1 = regExp.exec("digengup@gmail.com");
console.log(result1);