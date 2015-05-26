define([
	"slides/indexadorDeSlides"
], function(indexadorDeSlides) {
	"use strict";

	var self = {};
	var _slideAtual = 0;

	self.iniciar = function() {
		_slideAtual = 0;
		exibirSlide();
	};

	self.proximo = function() {
		if (ehUltimoSlide()) return;

		_slideAtual++;
		exibirSlide();
	};

	self.anterior = function() {
		if (ehPrimeiroSlide()) return;

		_slideAtual--;
		exibirSlide();
	};

	function ehPrimeiroSlide() {
		return _slideAtual === 0;
	}

	function ehUltimoSlide() {
		return _slideAtual === indexadorDeSlides.length - 1;
	}

	function exibirSlide() {
		var slideAtual = obterIndexDoSlideAtual();

		require([
			"helpers/gerenciadorDeSlides",
			"text!slides/" + slideAtual
		], function(gerenciadorDeSlides, conteudoDoSlideAtual) {
			gerenciadorDeSlides.titulo("");
			gerenciadorDeSlides.trocarCorDeFundo();
			gerenciadorDeSlides.conteudo(conteudoDoSlideAtual);

			Prism.highlightAll();
		});
	}

	function obterIndexDoSlideAtual() {
		return indexadorDeSlides[_slideAtual];
	}

	return self;
});