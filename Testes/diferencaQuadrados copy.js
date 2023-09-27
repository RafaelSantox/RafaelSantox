const u = require('./utils.js')

const naturais10 = u.range(1,10)
const naturais10quad = naturais10.map((x)=>x**2)
const somaNaturais10quad = u.sum(naturais10quad)
const quadSomaNaturais10 = u.sum(naturais10)**2

const dif = quadSomaNaturais10 - somaNaturais10quad
u.log(dif)

const {log, range, sum} = require('./utils.js')