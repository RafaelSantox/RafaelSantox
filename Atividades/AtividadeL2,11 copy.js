//Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles.

const exec = (f,x,y,z) => f(x,y,z)

const n1 = 3
const n2 = 9
const n3 = 7

const media = exec((x,y,z) => (x+y+z)/3
,n1,n2,n3)

const comparar = exec((x,m) => {
    if (x>m) return 1
    else return 0
},n1,media) + exec((x,m) => {
    if (x>m) return 1
    else return 0
},n2,media) + exec((x,m) => {
    if (x>m) return 1
    else return 0
},n3,media)

console.log (`Entre os valores ${n1}, ${n2}, ${n3} quantos desses valores são maiores que a média entre eles?\nResp:${comparar}`)