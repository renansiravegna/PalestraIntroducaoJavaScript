define(function() {
	"use strict";

	var self = {};

	self.exibir = function() {
		require([
			"helpers/gerenciadorDeSlides",
			"text!slides/empresa/empresa.html"
		], function(gerenciadorDeSlides, conteudo) {
			gerenciadorDeSlides.titulo("Empresa");
			gerenciadorDeSlides.trocarCorDeFundo();
			gerenciadorDeSlides.conteudo(conteudo);
		});
	}

	return self;
});