class Livro {
    constructor(val_id,val_titulo,val_autor,val_anoPublicacao,val_disponivel){
        this.id=val_id
        this.titulo=val_titulo
        this.autor=val_autor
        this.ano=val_anoPublicacao
        this.disponivel=val_disponivel
    }
    detalhes(){
        let mensagem="ID: "+this.id+" Título: "+this.titulo+" Autor: "+this.autor+" Ano de Publicação: "+this.ano+" Status: ";
        if (this.disponivel){
           mensagem=mensagem+" disponível"
        }else{
           mensagem=mensagem+" indisponível"
        }
        return mensagem;   
    }
    emprestar(){
        this.disponivel=false
    }
    devolver(){
        this.disponivel=true
    }  
    atualizar(val_titulo,val_autor,val_anoPublicacao) {
        this.titulo=val_titulo
        this.autor=val_autor
        this.ano=val_anoPublicacao      
    }
}
class Biblioteca {
    constructor() {
      this.id=0;
      this.livros=[];
    }
    proxid(){
      this.id++;
      return this.id;
    }
    setid(chave){
    this.id=chave;
    }
    setlivros(colecao){
        this.livros=[];
        for (const item of colecao){
            const ze =new Livro(item.id,item.titulo,item.autor,item.ano,item.disponivel)
            this.livros.push(ze)
        }
    this.livros=colecao;
    }
    adicionarLivro(exemplar){
        this.livros.push(exemplar)
        this.salvarDados()
    }
   listarLivros(){
      return this.livros
   }
   pesquisarLivros(busca){
    let filtro=true
    let resultado=[]
    for (const item of this.livros){
        if(busca.titulo !=""){
            filtro= filtro && (busca.titulo==item.titulo)
        }
        if(busca.autor !=""){
            filtro= filtro && (busca.autor==item.autor)
        }
        if(busca.ano !=""){
            filtro= filtro && (busca.ano==item.ano)
        }
        if(busca.id !=""){
            filtro= filtro && (busca.id==item.id)
        }
        if(filtro){
            resultado.push(item)
        }else {filtro=true}
    }
    return resultado
   }
   atualizarLivro(val_id, novosDados){
    const i = this.livros.map(e => e.id).indexOf(val_id);
    if(i != -1){
        this.livros[i]=novosDados
        this.salvarDados()
        return 0;
        }
        else{
        return -1;        
        }   
   }
   removerLivro(val_id){
        const i = this.livros.map(e => e.id).indexOf(val_id);
        if(i != -1){
        this.livros.splice(i,1);
        this.salvarDados()
        return 0;
        }
        else{
        return -1;        
        }
        
   }
   salvarDados(){
    let jlivros = JSON.stringify(this)
    localStorage.setItem("Livraria",jlivros)
   }

  }
var Livraria
var livrinho

if(localStorage.getItem("Livraria")===null){
    Livraria=undefined
}else{
    Livraria=new Biblioteca
    jlivros=JSON.parse(localStorage.getItem("Livraria"))
    Livraria.setid(jlivros.id)
    Livraria.setlivros(jlivros.livros)
}


function clean() {
    document.querySelector("#chave").value = ""
    document.querySelector("#titulo").value = ""
    document.querySelector("#autor").value = ""
    document.querySelector("#ano").value = ""
    document.querySelector("#resultado").innerHTML=""
}

function pesquisar() {
    if (Livraria!=undefined ){
    let mensagem=""
    let val_id=document.querySelector("#chave").value
    let resultado= document.querySelector("#resultado")
    mensagem=val_id 
    if(mensagem==""){
      alert("Informe o Id para a  busca!!!")
    } else
    {
        let busca= new Livro(val_id,"","","",true)
        let ze
        const lista = Livraria.pesquisarLivros(busca)
        mensagem="Foram encontrados: "+ lista.length+ " livro(s)<br/>"
        for (const exemplar of lista){
            ze=new Livro(exemplar.id,exemplar.titulo,exemplar.autor,exemplar.ano,exemplar.disponivel)
            mensagem+=ze.detalhes()+"<br/>"
        }
        resultado.innerHTML=mensagem
        if (lista.length==1){ 
        livrinho=ze
        document.querySelector("#titulo").value=ze.titulo
        document.querySelector("#autor").value=ze.autor
        document.querySelector("#ano").value=ze.ano

        }
        else{livrinho=undefined}
    }  
    }
    else{
       alert("Biblioteca inexistente!!!")
    }

}


function remover() {
    if (Livraria!=undefined ){
        if(livrinho!=undefined){            
            Livraria.removerLivro(livrinho.id)
            livrinho=undefined
            let resultado= document.querySelector("#resultado")
            let mensagem=""
            let ze
            for (const exemplar of Livraria.listarLivros()){
                ze=new Livro(exemplar.id,exemplar.titulo,exemplar.autor,exemplar.ano,exemplar.disponivel)
               mensagem += ze.detalhes() + "<br>";
            }
            resultado.innerHTML=mensagem
        }
    }
    else{
       alert("Biblioteca inexistente!!!")
    }
}
