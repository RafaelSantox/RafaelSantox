//usando a aplicação de função anômima no exercício 2

const raiz = (a, b, c, f) => {
    const delta = (b*b) - (4*a*c)
    if (delta < 0) return undefined
    const pos = ((-b) + Math.sqrt (delta))/(2*a)
    const neg = ((-b) - Math.sqrt (delta))/(2*a)
    return f(pos,neg)
}

const a = -1
const b = 3
const c = 6

const maiorRaiz = raiz(a,b,c,(x,y)=>(x >= y? x : y)) // função para definir o maior valor
const menorRaiz = raiz(a,b,c,(x,y)=>(x <= y? x : y))// função para definir o menor valor (ambas são anônimas)

const texto = (x,y) => x == undefined ? 'Não ha raizes reais.' : `As raizes da equação são ${x} e ${y}`

console.log(texto(menorRaiz,maiorRaiz))