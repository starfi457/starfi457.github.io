class Livro {
    constructor(titulo,autor) {
      this.titulo = titulo;
      this.autor =autor;
      this.disponivel=true;
    } 
   emprestar() {
    this.disponivel=false;
      }
      devolver(){
          this.disponivel=true;
      }
     status(){
       let mensagem = "Titulo: "+ this.titulo +" , Autor: "+ this.autor 
        if(this.disponivel){
        mensagem=mensagem+"  , Disponibilidade: disponivel  "
        }
        else{
             mensagem=mensagem+"  , Disponibilidade: emprestado  "
        }
        return mensagem;
        
      }
}
class Biblioteca{
constructor(exemplar){
this.lista= new Map;
this.lista.set(exemplar.titulo,exemplar)
}
adicionar(exemplar){
    this.lista.set(exemplar.titulo,exemplar)
}
atualizar(exemplar){
    this.lista.set(exemplar.titulo,exemplar)
}
recuperar(titulo){
    return this.lista.get(titulo)
}
verificar (titulo){
    return this.lista.has(titulo)
}
listarDisponivel(){
    let resultado=[];
    for(const item of this.lista.values()){
        if(item.disponivel){
            resultado.push(item)
        }
    }
    return resultado;
}

}
var Livraria 
var Obra

function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#autor").value = ""
    document.querySelector("#pesquisa").value = ""
    document.querySelector("#resultado").innerHTML=""
}
function show() {
    let val_nome=document.querySelector("#nome").value
    let val_autor=document.querySelector("#autor").value
    const Ze = new Livro(val_nome,val_autor)
   if (Livraria != undefined){
    Livraria.adicionar(Ze)    
   }
   else {
     const colecao=new Biblioteca(Ze)
     Livraria = colecao
   }

    const resultado = document.querySelector("#resultado")
    let  mensagem = "";
    for (const item of Livraria.lista.values()) {
        mensagem += item.status() + "<br>";
    }
    resultado.innerHTML = mensagem;
}    
function pesquisar(){
    const resultado = document.querySelector("#resultado")
    const val_pesquisar=document.querySelector("#pesquisa").value
    if (Livraria!=undefined){
        if(val_pesquisar!=""){
        if(Livraria.verificar(val_pesquisar)){
            Obra = Livraria.recuperar(val_pesquisar)
            resultado.innerHTML=Obra.status()
        }else{
            Obra = undefined
            resultado.innerHTML="Nenhum livro encontrado!"
        }
    }else{alert("Informe o título do livro para pesquisar!")}
    }
    else{
        resultado.innerHTML="Nenhum livro cadastrado!"
    }
    }


function emprestar(){
if (Obra!=undefined){
Obra.emprestar();
Livraria.atualizar(Obra)
const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Obra.status()
}
}

function devolver(){
    if (Obra!=undefined){
    Obra.devolver();
    Livraria.atualizar(Obra)
    const resultado = document.querySelector("#resultado")
        resultado.innerHTML=Obra.status()
    }
 }

 function listar(){
    const resultado = document.querySelector("#resultado")
    if (Livraria!=undefined){
    let  mensagem = "";
    for (const item of Livraria.lista.values()) {
        mensagem += item.status() + "<br>";
    }
    resultado.innerHTML = mensagem;}
    else
    {
        resultado.innerHTML="Nenhum livro cadastrado!"
    }
 }

 function disponiveis(){
    const resultado = document.querySelector("#resultado")
    if (Livraria!=undefined){
    let  mensagem = "";
    let Livres = Livraria.listarDisponivel();
    for (const item of Livres) {
        mensagem += item.status() + "<br>";
    }
    resultado.innerHTML = mensagem;}
    else
    {
        resultado.innerHTML="Nenhum livro cadastrado!"
    }
 }
