const books = require('./lista_livros');

function searchCheapestPrice (arrProducts, initialPosition){
   
    let cheapestPrice = initialPosition;
    
    for (let currentPrice = initialPosition; currentPrice < arrProducts.length; currentPrice++) {
        if (arrProducts[currentPrice].price < arrProducts[cheapestPrice].price) {
            cheapestPrice = currentPrice;
        }
    }
    return cheapestPrice;
}
    
module.exports = searchCheapestPrice;