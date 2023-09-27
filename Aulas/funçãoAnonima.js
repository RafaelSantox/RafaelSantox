//é possivel deixar para definir a função no momento de aplicar/usar, sem precisar atribuir nomenclaturas as funções, usando isso no codigo de funções como argumentos anterior temos:

const exec = (f, x, y) => f(x, y)

const res1 = exec((x, y) => x-y, 50, 25) //usando funções anonimas podemos colocar diretamente toda a função subtrair e qualquer outra função dentro dessas respectivas linhas
const res2 = exec((x, y) => x+y, 50, 25)
const res3 = exec((x, y) => x*y, 50, 25)
const res4 = exec((x, y) => x/y, 50, 25)
const res5 = exec((x, y, sep=" ") => x+sep+y, "Melb", "lau")
const res6 = exec((x, y) => x[0]+y[0], "Melb", "Lau")
const res7 = exec(y => -y,30)

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)