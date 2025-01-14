class Carro {
    constructor(placa,modelo) {
      this.placa=placa;
      this.modelo=modelo
      
    } 
     descrever(){
       let mensagem = "Placa: "+ this.placa + "  Modelo: " + this.modelo
       return mensagem;

}}
class Estacionamento{
    constructor(vagasTotais,veiculo){
        this.vagasTotais=vagasTotais;
        this.carros=[veiculo];
        
        }
        adicionar(veiculo){
        const ocupadas= this.carros.length;
        if (this.vagasTotais>=(ocupadas+1)){    
            this.carros.push(veiculo)
        return 0
        } else {return -1}
        }
        remover(pesquisa){
        const i = this.carros.map(e => e.placa).indexOf(pesquisa);
        if(i != -1){
        this.carros.splice(i,1);
        return 0;
        }
        else{
        return -1;        
        }
        }
        listarCarros(){
        return this.carros;
        }
        }
    var patio   
    
    function clean() {
        document.querySelector("#placa").value = ""
        document.querySelector("#modelo").value=""
        document.querySelector("#vagas").value=""
        document.querySelector("#pesquisa").value = ""
        document.querySelector("#resultado").innerHTML=""
    }
    function show() {
        let val_placa=document.querySelector("#placa").value
        let val_modelo=document.querySelector("#modelo").value
        let val_vagas=document.querySelector("#vagas").value
        const Ze = new Carro(val_placa,val_modelo)
        let resposta=0
       if (patio != undefined){
         resposta=patio.adicionar(Ze)    
       }
       else {
         const conjunto=new Estacionamento(val_vagas,Ze)
         patio = conjunto
       }
        const resultado = document.querySelector("#resultado")
        let  mensagem = "";
        if (resposta==-1){
             mensagem = "Estacionamento lotado!"
        }
        else{
        for (const item of patio.carros) {
            mensagem += item.descrever() + "<br>";
        }}
        resultado.innerHTML = mensagem;
    }
    function removerCarro(){
        const resultado = document.querySelector("#resultado")
        const val_pesquisar=document.querySelector("#pesquisa").value
        if (patio!=undefined){
            if(val_pesquisar!=""){
            if(patio.remover(val_pesquisar)!=-1){
                listar()
            }else{
                resultado.innerHTML="Nenhum carro encontrado!"
            }
        }else{alert("Informe a placa para pesquisar!")}
        }
        else{
            resultado.innerHTML="Nenhum carro cadastrado!"
        }
    }
    
    
     function listar(){
        const resultado = document.querySelector("#resultado")
        if (patio!=undefined){
        let  mensagem = "Total de Vagas: "+ patio.vagasTotais+"<br>";        
        for (const item of patio.listarCarros()) {
            mensagem += item.descrever() + "<br>";
        }
        resultado.innerHTML = mensagem;}
        else
        {
            resultado.innerHTML="Nenhum carro cadastrado!"
        }
     }
     
