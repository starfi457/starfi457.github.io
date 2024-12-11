class Veiculo {
    constructor(marca,modelo,ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano ;
    }
    descrever() {
      const mensagem = "Marca: "+ this.marca +", Modelo: "+ this.modelo +" Ano:  "+this.ano
      return mensagem;
    }
  }
  class Carro extends Veiculo {
    constructor(marca,modelo,ano,portas) {
      super(marca,modelo,ano);
      this.portas = portas;
      
    }
    show(){
        const mensagem = "Marca: "+ this.marca +", Modelo: "+ this.modelo +" Ano:  "+this.ano + "  Portas: "+this.portas
        return mensagem;         
    }

    
} 
class Moto  extends Veiculo{
    constructor(marca,modelo,ano,cilindradas) {
        super(marca,modelo,ano);
        this.cilindradas=cilindradas;
      }
      show(){
          const mensagem = "Marca: "+ this.marca +", Modelo: "+ this.modelo +" Ano:  "+this.ano + "  Cilindradas: "+this.cilindradas
          return mensagem;         
      }
  
}
function clean() {
    document.querySelector("#marca").value = ""
    document.querySelector("#modelo").value = ""
    document.querySelector("#veiculo").value = ""
    document.querySelector("#ano").value = ""
    document.querySelector("#portas").value=""
    document.querySelector("#cilindradas").value=""
    document.querySelector("#resultado").innerHTML=""
}
function show() {
    let val_marca=document.querySelector("#marca").value
    let val_modelo=document.querySelector("#modelo").value
    let val_ano=document.querySelector("#ano").value
    if(document.querySelector("#veiculo").value=="Carro"){
    let val_portas=document.querySelector("#portas").value
    const Ze = new Carro(val_marca,val_modelo,val_ano,val_portas)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.descrever()+"<br>"+Ze.show()}
    if(document.querySelector("#veiculo").value=="Moto"){
    let val_cilindradas=document.querySelector("#cilindradas").value
    const Ze = new Moto(val_marca,val_modelo,val_ano,val_cilindradas)
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=Ze.descrever()+"<br>"+Ze.show()
    }
}    

function troca(){
    if(document.querySelector("#veiculo").value=="Carro"){
        document.getElementById('portas').style.display="block"
        document.getElementById('Lporta').style.display="block"
        document.getElementById('cilindradas').style.display="none"
        document.getElementById('Lcilindrada').style.display="none"
    }
    if(document.querySelector("#veiculo").value=="Moto"){
        document.getElementById('portas').style.display="none"
        document.getElementById('Lporta').style.display="none"
        document.getElementById('cilindradas').style.display="block"
        document.getElementById('Lcilindrada').style.display="block"
    }
