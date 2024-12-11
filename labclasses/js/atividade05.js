class Funcionario {
    constructor(nome,salario) {
      this.nome=nome;
      this.salario=salario;
    }
    descrever() {
      const mensagem = "Nome: "+ this.nome +", Salario: "+ this.salario 
      return mensagem;
    }
    aumentarSalario(aumento){
   this.salario=this.salario+this.salario*(aumento/100);
    }
  }
  class Gerente extends Funcionario {
    constructor(nome,salario,departamento) {
      super(nome,salario);
      this.departamento = departamento;
      
    }
    show(){
        const mensagem = "Nome: "+ this.nome +", Salario: "+ this.salario + " Departamento: "+this.departamento
      return mensagem;
    }

    
} 
class Estagiario  extends Funcionario{
    constructor(nome,salario) {
        super(nome,salario);
      }
      show(){
        const mensagem = "Nome: "+ this.nome +", Salario: "+ this.salario 
        return mensagem;
      }
      aumentarSalario(aumento){
        if(aumento>10){
        this.salario=this.salario*1.1;
        }
        else{
            this.salario=this.salario+this.salario*(aumento/100);
        }
        }
}
var pelego

function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#salario").value = ""
    document.querySelector("#cargo").value = ""
    document.querySelector("#departamento").value=""
    document.querySelector("#aumento").value=""
    document.querySelector("#resultado").innerHTML=""
}
function show() {
    let val_nome=document.querySelector("#nome").value
    let val_salario=parseFloat(document.querySelector("#salario").value)
    let val_cargo=document.querySelector("#cargo").value
    let Ze
    if(document.querySelector("#cargo").value=="Gerente"){
    let val_departamento=document.querySelector("#departamento").value
    Ze = new Gerente(val_nome,val_salario,val_departamento)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.descrever()+"<br>"+Ze.show()}
    if(document.querySelector("#cargo").value=="Funcionario") 
    { Ze = new Funcionario(val_nome,val_salario,val_cargo,)
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML=Ze.descrever()+"<br>"}
        if(document.querySelector("#cargo").value=="Estagiario") 
            { Ze = new Estagiario(val_nome,val_salario,val_cargo,)
                const resultado = document.querySelector("#resultado")
                resultado.innerHTML=Ze.descrever()+"<br>"} 
        pelego=Ze
    }
    
function troca(){
    if(document.querySelector("#cargo").value=="Gerente"){
        document.getElementById('departamento').style.display="block"
        document.getElementById('Ldepartamento').style.display="block"
    }
    else{
        document.getElementById('departamento').style.display="none"
        document.getElementById('Ldepartamento').style.display="none"
    }
}

function aumentarSalario(){ 
    let val_valor=parseFloat(document.querySelector("#aumento").value)
    if (pelego !=undefined ){
       pelego.aumentarSalario(val_valor)
       const resultado = document.querySelector("#resultado")
       resultado.innerHTML=pelego.descrever() }
   else{alert("Funcionario não cadastrado")}
   



}
