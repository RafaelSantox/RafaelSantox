//fazer um algoritmo que entregue como resultado a soma entre as areas de um retângulo e uma elipse

function fareaEli (x, y, pi=3.1415) {
    return pi*x*y
}

function fareaRet (x,y) {
    return x*y
}

function fsoma (x, y) {
    return x+y
}

const r1 = 1
const r2 = 1
const l1 = 2
const l2 = 1

const Eli = fareaEli (r1,r2)
const Ret = fareaRet (l1,l2)

const resultado = fsoma (Eli,Ret)

const textoResultado = `A soma dos raios de uma elipse de raios ${r1} e ${r2} com o retângulo de lados ${l1} e ${l2} é ${resultado}.`

console.log (textoResultado)
