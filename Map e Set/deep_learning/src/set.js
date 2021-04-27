import assert from 'assert'
import faker from 'faker'

export default function setAPI() {
    const MAX_ITEMS = 10
    const EVEN_MULTIPLE = 2
    const mainDB = new Set();
    const generateCar = (mainDB, replicationDB) => {
        for (let index = 0; index < MAX_ITEMS; index++) {
            const car = {
                name: faker.vehicle.model(),
                releaseYear: faker.date.past().getFullYear(),
                available: true,
                gasAvailable: true,
            }
            mainDB.add(car);

            if (!replicationDB) continue;
            if (index % EVEN_MULTIPLE !== 0) continue;

            replicationDB.add(car);
        }

        return mainDB;
    }

    const carsDb1 = generateCar(new Set())
    const carsDb2 = generateCar(new Set(), carsDb1)

    assert.deepStrictEqual(carsDb2.size, MAX_ITEMS)
    assert.deepStrictEqual(carsDb1.size, (MAX_ITEMS + (MAX_ITEMS / EVEN_MULTIPLE)))

    const replications = new Set([...carsDb1].filter(car => carsDb2.has(car)));
    assert.deepStrictEqual(replications.size, (MAX_ITEMS) / EVEN_MULTIPLE);

    const uniqueFromDb1 = new Set([...carsDb1].filter(car => !carsDb2.has(car)));
    assert.deepStrictEqual(uniqueFromDb1.size, MAX_ITEMS);

    const uniqueFromDb2 = new Set([...carsDb2].filter(car => !carsDb1.has(car)));
    // -> Serão apenas os ímparas, pois os duplicados serão removidos do db1
    assert.deepStrictEqual(uniqueFromDb2.size, (MAX_ITEMS / EVEN_MULTIPLE));

    const allDatabaseWithoutReplications = new Set([...carsDb1, ...carsDb2])
    assert.deepStrictEqual(allDatabaseWithoutReplications.size, MAX_ITEMS * EVEN_MULTIPLE);

    for (const item of carsDb1) carsDb2.add(item)
    assert.deepStrictEqual(carsDb2.size, MAX_ITEMS * EVEN_MULTIPLE)

    // -> "Relatorio"
    console.log('unique items on db1 that is not included in db2', uniqueFromDb1.size)
    console.log('unique items ond db2 that is not included in db1', uniqueFromDb2.size)

    console.log('replicated data', replications.size)
    console.log('unique items on all dbs', allDatabaseWithoutReplications.size)
}