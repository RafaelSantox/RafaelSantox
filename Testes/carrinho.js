const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const carrinhoDollar = (taxa) => (lista) => lista.map(({nome,qtde,preco,fragil}) =>{
    const dollar = (preco*taxa).toFixed(2)
    return {nome,qtde,dollar,fragil}
}
)

const valorTotal = (lista) => lista.reduce((total,item) => total+item.qtde*item.preco,0)

const desconto = (d=0) => ((valor) => (1-d)*valor)

const desc10 = desconto(0.1)

const valorFrageis = (lista) => {
    const frageis = lista.filter(item => item.fragil)
    return (valorTotal(frageis))
}

const valorLetra = (lista,letra) =>{
    const somaLetra = lista.filter(item => item.nome.charAt(0).toUpperCase() === letra.toUpperCase())
    return (valorTotal(somaLetra))
}

const media = (acc,el) => {
    const novaQtde = acc.qtde+1
    const novoTotal = acc.Total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal/novaQtde
    }

}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const gastoMedioGenerico = (filtro) => carrinho
    .filter(filtro)
    .map(valorTotal)
    .reduce(getMedia, mediaInicial)
    .media

const gastoMedioTotal = gastoMedioGenerico((x)=>x)

const gastoMedioFragil = gastoMedioGenerico(fragil)

console.log(`A média de gastos por tipo de produto é ${gastoMedioTotal}!`)

console.log(`A média de gastos por tipo de produto frágil é ${gastoMedioFragil}!`)


const res1 = carrinhoDollar(5.5)(carrinho)
const res2 = valorTotal(carrinho)
const res3 = desc10(res2).toFixed(2)
const res4 = valorFrageis(carrinho)
const res5 = valorLetra(carrinho,"c")

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)