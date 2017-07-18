$(document).ready(function(){
	$('.btn').click(function(event) {
		event.preventDefault();
		var mensaje = $('#mensaje').val();
		if(mensaje == ""){
			return false;
		}else{
			$('#lista').append('<li class="back right">'+mensaje+'</li><br>');
			$('#mensaje').val("");
		}
	});
});
