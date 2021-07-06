// Um pouco sobre o This

const rectangle = {
    x: 10,
    y: 15,
    calculateArea() {
        return this.x * this.y;
    }
}

// --> devemos olhar para o objeto que está invocando a função/método, logo, como os valores x e y pertencem ao escopo de rectangle, é necessário que o this seja aplicado na invoação destas no método "calculateArea()";
console.log(rectangle.calculateArea());