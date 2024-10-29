
const listaTransacoes=JSON.parse(localStorage.getItem("listaTransacoes"))
const SearchBtn = document.querySelector(".btn2")
const pesquisaPorId = (vetor, objId) => vetor.find(item => item.x === objId)
function Gvalor(x,y){
	this.x = x;
    this.y=y}
    

/**
 * Function that returns an object with form data
 * @returns data1:Date, data2:Date
 */
const getFormValues = () => {
    //dados da nova entrada
    const valData1 = document.querySelector("#report-date1").value
    const valData2 = document.querySelector("#report-date2").value
    return {data1: valData1, 
            data2: valData2 
}
}

/**
 * Converts a currency to number type
 * @param {currency} value 
 * @returns {Number} value 
 */

const currencyToNumber = value => parseFloat(("" + value).substring(4,value.length))

/**
 * Converts a string to currency type
 * @param {String} value 
 * @returns currency
 */
const stringToCurrency = value => `R$ ${value.toFixed(2)}`

const clearForm = () => {
    document.querySelector("#report-date1").value = ""
    document.querySelector("#report-date2").value = ""
}
const SearchControle = () => {
    //a. Recuperar os valores digitados
    var lDespesa=[]
    var lReceita=[]
    var lSaldo=[]
    var saldo=0
    const ulDespesa = document.querySelector("#despesas")
    const ulReceita = document.querySelector("#receitas")
    ulDespesa.innerHTML=""
    ulReceita.innerHTML=""
    const formData = getFormValues()
    //atualizar o DOM
    const buscaData1 = new Date(formData.data1)
    const buscaData2 = new Date(formData.data2)
    if(listaTransacoes==null){
        alert("Nenhuma transação cadastrada")
        clearForm()
        return null
    }else{
        if(listaTransacoes.length==0){
            alert("Nenhuma transação cadastrada")
            clearForm()
            return null    
        }
    }
    //Transacao(id,dtTransaction,value,name,total,categoryName,categoryType)
    var lResultado=[]
    for(i=0;i<listaTransacoes.length;i++){
        var transacao=listaTransacoes[i]
        const valData = new Date(transacao.dtTransaction)
        if(valData>=buscaData1&&valData<=buscaData2){
            lResultado.push(transacao)
        }
    }
    if(lResultado.length==0){
        alert("Nenhuma transação encontrada")
        clearForm()
        return null    
    }

    for(i=0;i<lResultado.length;i++){
       var item=lResultado[i]
       var elemento=null
       if(item.categoryType=="receita"){
         elemento=pesquisaPorId(lReceita,item.categoryName)
         if (elemento==null){
           lReceita.push(new Gvalor(item.categoryName,item.value))
         }else
         {
            const index = lReceita.indexOf(elemento);
            lReceita[index].y=lReceita[index].y+item.value
         }
         saldo = saldo + item.value
         elemento=pesquisaPorId(lSaldo,item.dtTransaction)
         if (elemento==null){
            lSaldo.push(new Gvalor(item.dtTransaction,item.value))
          }else
          {
             const index = lSaldo.indexOf(elemento);
             lSaldo[index].y=lSaldo[index].y+item.value
          }
          const valdateReceita = item.dtTransaction.substr(8,2)+'/'+item.dtTransaction.substr(5,2)+'/'+item.dtTransaction.substr(0,4)

          ulReceita.innerHTML += `<li class="plus"><span>${valdateReceita}</span><span>${item.categoryName}</span>
          ${item.name} <span> + ${stringToCurrency(item.value)}</span>
        </li>`          
       }
       else
       {
        elemento=pesquisaPorId(lDespesa,item.categoryName)
        if (elemento==null){
            lDespesa.push(new Gvalor(item.categoryName,item.value))
        }else
        {
           const index = lDespesa.indexOf(elemento);
           lDespesa[index].y=lDespesa[index].y+item.value
        }
        saldo = saldo - item.value
        elemento=pesquisaPorId(lSaldo,item.dtTransaction)
        if (elemento==null){
           lSaldo.push(new Gvalor(item.dtTransaction,item.value*(-1)))
         }else
         {
            const index = lSaldo.indexOf(elemento);
            lSaldo[index].y=lSaldo[index].y-item.value
         }
         const valdateDespesa = item.dtTransaction.substr(8,2)+'/'+item.dtTransaction.substr(5,2)+'/'+item.dtTransaction.substr(0,4)
         ulDespesa.innerHTML += `<li class="minus"><span>${valdateDespesa}</span><span>${item.categoryName}</span>
         ${item.name} <span> - ${stringToCurrency(item.value)}</span>
       </li>`           
       }   
    }
    const lauxSaldo = lSaldo.reduce((acc, curr) => {
        const index = acc.findIndex(
            item => Object.values(item).
            some(value => value > 
                Object.values(curr)[0]));
        if (index === -1) {
            acc.push(curr);
        } else {
            acc.splice(index, 0, curr);
        }
        return acc;
    }, [])
    for(i=1;i<lauxSaldo.length;i++){
        lauxSaldo[i].y=lauxSaldo[i].y+lauxSaldo[i-1].y
    }
    lSaldo=lauxSaldo
    document.querySelector("#balance").textContent = stringToCurrency(saldo)
    if(Chart.getChart("CReceita")) {
        Chart.getChart("CReceita")?.destroy()
      }
    if(Chart.getChart("CDespesa")) {
    Chart.getChart("CDespesa")?.destroy()
    }  
    if(Chart.getChart("CSaldo")) {
        Chart.getChart("CSaldo")?.destroy()
        }  
    const CReceita = document.getElementById('CReceita')
    new Chart(CReceita, {
        type: 'pie',
        data: {
        labels: lReceita.map(row=>row.x),
        datasets: [{
            label: 'Receita',
            data: lReceita.map(row=>row.y),
            borderWidth: 1
        }]
        },
        options: {
        maintainAspectRatio:false
        }
        }
    );
    const CDespesa = document.getElementById('CDespesa')
    new Chart(CDespesa, {
        type: 'pie',
        data: {
        labels: lDespesa.map(row=>row.x),
        datasets: [{
            label: 'Despesa',
            data: lDespesa.map(row=>row.y),
            borderWidth: 1
        }]
        },
        options: {
        maintainAspectRatio:false
        }
        }        
        );
        const CSaldo = document.getElementById('CSaldo')
        new Chart(CSaldo, {
            type: 'line',
            data: {
            labels: lSaldo.map(row=>row.x),
            datasets: [{
                label: 'Saldo',
                data: lSaldo.map(row=>row.y),
                borderWidth: 1
            }]
            },
            options: {
            maintainAspectRatio:false
            }
            }        
            );
        
    clearForm()
}


SearchBtn.addEventListener("click", () => {
    SearchControle()
})