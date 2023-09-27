//mesma função que soma areas representada por notação arrow (=>)

const fareaEli = (x, y, pi=3.14) => (x*y*pi)
const fareaRet = (x, y) => (x*y)
const soma = (x,y) => (x+y)
    
const l1 = 2
const l2 = 1
const r1 = 1
const r2 = 1

const Eli = fareaEli (r1, r2)
const Ret = fareaRet (l1, l2)
const resultado = soma (Eli, Ret)

const TextResultado = `A soma entre as areas de uma elipse de raios ${r1} e ${r2} e um retangulo de lados ${l1} e ${l2} é igual a ${resultado}`
console.log (TextResultado)