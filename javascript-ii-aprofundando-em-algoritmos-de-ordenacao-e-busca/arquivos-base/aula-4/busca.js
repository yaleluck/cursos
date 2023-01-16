const listaLivros = require('./arrayOrdenado');

function busca (array, inicio, fim, valorBuscado) {
    const meio = Math.floor((inicio + fim) / 2);
    const atual = array[meio];

    if (inicio > fim) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, inicio, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, fim, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 80));