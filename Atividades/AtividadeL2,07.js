//Programa para retornar o menor valor entre três números quaisquer.

const menor = (x,y) => {
    if (x<y) return x
    else return y
}

const a = 10
const b = 99
const c = 9

const resultado = menor(a,menor(b,c))
console.log(resultado)