const runner = async (name) => {
    const runners = {
        Peter: 4,
        Kate: 2,
        Heinserber: 1,
        Victoria: 5
    }

    return runners[name];
}

const position = async () => {
    const result = await Promise.all(
        [
            runner('Peter'),
            runner('Victoria')
        ])

    console.log(result);
}

position();
