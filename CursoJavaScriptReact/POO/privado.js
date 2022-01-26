class Cliente{
    constructor(nome,cpf){
        this.nome=nome
        this.cpf=cpf
    }
}
class ContaCorrente{
    constructor(saldo){
        this.saldo=saldo
        this.agencia=1252
    }
    saque(valor){
        if(this.saldo>=valor){
            this.saldo-=valor
        }
    }
    deposito(valor){
        if(valor>0){
            this.saldo+=valor
        }
    }
    extrato(){
        console.log(`Na sua conta tem R$${this.#saldo}`)
    }
}

const cliente1=new Cliente('Alexandre','07828626611')
const cliente1Corrente= new ContaCorrente(1000)
cliente1Corrente.saque(250)

console.log(cliente1Corrente.extrato())