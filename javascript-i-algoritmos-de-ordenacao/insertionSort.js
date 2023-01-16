const books = require('./lista_livros');
const exchange = require('./troca');

function insertionSort(array) {

    for (let current = 0; current < array.length; current++) {
        let analysis = current;

        while (analysis > 0 && array[analysis].price < array[analysis - 1].price) {
            exchange(array, analysis);

            analysis--;
        }
    }
    console.log(array);
}

insertionSort(books);