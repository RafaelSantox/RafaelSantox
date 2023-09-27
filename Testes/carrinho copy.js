const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const carrinhoConvert = (taxa) => (lista) => lista.map(({nome,qtde,preco,fragil}) => {
    const cambio = (taxa*preco).toFixed(2)
    return {nome,qtde,cambio,fragil}
})
const carrinhoDollar = carrinhoConvert(5.5)(carrinho)
console.log(carrinhoDollar)

const valorTotal = (lista) => lista.reduce((total,item) => total+item.qtde*item.preco,0).toFixed(2)
const valorTotalCompras = valorTotal(carrinho)
console.log(valorTotalCompras)

const desconto = (d=0) => (valor) => (1-d)*valor
const desconto10 = desconto(0.1)(valorTotalCompras)
console.log(desconto10)

const valorFrageis = (lista) => {
    const frageis = lista.filter(item => item.fragil)
    return(valorTotal(frageis))
} 
console.log(valorFrageis(carrinho))

const valorLetra = (lista) => (letra) => {
    const somaLetra = lista.filter(item => item.nome.charAt(0).toUpperCase() === letra.toUpperCase())
    return(valorTotal(somaLetra))
}
console.log(valorLetra(carrinho)("c"))

const valorMedio = (acc,el) => {
    novaQtde = acc.qtde+1
    novoTotal = acc.qtde + el
    return {
        qtde:novaQtde,
        total:novoTotal,
        media : novoTotal/novaQtde
    }
}

const mediaInicial = {qtde:0,total:0,media:0}

const mediaGenerico = (filtro) => {
    carrinho.filter(filtro).map(valorTotal).reduce(getMedia,mediaInicial).media
}

const gastoMeidoTotal = mediaGenerico((x)=>x)

const gastoMedioFragil = mediaGenerico(fragel)

console.log(gastoMeidoTotal)
console.log(gastoMedioFragil)