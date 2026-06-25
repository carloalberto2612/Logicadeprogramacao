class Livro {
    titulo;
    autor;
    quantidade;
    emprestados;

    constructor(titulo, autor, quantidade, emprestados){
    this.titulo = titulo
    this.autor = autor
    this.quantidade = quantidade
    this.emprestados = emprestados

    }

}

let livros = [

new Livro("Dom Quixote", "Miguel de Cervantes",20,5),
new Livro("A Odisseia", "Homero",15, 2),
new Livro("O estrangeiro", "Albert Camus", 12, 3),
new Livro("Doutor Fausto", "Thomas Mann", 23, 6),
new Livro("Hell Screen", "Ryunosuke Agatawa", 18, 4),
new Livro("Metamorfose", "Franz Kafka", 15, 4),
];
function livrosDisponiveis(livro){
    return livro.quantidade - livro.emprestados
}

let disponiveis = 0;
let indisponiveis = 0;
let exemplaresTotal = 0;
let exemplares = 0;

console.log ("---Situação dos Livros---")

for(let i = 0; i < livros.length; i++){
    console.log (`\nLivro: ${livros[i].titulo}`)
  if (livrosDisponiveis(livros[i]) > 0){
        console.log ("Disponível")
        console.log (`Exemplares disponiveis: ${livrosDisponiveis(livros[i])}`)
        disponiveis++;
        exemplaresTotal += livrosDisponiveis (livros[i])

    }else {
        console.log ("Indisponivel")
        indisponiveis++;
    }

}
let i = 0;
let livrosComExemplar = 0;

while (i < livros.length) {
    if (livrosDisponiveis(livros[i]) > 0) {
        livrosComExemplar++;
    }
    i++;
}

console.log("\n========================");
console.log("Resumo");
console.log("========================");
console.log(`Total de livros: ${livros.length}`);
console.log(`Total de livros disponíveis: ${disponiveis}`)
console.log(`Total de exemplares disponíveis: ${exemplaresTotal}`);
console.log(`Total de livros indisponíveis: ${indisponiveis}`);
console.log(`Livros com pelo menos um exemplar disponível: ${livrosComExemplar}`);
{
    
}