$(document).ready(function(){

	$("#boton").click(function() {
		$.ajax({
			url: "fich.txt"
			}).done(function( data ) {
		  	$("#texto").text(data);
		  });
	});



});
