const addBtn = document.querySelector(".btn")

/**
 * Function that returns an object with form data
 * @returns value:Number, name:string, total:Number, categoryName:string, categoryType:string
 */
const getFormValues = () => {
    //dados da nova entrada
    const wishDate = document.querySelector("#wish-date").value
    const wishName = document.querySelector("#wish-name").value
    const amount = parseFloat(document.querySelector("#amount").value)

    //valor total 

    return {value: amount, 
            name:wishName, 
            forecast:wishDate}
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
    document.querySelector("#wish-name").value = ""
    document.querySelector("#amount").value = ""
    document.querySelector("#wish-date").value = ""
}
const loadBalance = () => {
    //a. Recuperar os valores digitados
    const formData = getFormValues()
    //atualizar o DOM
    //adicionar a transação na lista #transactions
         const ulTransaction = document.querySelector(".transactions")
         ulTransaction.innerHTML += `<li class="plus">
        ${formData.forecast} <span>${formData.name}</span><span>${stringToCurrency(formData.value)}</span><button class="delete-btn">x</button>
      </li>`
     
    // salvar as transações no localStorage
    
    clearForm()
}


addBtn.addEventListener("click", () => {
    loadBalance()
})