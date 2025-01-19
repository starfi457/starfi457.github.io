

const btnConverter = document.querySelector("#converter")

const carregaMoedas = async () => {
    let url= "https://v6.exchangerate-api.com/v6/cc5277d2c5c5890ee911e13d/latest/USD";
    let taxaConversao = fetch(url).then(data => data.json()).then(obj => { 
       return obj.conversion_rates
    })
    return taxaConversao
}

let tabelaConversao = carregaMoedas()
let Conversao

async function carregaOpcoes() {
    var lista = await tabelaConversao; 
    let opcao = ""
    Conversao = new Map()
    for (const [key, value] of Object.entries(lista)) {
        Conversao.set(key,value);
    }
    for (const taxa in lista) {
        opcao+=`<option value=${taxa}>${taxa}</option>`  
    }
    document.querySelector("#moeda").innerHTML = opcao
    return Conversao
}

let Aconverte=carregaOpcoes()

btnConverter.addEventListener("click", function(){
    let valor = parseFloat(document.querySelector("#valor-money").value)
    let moeda = document.querySelector("#moeda").value
    let taxa = parseFloat(Conversao.get(moeda))

    document.querySelector("#resultado").innerHTML = `O valor é ${(taxa * valor).toFixed(2)}`
})