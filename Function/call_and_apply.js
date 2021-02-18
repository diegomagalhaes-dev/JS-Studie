const calculateArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

const circle = {
    radius: 10,
    calculateArea
};

// -->> Apply 
console.log(calculateArea.apply(circle));

// -->> call  
console.log(calculateArea.call(circle));

// --->> Utilizando parâmetros
const calculateVolume = function (type) {
    return `Volume do ${type} é ${(4 * Math.PI * Math.pow(this.radius, 3) / 3)}`;
};

const esfer = {
    radius: 2,
    calculateVolume
};

console.log(calculateVolume.call(esfer, 'Esfera'));

// -->> Em apply determinamos um array de parâmetros para a função
console.log(calculateVolume.apply(esfer, ['Esfera']));
