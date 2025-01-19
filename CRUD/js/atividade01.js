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
  atualizar(val_titulo,val_autor,val_anoPublicacao,val_disponivel) {
      this.titulo=val_titulo
      this.autor=val_autor
      this.ano=val_anoPublicacao   
      this.disponivel=val_disponivel   
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
function listar(){
  const resultado = document.querySelector("#resultado")
  if (Livraria!=undefined){
    let mensagem=""
    for (const item of Livraria.listarLivros()){
       mensagem += item.detalhes() + "<br>";
    }
    resultado.innerHTML=mensagem
  }
  else{
    alert ("Biblioteca não Criada!")
    }  
}
