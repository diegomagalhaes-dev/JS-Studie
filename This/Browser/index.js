'use strict'
this.name = 'Victoria'

function sayMyName() {
    console.log(this.name);
}

const obj = {
    age: 25,
    hiPerson: function () {
        console.log(this.name);
    }
}

sayMyName();