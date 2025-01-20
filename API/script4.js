class livro {
    constructor(val_id,val_titulo,val_autor){
        this.id=val_id
        this.titulo=val_titulo
        this.autor=val_autor
        this.status=true
        this.emprestimo=0
    }
    emprestar(){
        if(this.status){
        this.status=false
        this.emprestimo+=1
        }
    }
    devolver(){
        if(!this.status){
        this.status=true
        }
    }
    detalhe(){
        let mensagem="Id: "+this.id+" Título: "+this.titulo+" Autor: "+this.autor
        if(this.status){
          mensagem+=" Status: disponível"
        }else{
          mensagem+=" Status: indisponível"
        }
        mensagem+=" Emprestimos: "+this.emprestimo
        return mensagem
    }
}
class estoque {
    constructor(){
        this.lista=[]
        this.chave=0
    }
    novoID(){
        this.chave+=1
        return this.chave
    }
    adicionar(exemplar){
        this.lista.push(exemplar)
    }
    pesquisar(id,titulo){  
        let resposta=[]      
        if (id!=""){
            const pos=this.lista.map(e => e.id).indexOf(parseInt(id))
            if(pos!=-1){  resposta.push(this.lista[pos])}
          return resposta
        }
        resposta = this.lista.filter(function (e){ return e.titulo==titulo})
        return resposta
    }
    atualizar(ID,exemplar){
        const pos = this.lista.map(e => e.id).indexOf(ID)
        if (pos==-1){
            return pos
        }else{
            this.lista[pos]=exemplar
            return 0
        }
    }
    disponiveis(){
        const resultado=this.lista.filter(function (e){ return e.status})
        return resultado
      }
    emprestados(){
        const resultado=this.lista.map(function (e){ 
            if(!e.status){
                return e.titulo
            }
            else{
                return "Disponível"
            }
        }).filter(function (e){ return e!="Disponível"})
        return resultado
    } 
    totalEmprestados(){
        const valor=this.lista.reduce(function (total, e) { return total + e.emprestimo }, 0)
        return valor
    }
    }
    let Biblioteca
    let livrinho
    const resultado=document.getElementById("resultado")
    const total=document.getElementById("Total")
    const totalEmprestado=document.getElementById("Total-Emprestados")
    const titulo=document.getElementById("titulo")
    const autor=document.getElementById("autor")
    const busca=document.getElementById("busca")
    const chave=document.getElementById("chave")
        
    function criar(){
        Biblioteca=new estoque
        resultado.innerHTML="Biblioteca criada com sucesso!"
        total.innerHTML=Biblioteca.lista.length
        totalEmprestado.innerHTML=Biblioteca.totalEmprestados()
    }
    function clean(){
      resultado.innerHTML=""
      titulo.value=""
      autor.value=""
    }

    function clean2(){
        resultado.innerHTML=""
        busca.value=""
       chave.value=""
    }


    function cadastrar(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
        let val_titulo=titulo.value
        let val_autor=autor.value
        if (val_titulo==""||val_autor==""){
          alert("Campos não preenchidos!")
        }else{
         let val_id=Biblioteca.novoID()
         let exemplar=new livro(val_id,val_titulo,val_autor)
         Biblioteca.adicionar(exemplar)
         total.innerHTML=Biblioteca.lista.length
         totalEmprestado.innerHTML=Biblioteca.totalEmprestados()
         let mensagem=""
         for(const item of Biblioteca.lista){
            mensagem+=item.detalhe()+"<br/>"
         }
         resultado.innerHTML=mensagem
        }

        }
    }
    function pesquisar(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
         let val_id=chave.value
         let val_titulo=busca.value
         if (val_id=="" && val_titulo==""){
            alert("Campos não preenchidos!")
         }
         else {
            let resposta = Biblioteca.pesquisar(val_id,val_titulo)
            if(resposta.length==1){
                livrinho=resposta[0]
            }else{livrinho=undefined}
            let mensagem=""
            for(const item of resposta){
                mensagem+=item.detalhe()+"<br/>"
            }
            resultado.innerHTML=mensagem
         }

        }  
    }
    function emprestar(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
            if(livrinho!=undefined){
                livrinho.emprestar()
                Biblioteca.atualizar(livrinho.ID,livrinho)
                total.innerHTML=Biblioteca.lista.length
                totalEmprestado.innerHTML=Biblioteca.totalEmprestados()
                resultado.innerHTML=livrinho.detalhe()
            }        
        }  
    }
    function devolver(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
            if(livrinho!=undefined){
                livrinho.devolver()
                Biblioteca.atualizar(livrinho.ID,livrinho)
                total.innerHTML=Biblioteca.lista.length
                totalEmprestado.innerHTML=Biblioteca.totalEmprestados()
                resultado.innerHTML=livrinho.detalhe()
            }                       
        }  
    }
    function todos(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
            let mensagem=""
            for(const item of Biblioteca.lista){
               mensagem+=item.detalhe()+"<br/>"
            }
            resultado.innerHTML=mensagem       
        }  
    }
    function disponiveis(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
            let mensagem=""
            for(const item of Biblioteca.disponiveis()){
               mensagem+=item.detalhe()+"<br/>"
            }
            resultado.innerHTML=mensagem       
        }  
    }
    function emprestados(){
        if(Biblioteca==undefined){
            alert("Biblioteca não foi criada")
        }else{
            let mensagem=""
            for(const item of Biblioteca.emprestados()){
               mensagem+=item+"<br/>"
            }
            resultado.innerHTML=mensagem        
        }  
    }                    