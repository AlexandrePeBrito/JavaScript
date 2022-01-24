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
    },{
        nome:'Joselito',
        parentesco:'pai',
        idade:61,
        cpf:'07828524420',
        email:'joselito@gmail.com'
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo+=valor
    },
    saque:function(valor){
        this.saldo-=valor
    }
}




oferecerSeguro(cliente)

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj)
    if(propsCliente.includes('dependente')){
        console.log('Oferecer seguro')
    }
}
