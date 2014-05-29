$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.submit').bind('click', function(){
		var name = $('.names').val();

		

		var data = $('.infobox').val();

		if(valid_email(data)){
			$('.error').hide();
			localStorage.setItem('email', data);
			$('.result').show();
			$('.result').html('La dirección que escribio es: ' + localStorage.getItem('email'));
		}
		else{
			$('.error').show(),
			$('.error').html('<h1>Ingrese una dirección de correo valida</h1>');
		}
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}
});