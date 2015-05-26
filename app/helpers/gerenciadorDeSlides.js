define(function() {
	"use strict";

	var self = {};

	self.titulo = function(titulo) {
		document.getElementById("titulo").innerHTML = titulo;
	};

	self.trocarCorDeFundo = function(novaCorDeFundo) {
		if (!novaCorDeFundo)
			novaCorDeFundo = obterCorAleatoria();

		document.getElementsByTagName("body")[0].style.backgroundColor = novaCorDeFundo;
	};

	self.conteudo = function(conteudo) {
		document.getElementById("conteudo").innerHTML = conteudo;
	};

	function obterCorAleatoria() {
		var cor = "#";
		var letras = "0123456789ABCDEF".split("");

		for (var index = 0; index < 6; index++) {
			cor += letras[Math.floor(Math.random() * 16)];
		}

		return cor;
	}

	return self;
});