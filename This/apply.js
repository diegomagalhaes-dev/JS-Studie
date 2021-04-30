// -> .apply(this, [arg1, arg2...])
// ex1:
this.framework = 'Unity';

function professionalProfile(language) {
    this.language = language;
    console.log(`Language Programming: ${this.language}, using freamework ${this.framework}.`);
}

const programmer = {
    framework: '.NET'
}

console.log(this.framework)
professionalProfile.apply(this, ['C#']);
professionalProfile.apply(programmer, ['JavaScript']);
console.log(this.framework)

//ex2:
function multiply() {
    const args = Array.from(arguments);
    this.total = args.reduce((acc, item) => {
        return acc * item;
    }, 1)
}

multiply.apply(this, [2, 3, 4]);
console.log(this.total);