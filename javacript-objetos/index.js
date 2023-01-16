class Client{
    constructor(name, email, cpf, balance) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.balance = balance;
    }

    deposit(value) {
        this.balance += value;
    }

    showBalance() {
        console.log(this.balance)
    }
}

class ClientSavings extends Client {
    constructor(name, email, cpf, balance, balanceSavings){
        super(name, email, cpf, balance);
        this.balanceSavings = balanceSavings;
    }

    depositOnSavings(value) {
        this.balanceSavings += value;
    }
}

const yale = new ClientSavings ("Yale", "yale@email.com", "12345678910", 100, 200);

console.log(yale);

yale.deposit(100);
yale.depositOnSavings(100);

console.log(yale);