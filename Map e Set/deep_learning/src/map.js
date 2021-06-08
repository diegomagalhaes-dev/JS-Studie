import assert from 'assert';

export default function mapAPI() {
    const itemObj = { name: 'jleandro' }

    const itemMap = new Map([
        ['name', 'jleandro']
    ])

    itemObj.birthDay = '04/04/2004'
    assert.ok(itemObj.birthDay === '04/04/2004')

    itemMap.set('birthDay', '04/04/2004')
    assert.ok(itemMap.get('birthDay'), '04/04/2004')
    assert.deepStrictEqual(itemMap.get('birthDay'), '04/04/2004')

    assert.ok(itemObj.hasOwnProperty('birthDay'))
    assert.ok(itemMap.has('birthDay'))

    delete itemObj.birthDay
    assert.ok(itemObj.hasOwnProperty('birthDay') === false)

    itemMap.delete('birthDay')
    assert.ok(itemMap.has('birthDay') === false)

    assert.deepStrictEqual(Object.keys(itemObj).length, 1)
    assert.deepStrictEqual(itemMap.size, 1)

    assert.deepStrictEqual(Object.entries(itemObj), [['name', 'jleandro']])
    assert.deepStrictEqual([...itemMap], [['name', 'jleandro']])

    for (const [key, value] of Object.entries(itemObj)) {
        assert.deepStrictEqual([key, value], ['name', 'jleandro'])
    }

    for (const [key, value] of itemMap) {
        assert.deepStrictEqual([key, value], ['name', 'jleandro'])
    }

    Object.keys(itemObj).map(key => delete itemObj[key])
    assert.deepStrictEqual(Object.keys(itemObj), [])

    itemMap.clear()
    assert.deepStrictEqual([...itemMap.keys()], [])
}