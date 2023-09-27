/*const somaF = (f,x,y,z) => f(x) + f(y) + f(z)

console.log(somaF((num) => (Math.abs(num)),-3,1,2))*/

const somaF = f => x => y => z => f(x)+f(y)+f(z)

console.log(somaF((num) => (Math.abs(num)))(-3)(1)(2))  //agora a constante soma f da o valor absoluto de numero a numero ao inves de toda a expressão
