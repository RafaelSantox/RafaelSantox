const aluno = Object.freeze({nome:"aluno",idade:17,matricula:20235,curso:"CC"})
const aluno2 = Object.freeze({nome:"aluno2",idade:18,matricula:20231,curso:"SI"})
const aluno3 = Object.freeze({nome:"aluno3",idade:17,matricula:20232,curso:"EC"})
const aluno4 = Object.freeze({nome:"aluno4",idade:18,matricula:20234,curso:"SI"})
const aluno5 = Object.freeze({nome:"aluno5",idade:19,matricula:20233,curso:"EC"})

const turma0 = [aluno,aluno2,aluno3,aluno4, aluno5]

console.log(turma0)

const adicionarAluno = (nome,idade,matricula,curso) => (turma) =>{
    const novoAluno = Object.freeze({nome:nome,idade:idade,matricula:matricula,curso:curso})
    const novaTurma = [...turma,novoAluno]
    return novaTurma
}

const turma1 = adicionarAluno('aluno6',20,20239,'CC')(turma0)

console.log(turma1)

const listarAlunos = (catalogo) => catalogo.map((x)=>[x.nome,x.idade,x.matricula,x.curso])
console.log("Alunos listados:\n",listarAlunos(turma1))

const buscaCurso = (turma) => (curso) => turma.filter((x)=>curso===x.curso)
const buscaCursoSi = buscaCurso(turma1)('SI')
console.log(buscaCursoSi)

const removeAluno = (turma) => (nome) => turma.filter((x)=>nome !== x.nome)
const turma2 = removeAluno(turma1)('aluno6')
console.log(turma2)

const ordenaAlunos = (turma) => {
    const turmaOrdenada = [...turma].sort((a,b)=>a.matricula - b.matricula)
    return turmaOrdenada
}
console.log (ordenaAlunos(turma1))

const contarSi = (lista) =>
lista.filter((x) => x.curso === "SI").length
const contarCc = (lista) =>
lista.filter((x) => x.curso === "CC").length
const contarEc = (lista) =>
lista.filter((x) => x.curso === "EC").length

console.log(contarSi(turma2))
console.log(contarEc(turma2))
console.log(contarCc(turma2))