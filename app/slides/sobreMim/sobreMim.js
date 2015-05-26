define(function() {
	"use strict";

	var self = {};

	self.exibir = function() {
		require([
			"helpers/gerenciadorDeSlides",
			"text!slides/sobreMim/sobreMim.html"
		], function(gerenciadorDeSlides, conteudo) {
			gerenciadorDeSlides.titulo("Sobre mim");
			gerenciadorDeSlides.trocarCorDeFundo();
			gerenciadorDeSlides.conteudo(conteudo);
		});
	};

	return self;
});