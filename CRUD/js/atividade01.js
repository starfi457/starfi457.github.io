class Livro {
  constructor(val_id,val_titulo,val_autor,val_anoPublicacao){
      this.id=val_id
      this.titulo=val_titulo
      this.autor=val_autor
      this.ano=val_anoPublicacao
      this.disponivel=true
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
    this.livros=colecao;
    }
  }
  let Livraria
function criar(){
Livraria=new Biblioteca;
localStorage.clear();
const resultado = document.querySelector("#resultado");
resultado.innerHTML="Biblioteca criada com sucesso";
}
function salvar(){
if (Livraria!=undefined){
const jlivros= JSON.stringify(Livraria)
localStorage.setItem(  "Livraria",jlivros)
const resultado = document.querySelector("#resultado")
resultado.innerHTML="Biblioteca salva com sucesso <br/>";
}
else{
alert ("Biblioteca não Criada!")
}
}
function carregar(){
  if (localStorage.getItem("Livraria")===null){
    alert ("Biblioteca não carregada!") 
  }
    else{   
  const jlivros= JSON.parse(localStorage.getItem("Livraria"))
  Livraria= new Biblioteca;
  Livraria.setid(jlivros.id)
  Livraria.setlivros(jlivros.livros)
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML="Biblioteca carregada com sucesso <br/>";
  } 
  }
  function apagar(){
    if (localStorage.getItem("Livraria")===null){
      alert ("Biblioteca não carregada!") 
    }
      else{   
    localStorage.removeItem("Livraria");
    Livraria= undefined;
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML="Biblioteca apagada com sucesso <br/>";
    } 
    }
