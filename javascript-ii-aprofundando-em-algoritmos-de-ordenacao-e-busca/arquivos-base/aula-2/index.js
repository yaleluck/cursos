const listaLivros = require('./array');

function mergeSort(array) {
    //Dividindo o Array em 2 partes (metades) de forma recursiva

    if (array.length > 1) {
        const metadeLista = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, metadeLista));
        const parte2 = mergeSort(array.slice(metadeLista, array.length));

        //Ordenando as listas "metade"
        array = ordena(parte1, parte2);

    }

    return array;
}

// Função que ordena as posições do Array
function ordena (parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;

    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let objetoAtualParte1 = parte1[posicaoAtualParte1];
        let objetoAtualParte2 = parte2[posicaoAtualParte2];

        //Verificação do menor preço e adição ao Array
        if (objetoAtualParte1.preco < objetoAtualParte2.preco) {
            resultado.push(objetoAtualParte1);
            posicaoAtualParte1++
        } else {
            resultado.push(objetoAtualParte2);
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));

}

console.log(mergeSort(listaLivros));