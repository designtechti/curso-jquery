/**
 * Curso de introdução à biblioteca jquery & ajax
 * Digital Innovation One 2021
 * Profº: Rafael Galleani
 * Autor: Marcelo Jr.
 */

/* Aula 1 | Utilizando JQuery & AJAX parte 2 */

/* Forma manual 

// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	$.ajax({
		url: "https://viacep.com.br/ws/14800-390/json/", 
		type: "GET", 
		success: function(response){
			console.log(response);
		}
	})
}
*/

/* Forma dinâmica */

/* Sem usar a biblioteca jquery */

/*
// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+ cep + "/json/";
	
	// faz uma requisição AJAX utilizando o Webservice dos correios e ibge
	$.ajax({
		url: url, 
		type: "GET", 
		success: function(response){
			console.log(response);

			// exibe as informações no browser
			document.getElementById("logradouro").innerHTML = response.logradouro;
			document.getElementById("bairro").innerHTML = response.bairro;
			document.getElementById("localidade").innerHTML = response.localidade;
			document.getElementById("uf").innerHTML = response.uf;
		}
	})
} */

/* Utilizando a biblioteca jquery */

// Cria uma função para consultar endereços por CEP juntamente com o AJAX
function consultaCep() {
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/"+ cep + "/json/";
	
	// faz uma requisição AJAX utilizando o Webservice dos correios e ibge
	$.ajax({
		url: url, 
		type: "GET", 
		success: function(response){
			console.log(response);

			// exibe as informações no browser
			$("#logradouro").html('<strong><label for="logradouro">Logradouro: &nbsp;</label></strong>' + response.logradouro);
			$("#bairro").html('<strong><label for="bairro">Bairro: &nbsp;</label></strong>' + response.bairro);
			$("#localidade").html('<strong><label for="localidade">Localidade: &nbsp;</label></strong>' + response.localidade);
			$("#uf").html('<strong><label for="uf">UF: &nbsp;</label></strong>' +response.uf);
		}
	})
}