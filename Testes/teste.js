const aluno = Object.freeze ({nome:"Aluno" , idade:18 , matricula:202304, curso:"SI"})
const aluno2 = Object.freeze ({nome:"Aluno2" , idade:19 , matricula:202303, curso:"EC"})
const aluno3 = Object.freeze ({nome:"Aluno3" , idade:20 , matricula:202302, curso:"CC"})
const aluno4 = Object.freeze ({nome:"Aluno4" , idade:18 , matricula:202301, curso:"SI"})

const turma0 = [aluno,aluno2,aluno3,aluno4]
console.log('Turma original: ',turma0)

const adicionarAluno = (nome,idade,matricula,curso) => (turma) => {
    const novoAluno = Object.freeze({nome:nome,idade:idade,matricula:matricula,curso:curso})
    const novaTurma = [...turma,novoAluno]
    return novaTurma
}
const turma1 = adicionarAluno("Aluno5",21,202305,"CC")(turma0)
console.log('Turma com adição: ',turma1)

const listagemAlunos = (turma) => turma.map((x) =>[x.nome,x.idade,x.matricula,x.curso])
const listaTurma1 = listagemAlunos(turma1)
console.log('Lista turma 01: ',listaTurma1)

const buscaCurso = (turma) => (curso) => turma.filter((x) => curso === x.curso)
const buscaCursoSI = buscaCurso(turma1)("SI")
console.log('Alunos no curso de SI: ',buscaCursoSI)

const removerAluno = (nome) => (turma) => turma.filter((x) => nome !== x.nome)
const turma2 = removerAluno("Aluno")(turma1)
console.log('Remoção Aluno da turma 01',turma2)

const organizarAlunos = (turma) => {
    const organizador = [...turma].sort((a,b) => a.matricula-b.matricula)
    return organizador
}
const turma01Organizada = organizarAlunos(turma1)
console.log(turma01Organizada)

const nAlunos = (turma) => (curso) => turma.filter((x) => curso === x.curso).length
const alunosSI = nAlunos(turma1)("CC")
console.log('Alunos do curso SI: ',alunosSI)