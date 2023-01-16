import fs from 'fs';
import chalk from 'chalk';

function exportsLinks (text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capture = [...text.matchAll(regex)];

    const results = capture.map(pickup => ({[pickup[1]]: pickup[2]}))

    return results.length !== 0 ? results : 'Não foram encontrados links no arquivo.';
}

function showError(error) {
    throw new Error(chalk.red(error.code, 'Não há arquivo no diretório!'));
}

// async/await

async function catchFile(filePath) {
    try {
        const encoding = 'UTF-8';
        const text = await fs.promises.readFile(filePath, encoding)
        return exportsLinks(text);
    } catch (error) {
        showError(error);
    } finally {console.log(chalk.blue('Operação concluída!'))};
    
}

export default catchFile;
