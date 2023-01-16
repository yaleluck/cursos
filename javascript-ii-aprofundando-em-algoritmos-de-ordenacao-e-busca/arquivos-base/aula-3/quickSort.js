const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort (array, esquerdaDoPivo, diretaDoPivo) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerdaDoPivo, diretaDoPivo);

        if (esquerdaDoPivo < indiceAtual - 1) {
            quickSort(array, esquerdaDoPivo, indiceAtual - 1);
        }

        if (indiceAtual < diretaDoPivo) {
            quickSort(array, indiceAtual, diretaDoPivo);
        }
    }
    
    return array;

}

function particiona(array, esquerdaDoPivo, diretaDoPivo) {
    let pivo = array[Math.floor((esquerdaDoPivo + diretaDoPivo) / 2)];
    let atualEsquerda = esquerdaDoPivo;
    let atualDireita = diretaDoPivo;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));