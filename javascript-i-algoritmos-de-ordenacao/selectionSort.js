const books = require('./lista_livros');
const searchCheapestPrice = require('./menor_valor');

for (let current = 0; current < books.length - 1; current++) {
    let lower = searchCheapestPrice(books, current);
    
    let currentBook = books[current];
    console.log(books[current]);
    let cheapestPriceBook = books[lower];
    console.log(books[lower]);

    books[current] = cheapestPriceBook;
    books[lower] = currentBook;
}

console.log(books);

books.forEach((element, i) => {
    let menor = searchCheapestPrice(books, i)
   
    let livroAtual = books[i];
    let livroMenorPreco = books[menor];
   
    books[i] = livroMenorPreco
    books[menor] = livroAtual 
   })
   
   console.log(books)
