$(document).ready(function(){

	$("#boton").click(function() {
		$.ajax({
			url: "fich.txt"
			}).done(function( data ) {
		  	$("#texto").text(data);
		  });
	});

	$("#botonGoogle").click(function() {
		$.ajax({
			url: "https://www.google.es",
			headers:{
					'Access-Control-Allow-Origin':
			}
			}).done(function( data ) {
		  	$("#textoGoogle").text(data);
		  });
	});


});
