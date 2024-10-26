var pos=1;
const textarea = document.getElementById("move");
textarea.focus();
textarea.addEventListener("keydown", (e) =>  {
  if(e.key=='ArrowUp'){
    var col = "p"+pos;
	document.getElementById(col).innerHTML="";
	document.getElementById("p12").innerHTML="";
	document.getElementById("c12").innerHTML="";
	if(pos<12){
		pos=pos+1;
		col = "p"+pos;
		document.getElementById(col).innerHTML='<img src="./img/ryu-ginga.gif" alt="Ryu">';
	}else{
		pos=1;
		col="p1";
		document.getElementById(col).innerHTML='<img src="./img/ryu-ginga.gif" alt="Ryu">';
	}
  };
  if(e.key=='ArrowDown'){
    var col = "p"+pos;
	document.getElementById(col).innerHTML="";
	document.getElementById("p12").innerHTML="";
	document.getElementById("c12").innerHTML="";
	if(pos>1){
		pos=pos-1;
		col = "p"+pos;
		document.getElementById(col).innerHTML='<img src="./img/ryu-ginga.gif" alt="Ryu">';
	}else{
		pos=12;
		col="p12";
		document.getElementById(col).innerHTML='<img src="./img/ryu-ginga.gif" alt="Ryu">';
	}
  };
  if(e.key=='c'||e.key=='C'){
     var col = "p"+pos;
	 document.getElementById("p12").innerHTML="";
	 document.getElementById("c12").innerHTML="";	 
	 document.getElementById(col).innerHTML='<img src="./img/ryu-mk.gif" width="205" height="198" alt="Ryu">';
  };
  if(e.key=='m'||e.key=='M'){
	if(pos==12){ pos=1}
	var col = "p"+pos;
	document.getElementById(col).innerHTML='<img src="./img/ryu-magia.png" width="205" height="198" alt="Ryu">';
	document.getElementById("p12").innerHTML='<img src="./img/bola-fogo.gif" width="205" height="198" alt="Ryu">';
	new Audio('./img/hadouken.mp3').play()
  };
  if(e.key=='v'||e.key=='V'){
	var col = "p"+pos;
	document.getElementById("p12").innerHTML="";
	document.getElementById("c12").innerHTML="";
	document.getElementById(col).innerHTML='<img src="./img/ryu-voadora.gif" width="205" height="198" alt="Ryu">';
  };
  textarea.value="";
})