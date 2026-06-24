class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = "Smart TV";
        this.preco = 2000
    }
    aplicarDesconto(): number{
        return this.preco * 0.9; //10% de desconto
    }
    exibirInfo(): void {
        console.log(`${this.nome}: R$ ${this.preco}`)
        console.log(`Com desconto: R$ ${this.aplicarDesconto()}`)

    }
}

let produto = new Produto ("Notebook", 3.000)
produto.exibirInfo();