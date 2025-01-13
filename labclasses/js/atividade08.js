class Turma{
constructor(curso,nome){
this.curso=curso;
this.alunos=[nome];

}
adicionar(nome){
this.alunos.push(nome);
}
remover(nome){
let i=this.alunos.indexOf(nome);
if(i != -1){
this.alunos.splice(i,1);
return 0;
}
else{
return -1;

}
}
listarAlunos(){
return this.alunos;
}
}
class TurmaOnline extends Turma{
constructor(curso,nome,linkDeAcesso){
super (curso,nome);
this.linkDeAcesso=linkDeAcesso;
}
listarAlunosOnline(){
    
return [[this.linkDeAcesso],this.alunos];
}
}

let pelegada 

function clean() {
    document.querySelector("#nomea").value = ""
    document.querySelector("#nomec").value = ""
    document.querySelector("#regime").value = ""
    document.querySelector("#linkDeAcesso").value=""
    document.querySelector("#pesquisa").value=""
    document.querySelector("#resultado").innerHTML=""
    troca()
    pelegada=undefined
}
function troca(){
    if(document.querySelector("#regime").value=="O"){
        document.getElementById('linkDeAcesso').style.display="block"
        document.getElementById('LlinkDeAcesso').style.display="block"
    }
    else{
        document.getElementById('linkDeAcesso').style.display="none"
        document.getElementById('LlinkDeAcesso').style.display="none"
    }
}
function show() {
    let val_nomea=document.querySelector("#nomea").value
    let val_nomec=document.querySelector("#nomec").value
    let Ze
    let mensagem=""
    const resultado = document.querySelector("#resultado")
    if (pelegada!=undefined){Ze=pelegada}
    if(document.querySelector("#regime").value=="O"){
      if (Ze ==undefined){  
    let val_linkDeAcesso=document.querySelector("#linkDeAcesso").value
    Ze = new TurmaOnline(val_nomec,val_nomea,val_linkDeAcesso) }
    else{ Ze.adicionar(val_nomea)}   
    mensagem="Curso: " + Ze.curso +"<br/>"+"Link: "+Ze.linkDeAcesso +"<br/>Alunos:<br/>"
    }else{
        if (Ze ==undefined){  
            Ze = new Turma(val_nomec,val_nomea) }
            else{ Ze.adicionar(val_nomea)} 
            mensagem="Curso: " + Ze.curso +"<br/>Alunos:<br/>" 
    }
    for (const item of Ze.listarAlunos()) {
        mensagem += item + "<br>";
    }
    pelegada=Ze
    resultado.innerHTML=mensagem
}
    function listar(){
        const resultado = document.querySelector("#resultado")
        if (pelegada!=undefined){
        let  mensagem = "";
        if(pelegada.constructor.name=='Turma'){
            for (const item of pelegada.listarAlunos()) {
                mensagem += item + "<br>";
            }
        }
       else {
        mensagem="Link de Acesso:  "+pelegada.listarAlunosOnline()[0]+"<br/> Alunos:   <br/>"
        for (const item of pelegada.listarAlunosOnline()[1]) {
            mensagem += item + "<br>";
        }
       }
        resultado.innerHTML = mensagem;}
        else
        {
            resultado.innerHTML="Nenhuma turma cadastrada!"
        }
     }

function remover(){
let val_expulso= document.querySelector("#pesquisa").value
if(pelegada!=undefined){
resultado=pelegada.remover(val_expulso)
if(resultado==-1){
alert("Aluno não encontrado!")
}
else{
listar()
}
}

}
