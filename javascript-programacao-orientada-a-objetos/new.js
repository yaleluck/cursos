// o comando "new" cria novas instâncias de objetos a partir de uma função construtora/modelo de construção de objetos (classes)
//classes são modelos de criação de objetos (começam com a letra maiúscula)

//declaração da função construtora que cria uma classe
// function User(nome, email) {
     //propriedades do objeto criado por essa classe
//     this.nome = nome;
//     this.email = email;

     //métodos da classe
//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`;
//     }

// }

//execução da função parar criar uma nova instância (novo objeto) a partir da classe (atuando como um protótipo) e armazenando essa nova instância em uma variável
// const novoUser = new User('Yale', 'yale@yale.com');

//execução do método e exibição no console
// console.log(novoUser.exibirInfos())

// function Admin(role) {
    //o método .call serve para invocar uma classe passando parâmetros. Dessa forma Admin irá receber as propriedades de User
    // User.call(this, 'Yale', 'y@y.com');
    //criando uma nova propriedade em Admin
    // this.role = role || 'estudante';
//}

//criando um novo objeto a partir de Object.create definindo User como protótipo
// Admin.prototype = Object.create(User.prototype);
// const novoUser2 = new Admin('admin');
// console.log(novoUser2.exibirInfos());
// console.log(novoUser2.role);


//criando um objeto literal
const user = {
    //criando um método que "equivale" a uma função construtora dentro do próprio objeto
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function () {
        return this.nome
    }
}

//criando um novo objeto a partir de um outro objeto, sem precisar de uma função construtora
const novoUser = Object.create(user)
novoUser.init('Yale', 'yale@yale.com')
console.log(novoUser.exibirInfos());
//verificando se user é protótipo de novoUser
console.log(user.isPrototypeOf(novoUser));

// uma factory function é uma função que retorna um objeto
// function criaUser(nome, email) {
//  return {
//     nome,
//     email,
//     exibeInfos() {
//       return `${nome}, ${email}`
//     }
//   }
//  }
// A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos())