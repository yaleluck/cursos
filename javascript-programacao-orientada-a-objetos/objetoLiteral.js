//criação do objeto user
const user = {
    //propriedades (ou atributos) do objeto (chave: valor)
    nome: "Yale",
    email: "yale@yale.com",
    nascimento: "1992/05/10",
    role: "estudante",
    ativo: true,
    //métodos do objeto user
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

//criando o objeto admin
const admin = {
    //propriedades (ou atributos) do objeto (chave: valor)
    nome: "Bárbara",
    email: "barbara@barbara.com",
    role: "admin",
    //métodos do objeto admin
    criarCurso() {
        console.log('Curso criado!');
    }
}

//método nativo do JavaScript de objetos que define um protótipo para que um objeto herde propriedades ou métodos de outro objeto
Object.setPrototypeOf(admin, user)
admin.criarCurso() //execução do método existente dentro do objeto admin
admin.exibirInfos() //execução do método herdado do objeto user

//o método obj.__proto__ mostra o protótipo básico usado para criar o objeto analisado

//atribuindo funções a variáveis
//função em sem um contexto específico pois o "this" não possui referência

// const exibir = function() {
//     console.log(this.nome)
// }

//prende a execução de uma função a um contexto específico (objeto)

// const exibirNome = exibir.bind(user)

// exibir();
// exibirNome();