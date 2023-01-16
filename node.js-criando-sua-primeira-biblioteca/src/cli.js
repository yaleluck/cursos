import chalk from 'chalk';
import fs from 'fs';
import catchFile from './index.js';
import listaValidada from './http-validacao.js';

const path = process.argv;

async function printList (valida, results, identifier = '') {

    if (valida) {
        console.log(chalk.yellow('Lista validada: '), chalk.black.bgGreen(identifier), await listaValidada(results));
    } else {
        console.log(chalk.yellow('Lista de links: '), chalk.black.bgGreen(identifier), results);
    }

}

async function textProcess(argumentos) {
    const path = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('Arquivo ou diretório inexistente.');
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const results = await catchFile(argumentos[2]);
        printList(valida, results);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await catchFile(`${path}/${fileName}`)
            printList(valida, list, fileName);
            return list;
        })
    }
}

textProcess(path);