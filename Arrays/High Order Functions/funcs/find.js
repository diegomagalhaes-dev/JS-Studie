const { passengers } = require("../data");

const Jessica = passengers.find(
    namePassenger => namePassenger.name.toLowerCase() === "jessica"
)
console.table(Jessica);