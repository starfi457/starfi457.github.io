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

     // soma o valor ao #money-plus
        document.querySelector(moneySelector).textContent = stringToCurrency(formData.value)
    //adicionar a transação na lista #transactions
        const ulTransaction = document.querySelector(".transactions")
        const transactionClass = (formData.categoryType=="receita")?"plus": "minus"
        const operator = (formData.categoryType=="receita")?"+": "-"

        ulTransaction.innerHTML += `<li class="${transactionClass}">
        ${formData.name} <span>${operator}${stringToCurrency(formData.value)}</span><button class="delete-btn">x</button>
      </li>`
     
    // salvar as transações no localStorage
    clearForm()
}


addBtn.addEventListener("click", () => {
    loadBalance()
})