const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const todos = (p1,p2,p3,p4,p5) => 
    p1.qtde * p1.preco +
    p2.qtde * p2.preco +
    p3.qtde * p3.preco +
    p4.qtde * p4.preco +
    p5.qtde * p5.preco

const frageis = (p1,p2,p3,p4,p5) => {
    const parcial1 = p1.fragil ? p1.qtde * p1.preco : 0
    const parcial2 = p2.fragil ? p2.qtde * p2.preco : 0
    const parcial3 = p3.fragil ? p3.qtde * p3.preco : 0
    const parcial4 = p4.fragil ? p4.qtde * p4.preco : 0
    const parcial5 = p5.fragil ? p5.qtde * p5.preco : 0
    return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
}

const precoDollar = (tx) => (lista) => lista.map(({nome,qtde,preco,fragil}) => {
    const dollar = (preco * tx).toFixed(2)
    return {nome,qtde,dollar,fragil}
})
const carrinhoConvertido = precoDollar(5.5)(carrinho)

const getTotal = (lista) => lista.reduce((total, item) => total + item.qtde * item.preco, 0)

const getFrageis = (lista) => {
      const frageis = lista.filter(item => item.fragil)
    return (getTotal(frageis))
}

const getLetra = (lista, letra) => { 
    const somaComLetra = lista.filter(item => item.nome.charAt(0).toUpperCase() === letra.toUpperCase())
    return (getTotal(somaComLetra))

}

const totalCompra = getTotal(carrinho)
const totalFrageis = getFrageis(carrinho)
const totalLetra = getLetra(carrinho,'C')

const desc = (d=0) => (valor) => (1 - d)*valor
const desc10 = desc(0.1)
const desc5 = desc(0.05)

const calcular = (fdesc) => (fcalc) => (p1,p2,p3,p4,p5) => fdesc(fcalc(p1,p2,p3,p4,p5))

const res1 = calcular(desc10)(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
const res2 = calcular(desc5)(frageis)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
const res3 = calcular(desc())(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])

console.log(`Valor total é ${res1}!`)
console.log(`Valor total dos itens frágeis é ${res2}!`)
console.log(`Valor total sem desconto é ${res3}!`)


console.log(`Esses são os preços dos itens convertidos para dolar americano: ${JSON.stringify(carrinhoConvertido)}`)
console.log(`O valor total da compra é ${totalCompra}`)
console.log(`O valor dos produtos frageis é ${totalFrageis}`)
console.log(`O valor dos produtos com letra C é ${totalLetra}`)