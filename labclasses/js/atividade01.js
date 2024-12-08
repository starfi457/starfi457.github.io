class Pessoa {
    constructor(nome, idade,sexo) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo ;
    }
    apresentar() {
      const mensagem = "Olá, meu nome é "+ this.nome +", tenho "+ this.idade +" anos e sou "+this.sexo
      return mensagem;
    }
  }
  class Aluno extends Pessoa {
    constructor(nome,idade,sexo,matricula,curso) {
      super(nome,idade,sexo);
      this.matricula = matricula;
      this.curso=curso;
    }
    show(){
        const mensagem = "Olá, meu nome é "+ this.nome +", tenho "+ this.idade +" anos e sou "+this.sexo+". Possuo a matrícula "+this.matricula+" no curso "+this.curso
        return mensagem;         
    }
} 
function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#idade").value = ""
    document.querySelector("#sexo").value = ""
    document.querySelector("#matricula").value = ""
    document.querySelector("#curso").value=""
    document.querySelector("#resultado").innerHTML=""
}
function show() {
    let val_nome=document.querySelector("#nome").value
    let val_idade=document.querySelector("#idade").value
    let val_sexo=document.querySelector("#sexo").value
    let val_matricula=document.querySelector("#matricula").value
    let val_curso=document.querySelector("#curso").value
    const Ze = new Aluno(val_nome,val_idade,val_sexo,val_matricula,val_curso)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.apresentar()+"<br>"+Ze.show()
}    
