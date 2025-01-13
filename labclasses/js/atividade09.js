class Tarefa {
    constructor(descricao) {
      this.descricao=descricao
      this.concluida=false
    } 
   marcarConcluida() {
    this.concluida=true;
      }
     descrever(){
       let mensagem = "Tarefa: "+ this.descricao 
        if(this.concluida){
        mensagem=mensagem+"  , Status: Concluida "
        }
        else{
             mensagem=mensagem+"  , Status: Não concluida "
        }
        return mensagem;
        
      }
}
class ListaDeTarefas{
    constructor(exemplar){
    this.lista= new Map;
    this.lista.set(exemplar.descricao,exemplar)
    }
    adicionar(exemplar){
        this.lista.set(exemplar.descricao,exemplar)
    }
    atualizar(exemplar){
        this.lista.set(exemplar.descricao,exemplar)
    }
    recuperar(descricao){
        return this.lista.get(descricao)
    }
    verificar (descricao){
        return this.lista.has(descricao)
    }
    listarConcluidas(){
        let resultado=[];
        for(const item of this.lista.values()){
            if(item.concluida){
                resultado.push(item)
            }
        }
        return resultado;
    }
    
}
    var Listas
    var tarefinha
    
    function clean() {
        document.querySelector("#nome").value = ""
        document.querySelector("#pesquisa").value = ""
        document.querySelector("#resultado").innerHTML=""
    }
    function show() {
        let val_nome=document.querySelector("#nome").value
        const Ze = new Tarefa(val_nome)
       if (Listas != undefined){
        Listas.adicionar(Ze)    
       }
       else {
         const conjunto=new ListaDeTarefas(Ze)
         Listas = conjunto
       }
        const resultado = document.querySelector("#resultado")
        let  mensagem = "";
        for (const item of Listas.lista.values()) {
            mensagem += item.descrever() + "<br>";
        }
        resultado.innerHTML = mensagem;
    }
    function pesquisar(){
        const resultado = document.querySelector("#resultado")
        const val_pesquisar=document.querySelector("#pesquisa").value
        if (Listas!=undefined){
            if(val_pesquisar!=""){
            if(Listas.verificar(val_pesquisar)){
                tarefinha = Listas.recuperar(val_pesquisar)
                resultado.innerHTML=tarefinha.descrever()
            }else{
                tarefinha = undefined
                resultado.innerHTML="Nenhuma tarefa encontrada!"
            }
        }else{alert("Informe o nome da tarefa para pesquisar!")}
        }
        else{
            resultado.innerHTML="Nenhuma tarefa cadastrada!"
        }
    }
    
    
    function marcarConcluida(){
    if (tarefinha!=undefined){
    tarefinha.marcarConcluida();
    Listas.atualizar(tarefinha)
    const resultado = document.querySelector("#resultado")
        resultado.innerHTML=tarefinha.descrever()
    }
    }
    
    
     function listar(){
        const resultado = document.querySelector("#resultado")
        if (Listas!=undefined){
        let  mensagem = "";
        let tarefes = Listas.listarConcluidas();
        for (const item of tarefes) {
            mensagem += item.descrever() + "<br>";
        }
        resultado.innerHTML = mensagem;}
        else
        {
            resultado.innerHTML="Nenhuma tarefa cadastrada!"
        }
     }
     function todas(){
        const resultado = document.querySelector("#resultado")
        if (Listas!=undefined){
        let  mensagem = "";
        let tarefes = Listas.lista.values();
        for (const item of tarefes) {
            mensagem += item.descrever() + "<br>";
        }
        resultado.innerHTML = mensagem;}
        else
        {
            resultado.innerHTML="Nenhuma tarefa cadastrada!"
        }
     }
