$(function(){
    
    $("#buscaEndereco").click(function(){
        var url = "https://viacep.com.br/ws/";
        var cep = $("#cep").val(); //pegar do input;
        url += cep + "/json/";
        $.get(url, function(data, status){
            //programa para carregar o endereço na página;
            $(".endereco-logradouro").text(data.logradouro);
            $(".endereco-bairro").text(data.bairro);
            $(".endereco-cidade").text(data.localidade);
            $(".endereco-estado").text(data.estado);
            
        })
    })
     $("#limpar").click(function(){
        $("#cep").val("");
        $(".endereco-logradouro").text("");
        $(".endereco-bairro").text("");
        $(".endereco-cidade").text("");
        $(".endereco-estado").text("");	   
    })
});
