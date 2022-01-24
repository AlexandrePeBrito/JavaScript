const cliente ={
    nome:'Alexandre',
    idade:22,
    cpf:'07828524420',
    email:'alex@gmail.com',
    dependente:[{
        nome:'Ana',
        parentesco:'Mae',
        idade:51,
        cpf:'07828524420',
        email:'ana@gmail.com'
    }]
}

cliente.dependente.push({
    nome:'Joselito',
    parentesco:'pai',
    idade:61,
    cpf:'07828524420',
    email:'joselito@gmail.com'
})
console.log(cliente)


const maisNovo= cliente.dependente.filter(dependente=> dependente.idade===51)
console.log(maisNovo)
console.log(maisNovo[0].nome)