const listaLivros = require('./array');

function encontraMenores (pivo, array) {

    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let objetoAtual = array[atual];

        if (objetoAtual.preco < pivo.preco) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar (array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo (array) {
    let pivo = array[Math.floor(array.length / 2)];

    encontraMenores(pivo, array);

    let valoresMenores = 0;

    for (analise = 0; analise < array.length; analise++) {
        let atual = array[analise];

        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analise, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

//console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;