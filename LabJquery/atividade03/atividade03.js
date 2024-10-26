
$(function(){

    // criar sua função para carregar as receitas.
$.getJSON('./receitas.json', function (data) {
            displayJSON(data);
        });

        function displayJSON(jsonObject) {
            let jsonContainer = 
                    document.getElementById('receitas');
            let pre = document.createElement('pre');
            pre.textContent = JSON.stringify(jsonObject, null, 2);
            jsonContainer.appendChild(pre);
        }    

});
