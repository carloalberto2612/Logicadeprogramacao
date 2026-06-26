class Produto {
    nome;
    preço;
    quantidade;

    constructor (nome, preço, quantidade){
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
}
let produtos = [

    new Produto("Memória Ram 8GB", 300, 50),
    new Produto("SSD Sata 480gb", 400, 30),
    new Produto("Fonte 600W", 250, 20),
    new Produto("SSD Nvme 500gb", 500, 10),
    new Produto("Mouse Gamer", 70, 35),
    new Produto("Teclado Gamer", 80, 15),
    new Produto("Processador AMD", 600, 5),
    new Produto("Placa de Vídeo AMD", 1200, 5)
];

function calcularValorEstoque(produtos){;
return preço * quantidade;
}

console.log ("---Quantidade de Produtos---")
let preço = 0;
let quantidade = 0;
let valioso = 0;
let valorTotal = 0;


for (i < 0; i < produtos.length; i++){;
    if (quantidade <= 5){;
        console.log ("Repor Estoque!!!");
        console.log ()

    }else{

    
        console.log("Estoque OK");
    }
}

let i = 0;
let produtoValor500total = 0

while(i < produtos.length){
    if(preço >= 500){
        produtoValor500total++;
    }
    i++;
}


console.log(`Valor total do estoque:${valorTotal} `)
console.log(`Produto com Estoque mais valioso:${valioso} `)
console.log (`Quantidade de produtos que precisam de reposição:${quantidade <= 5}`)




