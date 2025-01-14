class ContaBancaria {
    constructor(titular,saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
    mostrarSaldo() {
      const mensagem = "Conta Bancária de "+ this.titular +", possui saldo de R$ "+ this.saldo
      return mensagem;
    }
    depositar(valor){
        this.saldo = this.saldo + valor
        return 0
    }
    sacar(valor){
        if (this.saldo>=valor){this.saldo = this.saldo - valor}
        else {return -1}
        return 0
    }
  }
  class ContaCorrente extends ContaBancaria {
    constructor(titular,saldo,limite) {
      super(titular,saldo);
      this.limite = limite;
    }
    sacar(valor){
        let val_conta = this.saldo+this.limite;
        if (val_conta>=valor){this.saldo = this.saldo - valor}
        else {return -1}
        return 0        
    }
} 

var Conta

function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#saldo").value = ""
    document.querySelector("#limite").value = ""
    document.querySelector("#valor").value = ""
    document.querySelector("#resultado").innerHTML=""
}
function cadastrar() {
    let val_nome=document.querySelector("#nome").value
    let val_saldo=parseFloat (document.querySelector("#saldo").value)
    let val_limite=parseFloat(document.querySelector("#limite").value)
    const Ze = new ContaCorrente(val_nome,val_saldo,val_limite)
    Conta = Ze
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.mostrarSaldo()
}
function depositar(){
    let val_valor=parseFloat(document.querySelector("#valor").value)
     if (Conta !=undefined ){
        Conta.depositar(val_valor)
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML= Conta.mostrarSaldo()
    }
    else{alert("Titular não cadastrado")}
    
}
function sacar(){
    let val_valor=parseFloat(document.querySelector("#valor").value)
    if (Conta != undefined){
         let teste= Conta.sacar(val_valor)
         if(teste==-1){alert("Saldo insuficiente")}
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML= Conta.mostrarSaldo()
    }
    else{alert("Titular não cadastrado")}  
}

