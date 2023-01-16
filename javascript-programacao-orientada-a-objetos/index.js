//importando as classes para o index.js
import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//criação do novoUser usando a classe User
const novoUser = new User('Yana', 'Luck', 'yana@yana.com', '2021-01-01');
//verificando o método de User herdado por novoUser
console.log(novoUser.exibirInfos());
novoUser.nome = 'Yana Luck Nunes'
console.log(novoUser.nome);
console.log(novoUser.sobrenome);
// //como a propriedade nome recebeu #, se tornou uma propriedade privada (#nome) não podendo ser alterada fora da classe User
// //nesse caso, acaba sendo criada uma nova propriedade nome diferente de #nome
// novoUser.nome = 'Luiz';
// console.log(novoUser.nome);
// //irá mostrar apenas as propriedades públicas
// console.log(novoUser)

//criação de um novoAdmin usando a classe Admin
const novoAdmin = new Admin('Bárbara', 'b@b.com', '2021-01-01');
console.log(novoAdmin.exibirInfos());
//chamada do get de User (apesar de ser uma função é chamada como uma propriedade - mesma sintaxe)
console.log(novoAdmin.nome);
//o setter (set) permite realizar uma alteração na propriedade da classe
novoAdmin.nome = 'Marcos';
console.log(novoAdmin.nome);

//criação de um novoDocente usando a classe Docente
const novoDocente = new Docente('Yale', 'y@y.com', '2021-01-01');
console.log(novoDocente.exibirInfos());

//polimorfismo utiliza a mesma função de uma classe em outra classe, mas essa função pode ser modificada dentre dessa nova classe para se adaptar para a sua nova utilidade