function createIterable(...array) {
    return {
        *[Symbol.iterator]() {
            let i = 0;
            while(i<array.length){
                yield array[i++];
            }
        }
    };
}

const persons = createIterable("John", "Laura", "Kate")

for (let person of persons) {
    console.log(person);
}