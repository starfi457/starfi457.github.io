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
        if(valor<0){
        if( this.quantidadeEmEstoque + valor<0){
          return -1
        }}
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + valor
        return 0
    }
   
    
    calcularValorEstoque(){
        return this.quantidadeEmEstoque * this.preco
    }
  }
 

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

var Estoque

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
    let val_quantidade=parseFloat(document.querySelector("#quantidadeEmEstoque").value)
    let val_auxData=(document.querySelector("#dataDeValidade").value).split('-')
    var val_datadevalidade = new Date(val_auxData[0], val_auxData[1] - 1, val_auxData[2]);
    const Ze = new ProdutoPerecivel(val_nome,val_preco,val_quantidade,val_datadevalidade)
    Estoque = Ze
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.mostrarProduto()
}

function atualizarEstoque(){
    let val_valor=parseFloat(document.querySelector("#atualizaçãoDoestoque").value)
     if ( Estoque!=undefined ){
        if(Estoque.atualizarEstoque(val_valor)==-1){
            alert("Estoque Insuficiente")
        }
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML= Estoque.mostrarProduto()
    }
    else{alert("Produto não cadastrado")}
    
}

    function calcularValorEstoque(){
        if ( Estoque!=undefined ){ const resultado = document.querySelector("#resultado")
        resultado.innerHTML= Estoque.mostrarProduto() + "<br/> O valor total do estoque é R$ "+Estoque.calcularValorEstoque()
    }
    else{alert("Produto não cadastrado")}
    
    }

    function verificarValidade(){
        let dataAtual=new Date();
        if ( Estoque!=undefined ){ 
        if ( Estoque.VerificarValidade(dataAtual)==-1){
        alert("Produto fora da validade")
        }
        else{alert("Produto na validade")}
        }
        else{alert("Produto não cadastrado")}
    }
