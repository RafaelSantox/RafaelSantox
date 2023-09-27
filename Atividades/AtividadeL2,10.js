// Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

function citar (x,y){
    return`${y} ${x}`
}

const n1 = 'José'
const n2 = 'Ribeiro'

console.log(citar(n1,n2))