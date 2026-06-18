let a = 20
let b = 15
let c = 10

if (a >= b && a >= c && b >= c) {
    console.log(`${a} - ${b} - ${c}`)
}else
    if (a <= b && a >= c && b >= c) {
    console.log (`${b} - ${a} - ${c}`)
}else
    if (a >= b && a <= c && b <= c){
    console.log(`${c} - ${a} - ${b}`)
}else
if (a >= b && a >= c && b <= c){
    console.log(`${a} - ${c} - ${b}`)

}


