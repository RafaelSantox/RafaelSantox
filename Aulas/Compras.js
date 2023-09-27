const carrinho = [
    { nome: 'Mochila', preço: 25.00, qtde: 1, fragil: false },
    { nome: 'Caneta', preço: 3.00, qtde: 4, fragil: true }
]
  
const todos = (p1, p2) => {
    return p1.qtde * p1.preço + p2.qtde * p2.preço
}
  
const frageis = (p1, p2) => {
    parcial.l1 = p1.fragil ? p1.qtde * p1.preço : 0
    parcial.l2 = p2.fragil ? p2.qtde * p2.preço : 0
}
  
const desc = (d = 0) => (valor) => (1 - d) * valor
const desc10 = desc(0.1);
const desc05 = desc(0.05);
  
const calcular = (fdesc) => (fcalc) => (p1, p2) => fdesc(fcalc(p1, p2));
  
const formatarNumero = (numero, casasDecimais) => {
    return numero.toFixed(casasDecimais)
}
const res1 = calcular(desc10)(todos)(carrinho[0], carrinho[1]);
  
console.log(res1,2)