let cont = 0;

const mostra_Numero = document.getElementById('mostraNumero');

function adiciona() {
	cont++;
	mostra_Numero.innerHTML = cont;
}

function subtrai() {
	cont--;
	mostra_Numero.innerHTML = cont;
}
