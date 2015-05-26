var configuracoes = {
	baseUrl: "app",

	paths: {
		"text": "lib/requirejs-text/text",
		"prism": "lib/prism/prism"
	},

	deps: ["prism"]
};

require.config(configuracoes);

require([
	"configuradorDeAtalhos",
	"slides/slides"
], function(configuradorDeAtalhos, slides) {
	"use strict";
	
	configuradorDeAtalhos.configurar();
	slides.iniciar();
});