const subcurried = a => b => c => a*(b-c)
console.log(subcurried(4)(3)(1))

const subtrair = (subcurried(1)(4)(2))
console.log(subtrair)

const dobro = (subcurried(2)(5)(0))
console.log(dobro)

const negativo = (subcurried(1)(0)(20))
console.log(negativo)