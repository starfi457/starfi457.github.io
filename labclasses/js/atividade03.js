class Produto {
    constructor(nome,preco,quantidadeEmEstoque) {
      this.nome = nome;
      this.preco = preco;
      this.quantidadeEmEstoque=quantidadeEmEstoque;
    }
    mostrarProduto() {
      const mensagem = "Produto "+ this.nome +", possui o valor de R$ "+ this.preco +  " , cujo a quantidade em estoque é  "+this.quantidadeEmEstoque
      return mensagem;
    }
    atualizarEstoque(valor){
        this.saldo = this.saldo + valor
        return 0
    }
    sacar(valor){
        if (this.saldo>=valor){this.saldo = this.saldo - valor}
        else {return -1}
        return 0
    }
    calcularValorEstoque(){
        this.produtos = this.quantidadeEmEstoque * this.preco
        return 0
    }
  }
  let d = new Date();

  class ProdutoPerecivel extends Produto {
    constructor(nome,preco,quantidadeEmEstoque,dataDeValidade) {
      super(nome,preco,quantidadeEmEstoque);
      this.dataDeValidade = dataDeValidade;
    }
    
   VerificarValidade(dataTeste){
        if (dataTeste>this.dataDeValidade){
            return -1
        }
        else {return 0}
              
    }
} 

var Conta

function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#preco").value = ""
    document.querySelector("#quantidadeEmEstoque").value = ""
    document.querySelector("#dataDeValidade").value = ""
    document.querySelector("#resultado").innerHTML=""
}
function cadastrar() {
    let val_nome=document.querySelector("#nome").value
    let val_preco=parseFloat (document.querySelector("#preco").value)
    let val_quantidade=document.querySelector("#quantidadeEmEstoque").value
    let val_datadevalidade=document.querySelector("#dataDeValidade")
    const Ze = new ProdutoPerecivel(val_nome,val_preco,val_quantidade,val_datadevalidade)
    Conta = Ze
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.mostrarProduto()
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
