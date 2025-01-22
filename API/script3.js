class localidade{
    constructor(val_cidade,val_long,val_lat){
        this.nome=val_cidade
        this.latitude=val_lat
        this.longitude=val_long
    }
}
class tempo {
    constructor(val_dt,val_temp,val_t_max,val_t_min,val_clima,val_umidade,val_nuvem,val_chuva,val_simb){
        let dt=new Date(parseInt(val_dt) * 1000).toLocaleDateString()
        this.dia=dt
        this.temp_dia=val_temp+"°C"
        this.temp_max=val_t_max
        this.temp_min=val_t_min
        this.previsao=val_clima
        this.umidade=val_umidade+"%"
        this.nebulosidade=val_nuvem+"%"
        this.chuva=val_chuva+" mm/h"
        this.simbolo=val_simb

    }
}


const url_local="https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=dfd8ed1f7c68b7e6b5311651df736266&"
const url_hist="https://history.openweathermap.org/data/2.5/history/city?lang=pt&units=metric&appid=dfd8ed1f7c68b7e6b5311651df736266&"
const url_clima="https://api.openweathermap.org/data/2.5/forecast/daily?lang=pt&units=metric&appid=dfd8ed1f7c68b7e6b5311651df736266&"
const resultado = document.getElementById("resultado")



async function carregaCidade(busca){    
    let retorno = await fetch(url_local+"&q="+busca).then(data => data.json()).then(obj => { 
        return obj
     })
     let nome=""
     if (retorno[0].local_names!=undefined){
       if(retorno[0].local_names.pt!=undefined){
       nome=retorno[0].local_names.pt}
     }
     if(nome==""){ nome=retorno[0].name}
     if (retorno[0].state!=undefined){
        nome+=" - "+retorno[0].state
     }else{
        nome+=" - "+retorno[0].country
     }
     let aux = new localidade(nome,parseFloat(retorno[0].lon),parseFloat(retorno[0].lat))
    return aux;
}

async function carregaClima(val_lat,val_long){    
    let retorno = await fetch(url_clima+"&lat="+val_lat+"&lon="+val_long).then(data => data.json()).then(obj => { 
        return obj.list
     })
     let resposta=[]
     let chuva=0
     for(const item of retorno){
        if(item.rain!=undefined){chuva=item.rain}else{chuva=0}
        let previsao= new tempo(item.dt,item.temp.day,item.temp.max,item.temp.min,item.weather[0].description,item.humidity,item.clouds,chuva,item.weather[0].icon)
        resposta.push(previsao)
     }
    return resposta;
}


function Extremo(item){
    return item.temp_max>35 || item.temp_min<5
}

async function pesquisar(){
    const busca = document.getElementById("cidades").value
    if (busca==""){
        alert("Escolha uma cidade para pesquisar!")
    }
    else{
     let cidade = await carregaCidade(busca)
     let clima= await carregaClima(cidade.latitude,cidade.longitude)
     let trump = clima.filter(Extremo)

     let mensagem ="<h3>Previsão para a Cidade: "+cidade.nome+"</h3><br/>"
     mensagem+="<table><tr><td>Data</td><td>Previsão</td><td>Temperatura Média</td><td>Temperatura Máxima</td><td>Temperatura Mínima</td><td>Nebulosidade</td><td>Umidade Relativa</td><td>Precipitação</td></tr>"
     for(const item of clima){
        mensagem+="<tr><td>"+item.dia+"</td><td><img src='https://openweathermap.org/img/wn/"+item.simbolo+"@2x.png' width='50px' height='50px'>"
        mensagem+=item.previsao+"</td><td>"+item.temp_dia+"</td><td>"+item.temp_max+"°C</td><td>"+item.temp_min+"°C</td><td>"+item.nebulosidade+"</td><td>"
        mensagem+=item.umidade+"</td><td>"+item.chuva+"</td></tr>"  
     }
     mensagem+="</table><br><br><h3>Clima Extremo</h3><br/>"
     mensagem+="<table><tr><td>Data</td><td>Previsão</td><td>Temperatura Média</td><td>Temperatura Máxima</td><td>Temperatura Mínima</td><td>Nebulosidade</td><td>Umidade Relativa</td><td>Precipitação</td></tr>"
     for(const item2 of trump){
        mensagem+="<tr><td>"+item2.dia+"</td><td><img src='https://openweathermap.org/img/wn/"+item2.simbolo+"@2x.png' width='50px' height='50px'>"
        mensagem+=item2.previsao+"</td><td>"+item2.temp_dia+"</td><td>"+item2.temp_max+"°C</td><td>"+item2.temp_min+"°C</td><td>"+item2.nebulosidade+"</td><td>"
        mensagem+=item2.umidade+"</td><td>"+item2.chuva+"</td></tr>"  
     }    
     mensagem+="</table>" 
     resultado.innerHTML= mensagem
    }
}