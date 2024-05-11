const produtos = [
    { nome: 'Laptop', preco: 1000, quantidade: 5 }, { nome: 'Mouse', preco: 20, quantidade: 10 }, { nome: 'Teclado', preco: 30, quantidade: 8 } ]; 
    function calcularValorTotalEstoque(produtos) 
    { let estoque=0;
        for (i=0;i<produtos.length;i++ ) {
        estoque=produtos [i].quantidade * produtos[i].preco + estoque;
    }
    return estoque;
        
     } 
    const valorTotal = calcularValorTotalEstoque(produtos); 
    console.log('Valor total do estoque:', valorTotal);