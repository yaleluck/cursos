//importando User para ser usado como superclasse (parentclass)
import User from "./User.js";

//criando a classe Docente herdando as propriedades e métodos da classe User
export default class Docente extends User {
    //função construtora responsável por criar as propriedades de Docente
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        //função super espécifica de classes que aproveita todas as propriedades de User (superclasse - parent class) em Docente (subclasse - child class)
        //se uma propriedade não precisar ser herdada, basta excluir o seu parâmetro e definir seu valor com this
        super (nome, email, nascimento, role, ativo);
    }

    //criando o método (método é uma função no contexto do objeto) de Docente
    aprovaEstudante(nomeDoEstudante, curso) {
        return `Estudante ${nomeDoEstudante} aprovado no curso de ${curso}.`;
    }
}

// //criando o novoDocente a partir da classe Docente
// const novoDocente = new Docente('Bárbara', 'b@b.com', '2021-01-01');
// //verificando as propriedades e métodos de novoDocente
// console.log(novoDocente);
// console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovaEstudante('Zé', 'C#'));