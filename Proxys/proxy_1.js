function createArray() {
    return new Proxy({}, {

        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/\d+/)) {
                if (!(key in target)) {
                    throw `Property ${key} not found.`
                }
            }
            return target[key];
        }
    });
}

const persons = createArray();

persons[0] = "Dwight Schrute";
persons[1] = "Jim Halpert";
persons[2] = "Michael Scott";

console.log(persons);
console.log(persons.length);

delete persons[0];
delete persons[2];
delete persons[3];

console.log(persons);
console.log(persons.length);
console.log(persons[3])