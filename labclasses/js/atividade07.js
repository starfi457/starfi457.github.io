class Jogador {
    constructor(nome,nivel,experiencia) {
      this.nome = nome;
      this.nivel =nivel;
      this.experiencia=experiencia;
    }
    mostrarJogador() {
      const mensagem = "Nome do Jogador: "+ this.nome +" , Nível: "+ this.nivel + "  , Experiencia: "+this.experiencia
      return mensagem;
    }
    ganharExperiencia(pontos){
        this.experiencia = this.experiencia + pontos
        return 0
    }
   subirDeNivel(){
        if (this.experiencia>=100)
        {this.nivel = this.nivel+1
        this.experiencia=0

        }
        else {return -1}
        return 0
    }
  }
  class Guerreiro extends Jogador {
    constructor(nome,nivel,experiencia,forca) {
      super(nome,nivel,experiencia);
      this.forca = forca;
    }
    show(){
        const mensagem = "Nome do Jogador: "+ this.nome +" , Nível: "+ this.nivel + ", Experiencia: "+this.experiencia + " , Força:  "+this.forca
        return mensagem;

    }
    subirDeNivel(){
        if (this.experiencia>=100){
        this.nivel = this.nivel+1
        this.forca=this.forca+1
        this.experiencia=0
        
        }
        else {return -1}
        return 0
    }
} 

var Conta

function clean() {
    document.querySelector("#nome").value = ""
    document.querySelector("#nivel").value = ""
    document.querySelector("#experiencia").value = ""
    document.querySelector("#aumento").value = ""
    document.querySelector("#forca").value=""
     document.querySelector("#resultado").innerHTML=""
}
function show() {
    let val_nome=document.querySelector("#nome").value
    let val_nivel=parseFloat(document.querySelector("#nivel").value)
    let val_experiencia=parseFloat(document.querySelector("#experiencia").value)
    let val_forca=parseFloat(document.querySelector("#forca").value)
    const Ze = new Guerreiro(val_nome,val_nivel,val_experiencia,val_forca)
    Conta = Ze
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.mostrarJogador()+"<br>"+Ze.show()
}    

function ganharExperiencia(){
    let val_valor=parseFloat(document.querySelector("#aumento").value)
     if (Conta !=undefined ){
        Conta.ganharExperiencia(val_valor)
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML=Conta.mostrarJogador()+"<br>"+Conta.show()}

    else{alert("Jogador não cadastrado")}
    
}
function subirdeNivel(){
    if (Conta !=undefined ){
       Conta.subirDeNivel()
       const resultado = document.querySelector("#resultado")
       resultado.innerHTML=Conta.mostrarJogador()+"<br>"+Conta.show()}

   else{alert("Jogador não cadastrado")}
   
}
