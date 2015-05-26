define(function(slides) {
	"use strict";

	var self = {};

	var _barra = 47;
	var _asterisco = 42;

	self.configurar = function() {
		document.getElementsByTagName("body")[0].addEventListener("keypress", function(evento) {
			require([
				"slides/slides"
			], function(slides) {
				var codigoDaTecla = evento.keyCode;

				if (codigoDaTecla === _barra)
					slides.anterior();
				else if (codigoDaTecla === _asterisco)
					slides.proximo();
			});
		});
	};

	return self;
});