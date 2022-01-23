let notas=[6.8,6,8,7]
let nomes=['Joao','Juliana','Ana','Caio']

let reprovados=nomes.filter((aluno,indice) => notas[indice] <7)
console.log(reprovados)