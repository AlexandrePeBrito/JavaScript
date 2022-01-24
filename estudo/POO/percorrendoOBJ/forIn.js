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

let relatorio=''

for(let info in cliente){
    if(typeof cliente[info]=== 'object' || typeof cliente[info]=== 'function'){
        continue
    }else{
        relatorio+=`${info}: ${cliente[info]}\n`
    }
}

console.log(relatorio)