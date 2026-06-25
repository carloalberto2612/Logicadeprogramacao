class Pedido {
    numero: number
    cliente: string
    valor: number
    entregue: boolean 

constructor (numero: number, cliente: string, valor: number, entregue: boolean){
    this.numero = numero
    this.cliente = cliente
    this.valor = valor
    this.entregue = entregue
}

}

let pedidos = [
    new Pedido(9,"Malcolm",33.50, true),
    new Pedido(5, "Pedro", 22.30, true),
    new Pedido(4,"Juan",75.50, false),
    new Pedido(8,"Ian",34.20, true),
    new Pedido(2,"Ana",20.50, true),
    new Pedido(1,"Bruno",25.00, true),
    new Pedido(6,"Arthur",29.40, true),
    new Pedido(3,"Thayane",44.50, false),
];
function calcularTotal(lista: Pedido[]): number {
    let total: number = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].valor;
    }
    return total;
}

let entregues: number = 0;
console.log("===== Situação dos Pedidos =====");

for (let i = 0; i < pedidos.length; i++) {
    console.log(`Pedido ${pedidos[i].numero} - ${pedidos[i].cliente}`);
    if (pedidos[i].entregue) {
        console.log("Pedido entregue");
        entregues++;
    } else {
        console.log("Pedido pendente");
    }
    console.log("----------------------------");
}

let i: number = 0;
let pendentes: number = 0;

while (i < pedidos.length) {
    if (!pedidos[i].entregue) {
        pendentes++;
    }
    i++;
}

let totalVendas: number = calcularTotal(pedidos);
let ticketMedio: number = totalVendas / pedidos.length;

console.log("\n===== Resumo =====");
console.log(`Valor total vendido: R$ ${totalVendas.toFixed(2)}`);
console.log(`Pedidos entregues: ${entregues}`);
console.log(`Pedidos pendentes: ${pendentes}`);
console.log(`Ticket médio: R$ ${ticketMedio.toFixed(2)}`);