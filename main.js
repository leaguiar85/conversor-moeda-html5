function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	$.get(endpoint, callback );
	
	// $.ajax("https://api.exchangeratesapi.io/latest", {
	// success: function(){console.log("ok")},
	// error: function(){console.log("not ok")}
	// })	
}

function callback(resultado){
	console.log(resultado);
	$("#valor_destino").text("X");
	$("#moeda_destino_celula").text("Y");
}