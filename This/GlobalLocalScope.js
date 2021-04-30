// global scope  
this.name_ = "Diego"

// local scope I
function sayMyName() {
    console.log('(local scope) variable declared on the global scope: ' + this.name_);
    this.nickName = "_jax"
    console.log('(local scope) variable declared on the local scope: ' + this.nickName);
}

sayMyName();

console.log('(global scope) variable declared on the global scope: ' + this.name_);
console.log('(global scope) variable declared on the local scope: ' + nickName);
console.log('(global scope) variable declared on the local scope (with This): ' + this.nickName);