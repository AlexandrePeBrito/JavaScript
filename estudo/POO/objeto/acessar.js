const cliente ={
    nome:'Alexandre',
    idade:22,
    cpf:'07828524420',
    email:'alex@gmail.com'
}

const chaves =['nome','idade','cpf','email']

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))