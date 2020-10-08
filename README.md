# Simulador de loteria em JavaScript

Este site é um simulador da *MegaSena*, onde o usuário digita seis numeros que são comparados com 6 números pré-sorteados pelo computador e que exibe o número de acertos realizados.

**ATENÇÃO, não se trata de um jogo oficial.**

## Tecnologias utilizadas
1. **HTML**: é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.
2. **CSS**: é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.
3. **JS**: JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).

## Funções principais do código
Aqui estão as duas funções principais do codigo.

### Função para realizar o sorteio dos números
```
function sortear()
{
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
```
### Lê os numeros digitados e confere a sua validade
```
function checar(){
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
		else if (parseInt(aux) <= 0|| parseInt(aux) > 60)
   			{
    		 	alert("O número digitado não está entre 1 e 60")
    		}
		else{
			aposta.push(aux);
		}
	}
	loteria(aposta);
}
```
### Executa a verificação dos acertos da aposta
```
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
```
## O que fazer para rodar o codigo?
-> Baixe o codigo e abra o arquivo **_index.html_** no seu navegador da web
