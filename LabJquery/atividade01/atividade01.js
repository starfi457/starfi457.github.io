//função construtora de objetos Produto
function Livro(id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
}

// programar a inserção dos novos livros no array listaLivros e sua adição no DOM
function adicionarLivro(livro){
  listaLivros.push(livro);
}
const pesquisaPorId = (vetor, objId) => vetor.find(item => item.id === objId)
// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(id){
// seu programa aqui.
 var item=pesquisaPorId (listaLivros,id);
 const index = listaLivros.indexOf(item);
 listaLivros.splice(index, 1);

}

var listaLivros = [];
var conta=0;
		
$(function(){

	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var descricao = $("#descricao").val();
		conta=conta+1;
		const id=conta;
		$("#acervo").append(
				$("<tr>")
				.append($("<td>").text(id))
					.append($("<td>").text(tituloLivro))
					.append($("<td>").text(autores))
					.append($("<td>").text(estilo))
					.append($("<td>").text(descricao))
					.append($("<td>")
						.append($("<a>")
								.attr("href", "#")
								.text("Apagar"))
					)
		)
		$("#titulo").val("");
		$("#descricao").val("");
		$("#autores").val("");
		$("#estilo").val("");		
		adicionarLivro(new Livro(id,tituloLivro,autores,estilo))
	});

	$("#acervo").on("click", "a", function(){
		var pos =parseInt($(this).parents("tr")[0].cells[0].innerHTML);
		removerLivro(pos);
		$(this).parents("tr").remove();
	})

	$("#excluir").click(function(){
		
	})

	$("#apagarAcervo").click(function(){
		$("#acervo").empty();
		listaLivros = [];
		$("#acervo")
			.append($("<tr>")
						.append($("<th>").text("Título"))
						.append($("<th>").text("Autores"))
						.append($("<th>").text("Estilo"))
						.append($("<th>").text(""))
					)
	})
/*
	$("#enviar").click(function(){
		//let url = "https://157.230.5.17/web/livros.php";/* passarei para vocês mais tarde 
		
		let url = "http://httpbin.org/post";
		let dados = $("#dados").val(); /* pegar o valor do input #dados 
		$.post(url, dados, function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		  }
		);
	})
	*/
});