const quociente = (n,m) =>{
    if (n<m) return 0
    else return 1+quociente(n-m,m)

}

console.log(quociente(31,7))