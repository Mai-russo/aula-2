let sena =[];
function sortear(){
	let aux;
	for (i = 0; i < 6; i++) {
		aux = Math.round((Math.random()*60));
		if(sena.includes(aux)){
			i--;
		}else{
			sena.push(aux);
		}
	}
}
function checar() {
	let aposta =[];
	let aux;
	aposta[0] = document.getElementById('a1').value;
	aposta[1] = document.getElementById('a2').value;
	aposta[2] = document.getElementById('a3').value;
	aposta[3] = document.getElementById('a4').value;
	aposta[4] = document.getElementById('a5').value;
	aposta[5] = document.getElementById('a6').value;
	for (var i = 0; i < 6; i++) {
		aux = aposta.pop();
		if (aposta.includes(aux)) {
			alert('Valores repetidos. Tente novamente')
			return 0;
		}
		else{
			aposta.push(aux);
		}
	}
	loteria(aposta);
}
function loteria(aposta){
	let cont=0;
	let i;
	let j;
	for (i = 0; i < 6; i++) {
		for(j = 0; j < 6; j++){
			if (aposta[i]==sena[j]) {
				cont++;
			}
		}
	}
	alert(sena);
	if(cont==6){
		alert('Parabéns, você ganhou !!!!!!');
	}
	alert('Você acertou '+cont+' vezes\nVolte sempre')
}
