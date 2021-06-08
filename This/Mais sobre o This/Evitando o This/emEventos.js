// --> Utilizando o This
const form = document.querySelector('[data-js="form"]')

// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     console.log(this.cep.value)
// }) // solução frágil, pois se trocar por uma arrow-fuction, o this referenciado passa a ser o window, e nn conseguimos acessar cep 

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(this.cep.value)
// })

// --> Sem o This (utilizando target)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.cep.value)
}) // solução mais "segura" pois independe de qual tipo de função se trata (normal ou arrow)