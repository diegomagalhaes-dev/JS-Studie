const statement = "insert into music (number, name, album) values (1, Confortably Numb, Zap)";
const regExp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;

const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1];
let columnsInsert = parsedStatement[2];
let valuesInserting = parsedStatement[3];

columnsInsert = columnsInsert.split(", ");
valuesInserting = valuesInserting.split(", ");

const showInserting = columnsInsert.concat(valuesInserting);

console.log(JSON.stringify(showInserting, undefined, " "));