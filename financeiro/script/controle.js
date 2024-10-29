var seqID=0;
var listaTransacoes=[];
localStorage.clear();
localStorage.setItem("listaTransacoes",JSON.stringify(listaTransacoes))
function Transacao(id,dtTransaction,value,name,total,categoryName,categoryType){
	this.id = id;
    this.dtTransaction=dtTransaction
    this.value=value
    this.name=name
    this.total=total
    this.categoryName=categoryName
    this.categoryType=categoryType}

const pesquisaPorId = (vetor, objId) => vetor.find(item => item.id === objId)
// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerTransacao(id){
// seu programa aqui.
 var item=pesquisaPorId (listaTransacoes,id);
 let total = document.querySelector("#balance").textContent
 total = parseFloat(total.substring(3,total.length))
 // Identificar o valor da despesa/receita
 total = (item.categoryType=="receita")?  total - item.value : total + item.value
 document.querySelector("#balance").textContent = stringToCurrency(total)
 let moneySelector = (item.categoryType=="receita")?"#money-plus": "#money-minus"
 const operator = (item.categoryType=="receita")?"+": "-"
 let moneySelectorValue = document.querySelector(moneySelector).textContent
 let valor = parseFloat(moneySelectorValue.substring(5,moneySelectorValue.length))
 valor = valor-item.value
 document.querySelector(moneySelector).textContent =operator+' '+stringToCurrency(valor)

 const index = listaTransacoes.indexOf(item);
 listaTransacoes.splice(index, 1);
 localStorage.setItem("listaTransacoes",JSON.stringify(listaTransacoes))
 var objId = '#item'+id
 document.querySelector(objId).remove();

}

const addBtn = document.querySelector(".btn")
const categoryList = [{name:"Lazer", type:"despesa"},
                      {name:"Alimentação", type:"despesa"},
                        {name:"Estudos", type:"despesa"}, 
                        {name:"Pessoais", type:"despesa"}, 
                        {name:"Saúde", type:"despesa"}, 
                        {name: "Pet", type:"despesa"},
                        {name: "Família", type:"despesa"},
                        {name: "Outros", type:"despesa"},
                        {name: "Salário", type:"receita"},
                        {name: "Bolsa", type:"receita"},
                        {name: "Mesada", type:"receita"},
                        {name: "Auxílio", type:"receita"}]

const getTypeTransactionByName = (transaction,list) => {
    transaction = transaction.toLowerCase()
    const category = (list.find(elem => elem.name.toLowerCase() == transaction))
    return category.type
}


// carregar as categorias na página...
const loadCategory = (lista, seletor) => {
    // carregando o datalist 
    document.querySelector(seletor).innerHTML = lista.reduce(
        (acum, elem)=> acum + `<option value="${elem.name}">`, "")
}

loadCategory(categoryList, "#category-list")

/**
 * Function that returns an object with form data
 * @returns value:Number, name:string, total:Number, categoryName:string, categoryType:string
 */
const getFormValues = () => {
    //dados da nova entrada
    const transactionDate = document.querySelector("#transaction-date").value
    const transactionName = document.querySelector("#transaction-name").value
    const amount = parseFloat(document.querySelector("#amount").value)
    //categoria da nova entrada
    const categoryName = document.querySelector("#category").value
    const categoryType = getTypeTransactionByName(categoryName,categoryList)

    //valor total 
    let total = document.querySelector("#balance").textContent
    total = parseFloat(total.substring(3,total.length))
    // Identificar o valor da despesa/receita
    total = (categoryType=="receita")? amount + total : total - amount

    return {value: amount, 
            dtTransaction:transactionDate,
            name:transactionName, 
            total:total, 
            categoryName:categoryName, 
            categoryType: categoryType}
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
    document.querySelector("#transaction-date").value = ""
    document.querySelector("#transaction-name").value = ""
    document.querySelector("#amount").value = ""
    document.querySelector("#category").value = ""
}
const loadBalance = () => {
    //a. Recuperar os valores digitados
    const formData = getFormValues()
    //atualizar o DOM
    document.querySelector("#balance").textContent = stringToCurrency(formData.total)

    //adicionar a transacao em despesa (#money-minus) ou receita (#money-plus)
    //se for receita
        // recuperar o valor #money-plus
    let moneySelector = (formData.categoryType=="receita")?"#money-plus": "#money-minus"
    const operator = (formData.categoryType=="receita")?"+": "-"
    let moneySelectorValue = document.querySelector(moneySelector).textContent
    let valor = parseFloat(moneySelectorValue.substring(5,moneySelectorValue.length))
    valor = valor+formData.value
    document.querySelector(moneySelector).textContent =operator+' '+stringToCurrency(valor)
    //adicionar a transação na lista #transactions
        seqID+=1
        const ulTransaction = document.querySelector(".transactions")
        const transactionClass = (formData.categoryType=="receita")?"plus": "minus"
        

        ulTransaction.innerHTML += `<li class="${transactionClass}" id="item${seqID}">
        ${formData.name} <span>${operator}${stringToCurrency(formData.value)}</span><button class="delete-btn" onclick="removerTransacao(${seqID})" >x</button>
      </li>`
     
    // salvar as transações no localStorage    
    var item= new Transacao(seqID,formData.dtTransaction,formData.value,formData.name,formData.total,formData.categoryName,formData.categoryType)
    listaTransacoes.push(item)
    localStorage.setItem("listaTransacoes",JSON.stringify(listaTransacoes))
    clearForm()
}


addBtn.addEventListener("click", () => {
    loadBalance()
})