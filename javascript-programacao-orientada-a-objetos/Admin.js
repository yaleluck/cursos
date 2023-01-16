//importando o módulo User
import User from "./User.js";

//criando a classe Admin herdando as propriedades e métodos da classe User
export default class Admin extends User {
    //função construtora responsável por criar as propriedades de Admin
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        //função super espécifica de classes que aproveita todas as propriedades de User (superclasse - parent class) em Admin (subclasse - child class)
        //se uma propriedade não precisar ser herdada, basta excluir o seu parâmetro e definir seu valor com this
        super (nome, email, nascimento, role, ativo);
        
    }

    //criando o método (método é uma função no contexto do objeto) de Admin
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`;
    }
}

// //criando (instanciando) o novoAdmin
// const novoAdmin = new Admin('Yale', 'y@y.com', '2021-01-01');
// //verificando as propriedades e métodos de novoAdmin
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JS', 20));