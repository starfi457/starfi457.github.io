const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  var lista = document.getElementById("corpo");
  const ficha = document.getElementById("div-ficha");
  const clone = ficha.cloneNode(true);
  document.getElementById("img-ficha").src=myObj[0].figura
  document.getElementById("p-titulo").innerHTML += myObj[0].titulo;
  document.getElementById("p-resumo").innerHTML += myObj[0].resumo;
  document.getElementById("p-genero").innerHTML += JSON.stringify(myObj[0].generos);
  document.getElementById("p-classifica").innerHTML += myObj[0].classificacao;
  if( myObj[0].classificacao>14&& myObj[0].classificacao<18){document.getElementById("div-classifica").style.backgroundColor="#FF0";}
  if( myObj[0].classificacao>=18){document.getElementById("div-classifica").style.backgroundColor="#F00";}
  document.getElementById("p-semelhantes").innerHTML += JSON.stringify(myObj[0].titulosSemelhantes);
  document.getElementById("p-elenco").innerHTML += JSON.stringify(myObj[0].elenco);
  document.getElementById("p-opiniao").innerHTML += JSON.stringify(myObj[0].opinioes);
  for(i=1;i<=myObj.length;i++){
    var filme = clone.cloneNode(true);
    filme.querySelector(".img-ficha").src=myObj[i].figura
    filme.querySelector(".p-titulo").innerHTML += myObj[i].titulo;
    filme.querySelector(".p-resumo").innerHTML += myObj[i].resumo;
    filme.querySelector(".p-genero").innerHTML += JSON.stringify(myObj[i].generos);
    filme.querySelector(".p-classifica").innerHTML += myObj[i].classificacao;
    if( myObj[i].classificacao>14&& myObj[i].classificacao<18){filme.querySelector(".age").style.backgroundColor="#FF0";}
    if( myObj[i].classificacao>=18){filme.querySelector(".age").style.backgroundColor="#F00";}
    filme.querySelector(".p-semelhantes").innerHTML += JSON.stringify(myObj[i].titulosSemelhantes);
    filme.querySelector(".p-elenco").innerHTML += JSON.stringify(myObj[i].elenco);
    filme.querySelector(".p-opiniao").innerHTML += JSON.stringify(myObj[i].opinioes);   
   lista.appendChild(filme);

  };
  
}
xmlhttp.open("GET", "filmes.json");
xmlhttp.send();



