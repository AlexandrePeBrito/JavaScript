function Cliente(nome,cpf,email,saldo){
    this.nome=nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar=function(valor){this.saldo+=valor}
    this.saque=function(valor){this.saldo-=valor}
}

const andre =new Cliente('Andre','07828426609','andre@gmail.com',1000)
console.log(andre)