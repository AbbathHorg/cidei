$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.button').bind('click', function(){
		var name = $('.names').val();

		var data = $('.correo').val();

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
		/*$('.password').blur(function(){
			var data = $('.password').val();
			var len = data.length;

			if(len < 1){
				$('.password').next().show();			
				$('.confpass').attr('disabled', true);
			}
			else{
				$('.password').next().hide();			
				$('.confpass').removeAttr('disabled', true);	
			}
		});
		$('.confpass').blur(function(){
			if($('.password').val() !== $('.confpass').val()){
				$('.confpass').next().show();
			}
			else{
				$('.confpass').next().hide();
			}
		});*/
		event.preventDefault();
	});
	
	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}
});