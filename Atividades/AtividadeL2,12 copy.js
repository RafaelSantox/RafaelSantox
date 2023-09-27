//Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau.

const fraiz = (x,y,z,f) => {
    const delta = (y*y) - (4*x*z)    
    if( delta < 0) return undefined
    const pos = ((-y) + Math.sqrt (delta))/(2*x)
    const neg = ((-y) - Math.sqrt (delta)/(2*x))
    return f(pos,neg)
}

const n1 = -4
const n2 = -5
const n3 = 6

const maiorValor = fraiz(n1,n2,n3,(x,y) => (x>=y? x:y))
const menorValor = fraiz(n1,n2,n3,(x,y) => (x<=y? x:y))

const texto = (x,y) => x == undefined? 'Não há raizes reais.' : `As raizes reais são ${x} e ${y}`
console.log(texto(maiorValor,menorValor))

