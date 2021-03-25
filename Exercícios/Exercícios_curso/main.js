// Parte III
const DatabaseError = function (statment, message) {
    this.statement = statment;
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
        const tableName = parsedStatement[1];
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        let columns = parsedStatement[2];
        columns = columns.split(", ");
        for (let column of columns) {
            column = column.split(" ");
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
        }
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
        const message = `Syntax error: "${statement}"`;
        throw new DatabaseError(statement, message)
    }
};
try {
    database.createTable("create table author (id number, name string, age number, city string, state string, country string)");
    console.log(JSON.stringify(database, undefined, " "));
    database.execute("select id, name from author");
} catch (error) {
    console.log(error.message);
}