// FILTER
const { childrenAge, mailList } = require("../data");

// 1. Crianças entre 2 - 11 anos
const childrenFiltered = childrenAge.filter(element => element >= 2 && element <= 11);
console.table(childrenFiltered);

// 2. Emails rocketseat.com.br
const filderedRocketSeatMail = mailList.filter(email => email.includes("rocketseat.com"));
console.table(filderedRocketSeatMail);