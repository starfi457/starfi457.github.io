const palavras = ["javascript", "html", "css", "programacao", "computador"]; 
let palavraOculta = "html";// sorteie uma palavra 
let letrasErradas = []; 
let tentativasRestantes = 6; 
let palavra="____";
document.getElementById("adivinhar").addEventListener("click", function() { const letra = document.getElementById("letra").value.toLowerCase(); 
if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)) 
{ alert("Por favor, insira uma letra válida."); return; } 
if (palavraOculta.includes(letra)) { 
    troca="";
 for(i=0;i<palavraOculta.length;i++)
 { if (palavraOculta[i]==letra)
    {
        troca=troca+letra;
    }
    else {troca=troca+palavra[i]}
}
palavra=troca;
console.log (palavra);
document.getElementById("palavra-oculta").innerHTML=palavra;
}
else { letrasErradas.push(letra); tentativasRestantes--; 
    
document.getElementById("letras-erradas").innerHTML="Letras erradas:  "+letrasErradas; 
document.getElementById("tentativas").innerHTML="Tentativas restantes:   "+tentativasRestantes;
    
// Atualizar exibição das letras erradas e tentativas restantes 
}

//Verificar se o jogador ganhou ou perdeu 
if (palavra==palavraOculta){ 
    document.getElementById("resultado").innerHTML="Voce ganhou!"
}
else{ console.log("perdeu");
    if(tentativasRestantes==0){
        document.getElementById("resultado").innerHTML="Voce Perdeu!"
       
    }
}
});