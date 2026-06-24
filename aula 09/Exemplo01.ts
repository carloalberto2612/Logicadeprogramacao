class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string, idade: number) {
        this.nome = "Carlos"
        this.idade = 19
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)

    }
}

let pessoa1 = new Pessoa("João", 25);
pessoa1.apresentar();
let pessoa2 = new Pessoa("Gabriel",29);
pessoa2.apresentar();
