//Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).

const exec = (f,a,b,c) => f(a,b,c)

const n1 = 4
const n2 = 2
const n3 = 3

const resposta = exec((a,b,c) => {
    if (a===b && a===c && b===c) return ('Todos os três valores são iguais.\n')
    else if (a!=b && a!=c && b!=c) return ('Todos os valores são diferentes.\n')
    else return ('Somente dois valores são iguais.\n')
},n1,n2,n3)

const menorValor = exec((a,b,c) => {
    if (a<b) return `O menor valor entre os números é: ${a}`
    else if (b<a) return `O menor valor entre os números é ${b}`    
    else return `O menor valor entre os números é ${c}`
},n1,n2,n3)

console.log(resposta + menorValor)