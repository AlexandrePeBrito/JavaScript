class Cliente{
    constructor(nome,cpf,saldo){
        this.nome=nome
        this.cpf=cpf
        this.saldo=saldo
        this.agencia=1252
    }
}
class ContaCorrente{

}
const cliente1=new Cliente('Alexandre','07828626611',150)

console.log(cliente1)