
//criação da classe User e tornando-a "exportável" (módulo)
export default class User {
    //construtor de classe User e suas propriedades já iniciando ativo como true
    //o símbolo # indica que aquela propriedade é privada, não podendo sem alterada ao longo do código sem ser dentro do objeto
    #nome;
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    //getter (get) é uma função assessora que acessa uma propriedade da classe (apenas leitura) / nunca recebem argumento nos parenteses
    //pelas boas práticas, é ideal o get "pegar" apenas uma propriedade para evitar acoplamento
    get nome() {
        return `${this.#nome} ${this.sobrenome}`;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email(){
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }
    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    //setter (set) é usada para modificar uma propriedade privada de uma classe
    //recebe um novo parâmetro que modifica uma propriedade da classe
    set nome(novoNome) {
        if(novoNome === ''){
          throw new Error('Formato inválido');  
        }

        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    //criação de um método privado
    // #montaObjUser() {
    //     //a notação ({}) faz retornar um objeto literal
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    //criação dos métodos da classe User
    exibirInfos() {
        return `${this.nome}, ${this.sobrenome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }

}

// //criação instanciada de um novo objeto a partir da classe User
// const novoUser = new User('Yale', 'y@y.com', '2021-01-01');
// //verificando a criação do novoUser e testando o método exibirInfos
// console.log(novoUser)
// console.log(novoUser.exibirInfos())