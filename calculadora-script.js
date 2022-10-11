function consoleOi() {
	console.log("Oi")
}
function clickButton(valor) {
	if (isNaN(valor)) {
		console.log("O botao pressionado foi: " + valor);
	}
	else {
		console.log("O numero e: " + valor);
	}
}
var resultado;
function clickButton(valor) {
	resultado = document.getElementsByClassName('resultado')[0];
	if (isNaN(valor)) {
		switch (valor) {
			case 'C':
				total = 0;
				resultado.innerHTML = '';
				break;
			case '=':
				calculaTudo();
				break;
			case '<':
				resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
				break;
			case '/':
				resultado.innerHTML += valor;
				break;
			case 'X':
				resultado.innerHTML += '*';
				break;
			case '-':
				resultado.innerHTML += valor;
				break;
			case '+':
				resultado.innerHTML += '+';
				break;
			case '.':
				resultado.innerHTML += '.';
				break;
		}
	}
	else {
		resultado.innerHTML += valor;
		console.log("A soma total e de: " + total);
	}
}

function calculaTudo() {
	resultado = document.getElementsByClassName('resultado')[0];
	resultado.innerHTML = eval(resultado.innerHTML);
}