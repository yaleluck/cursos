const books = require('./lista_livros');

let cheapestPrice = 0;
let highestPrice = 0;

for (let currentPrice = 0; currentPrice < books.length; currentPrice++) {
    if (books[currentPrice].price < books[cheapestPrice].price) {
        cheapestPrice = currentPrice;
    }
    if (books[currentPrice].price > books[highestPrice].price) {
        highestPrice = currentPrice;
    }
}

console.log(`O livro mais barato custa ${books[cheapestPrice].price} e seu título é ${books[cheapestPrice].title}.`);
console.log(`O livro mais caro custa ${books[highestPrice].price} e seu título é ${books[highestPrice].title}.`);