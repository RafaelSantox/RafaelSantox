//Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).

const todosIguais = (x,y,z) => {
    if (x==y && y==z) return 3
    else if (x!=y && y!=z && x!=z) return 0
    else return 2
}

const a = 3
const b = 1
const c = 2

const resultado = todosIguais(a,b,c)

console.log(resultado)