let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let b = [];

for (let i = 0; i < a.length; i++) {
    b[19-i] = a[i];
}

console.log(a);
console.log(b);