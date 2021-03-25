// indexOf -> retorna a posição de um elemento no array 
const tvShows = ["Sons Of Anarchy", "Dark", "The Office", "Breaking Bad"];
console.log(tvShows.indexOf("The Office"));

// includes -> retorna um boleano que diz se um elemento está ou não no array 
console.log(tvShows.includes("Dark"));

// concat -> retorna um novo array contendo a junção dos arrays que desejarmos, sem alterá-los
const moreTvShows = ["Mad Man", "Silicon Valley"];
const allTvShows = [].concat(tvShows, moreTvShows);

console.log(allTvShows);

// join -> itera sobre o array e retorna os elementos em uma String com base em um separador especificado
const exportDate = allTvShows.join(";");
console.log(exportDate);
console.log(exportDate.split(";"));