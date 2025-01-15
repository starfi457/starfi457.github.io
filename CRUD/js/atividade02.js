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
            let exemplar=new Livro(item.id,item.titulo,item.autor,item.ano,item.disponivel)
            this.livros.push(exemplar)
        }
    }
    adicionarLivro(exemplar){
        this.livros.push(exemplar)
        this.salvarDados()
    }
   listarLivros(){
      return this.livros
   }
   atualizarLivro(id, novosDados){
    const i = this.livros.map(e => e.id).indexOf(pesquisa);
    if(i != -1){
        this.livros[i].atualizar(novosDados.titulo,novosDados.autor,novosDados.ano)
        this.salvarDados()
        return 0;
        }
        else{
        return -1;        
        }   
   }
   removerLivro(pesquisa){
        const i = this.livros.map(e => e.id).indexOf(pesquisa);
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
if(localStorage.getItem("Livraria")===null){
    Livraria=undefined
}else{
    Livraria=new Biblioteca
    jlivros=JSON.parse(localStorage.getItem("Livraria"))
    Livraria.setid(jlivros.id)
    Livraria.setlivros(jlivros.livros)
}

function clean() {
    document.querySelector("#titulo").value = ""
    document.querySelector("#autor").value = ""
    document.querySelector("#ano").value = ""
    document.querySelector("#resultado").innerHTML=""
}
function cadastrar() {
    let val_titulo=document.querySelector("#titulo").value
    let val_autor=document.querySelector("#autor").value
    let val_ano=parseInt (document.querySelector("#ano").value)
    const resultado = document.querySelector("#resultado")
    if(Livraria==undefined){
        alert("Biblioteca inexistente!!!")
    }else{
     let chave=Livraria.proxid()
     let exemplar=new Livro(chave,val_titulo,val_autor,val_ano,true)
     Livraria.adicionarLivro(exemplar)
     let mensagem=""
     for (const item of Livraria.listarLivros()){
        mensagem += item.detalhes() + "<br>";
     }
     resultado.innerHTML=mensagem
    }
  
}
}

