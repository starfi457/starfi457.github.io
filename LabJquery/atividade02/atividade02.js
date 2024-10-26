//função construtora de objetos Produto
var Produto = function(id, nome, categoria, img, valorUnitario){
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.foto = img;
    this.valorUnitario = valorUnitario;
}
var TotalPedido=0;
const pesquisaPorId = (vetor, objId) => vetor.find(item => item.id === objId)

// carregamento de cardápio de exemplo
var cardapio = [new Produto(1, "Capuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png",7)
			, new Produto(2, "Espresso", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png",4)
			, new Produto(3, "Frapuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png",8)
			, new Produto(4, "Chococcino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png",7)
			, new Produto(5, "Chocolate Quente", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png",10)
			, new Produto(6, "Frapê", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/frape.png",12)
			, new Produto(7, "Suco de Laranja", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png",10)
            , new Produto(8, "Açaí", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/acai.png",12)
            , new Produto(9, "Bolo de Laranja", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png",8)];
		

const carregarCardapio = lista => {
    const listaObj = document.querySelector("#cardapio")
    lista.forEach(produto => {
        listaObj.innerHTML += `<li><figure>
                                    <img src="${produto.foto}" alt="${produto.nome}" width="100" height="60" onclick="somaPedido(${produto.id})">
                                    <figcaption>${produto.nome}
                                        <strong>${produto.valorUnitario}</strong>
                                    </figcaption>
                                    </figure>
                                </li>`
    }); 
}
const somaPedido=function(valor){
    var item = pesquisaPorId(cardapio,valor)
    const listaPedido = document.querySelector("#pedidos")
    listaPedido.innerHTML += `<li>${item.nome} - ${item.valorUnitario}</li>`
    TotalPedido = TotalPedido + item.valorUnitario;
    const Total = document.querySelector("#valorTotal")
    Total.innerHTML='Total - ' + TotalPedido;
}

carregarCardapio(cardapio)