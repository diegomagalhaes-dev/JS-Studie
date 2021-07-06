// Getters e Setters 

const rectangule = {
    set tam(x) {
        this.x = x;
    },
    set alt(y) {
        this.y = y;
    },
    get area() {
        return this.x * this.y;
    }
};

rectangule.tam = 10;
rectangule.alt = 2;
console.log(rectangule.area);