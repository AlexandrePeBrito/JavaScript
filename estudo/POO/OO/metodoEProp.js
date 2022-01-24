class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome=nome
        this.email=email
        this.cpf=cpf
        this.saldo=saldo
    }

    depositar(valor){
        this.saldo+=valor
    }

    saque(valor){
        this.saldo-=valor
    }

    extrato(){
        console.log(`O seu saldo eh ${this.saldo}`)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca=saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca+=valor
    }

    saquePoupanca(valor){
        this.saldoPoupanca-=valor
    }

    extratoPoupanca(){
        console.log(`O seu saldo eh ${this.saldoPoupanca}`)
    }
}


const alexandre=new ClientePoupanca('alexandre','07828526609','alex@gmail,com',1000,5000)

alexandre.extrato()
alexandre.extratoPoupanca()