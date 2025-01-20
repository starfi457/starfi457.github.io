class Filme {
constructor(val_titulo,val_ano,val_diretor,val_imagem){
this.titulo=val_titulo
this.ano=val_ano
this.diretor=val_diretor
this.imagem=val_imagem
}

}

const url="https://www.omdbapi.com/?i=tt3896198&apikey=50c994ab&type=movie";
const urlD="https://www.omdbapi.com/?i=tt3896198&apikey=50c994ab";
const btnPesquisar = document.querySelector("#pesquisar")


async function carregaFilmes(busca){    
    let resultado = await fetch(url+"&s="+busca).then(data => data.json()).then(obj => { 
        return obj.Search
     })
    return resultado;
}

async function carregarDiretor(busca){    
    let resultado = await fetch(urlD+"&t="+busca).then(data => data.json()).then(obj => { 
        return obj.Director
     })
    return resultado;
}

async function Carga(item){
    let val_diretor=await carregarDiretor(item.Title)
    let ze=new Filme(item.Title,parseInt(item.Year),val_diretor,item.Poster)
    return ze
}
function GeracaoZ(item){
    return item.ano>=2000
}

btnPesquisar.addEventListener('click',async()=>{
    let titulo = document.getElementById("titulo").value
    if (titulo==""){
        alert("Informe um título para pesquisar!")
    }
    else{
     let lista = await carregaFilmes(titulo)
     let resposta=await Promise.all(lista.map(Carga))
     let filtrado=resposta.filter(GeracaoZ)
     let resultado = document.getElementById('resultado')
     let mensagem ="<table><tr><th>Título</th><th>Ano</th><th>Diretor</th><th>Poster</th></tr>"
     for (const item of filtrado){
        let linha="<tr><td>"+item.titulo+"</td><td>"+item.ano+"</td><td>"+item.diretor+"</td><td>"
        if (item.imagem!="N/A"){
        linha+="<img src='"+item.imagem+"' width='100' height='150'></td></tr>"}
        else {linha+="<h2>SEM IMAGEM</h2></td></tr>"}
        mensagem+=linha
     }
     mensagem+="</table>"
     resultado.innerHTML= mensagem
    }

})
