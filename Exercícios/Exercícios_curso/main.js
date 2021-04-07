// Parte III
const DatabaseError = function (statement, message) {
    this.statement = statement;
    this.message = message;
}
// Part I


// Part II
const database = {
    tables: {},
    // => Criação de um método através da "method notation", sem a verbosidade de "createTable: function (){}"
    createTable(statement) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        let [,tableName, columns] = parsedStatement;
        this.tables[tableName] = {
            columns: {},
            data: []
        };
        columns = columns.split(",");
        for (let column of columns) {
            column = column.trim().split(" ");
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(statement) {
        const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = statement.match(regexp);
        let [, tableName, columns, values] = parsedStatement;
        columns = columns.split(", ");
        values = values.split(", ");
        let row = {};
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const value = values[i];
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
        if (statement.startsWith("insert")) {
            return this.insert(statement);
        }
        const message = `Syntax error: "${statement}"`;
        throw new DatabaseError(statement, message)
    }
};
try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, DouglasCrockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(JSON.stringify(database, undefined, " "));
} catch (error) {
    console.log(error.message);
}