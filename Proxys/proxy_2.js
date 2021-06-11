// ex1
console.log("=========== ex 01 ===========")
function workouts() {
    return new Proxy({}, {
        set(target, key, value) {
            console.log(target, key, value)
        }
    });
}

const legsWorkouts = workouts();

legsWorkouts[0] = 'Agachamento';
legsWorkouts[1] = 'Levantamento Terra';
legsWorkouts[2] = 'Leg Press';


//ex2
console.log("=========== ex 02 ===========")
const persons = {}

const personProxy = new Proxy(persons, {
    set(target, key, value) {
        target[key] = value.toUpperCase();
        console.log('internal: ' + target[key]);
    }
});

persons[11] = 'Eleven';
console.log(persons)
personProxy[11] = 'Jonas'
console.log(persons)
console.log(personProxy)
console.log(personProxy[11]);
persons[10] = 'Ten';
console.log(persons)
console.log(personProxy);
personProxy[9] = 'Nine'
console.log(persons);
console.log(personProxy);