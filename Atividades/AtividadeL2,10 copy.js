// Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

exec = (f,x,y) => f(x,y)

const nome = `Rafael` 
const sobNome = `Jesus`

const citacao = exec((x,y) =>{  
    return `${y}, ${x}`
},nome, sobNome)


console.log(citacao)