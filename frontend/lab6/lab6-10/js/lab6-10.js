$(document).ready(function(){
	$('.name-error').hide();
	$('.length-error').hide();
	$('.email-error').hide();
	$('.password-error').hide();
	$('.password-conf-error').hide();
	$('.valid-password-error').hide();
	$('.meal-error').hide();
	$('.pay-mode-error').hide();
	$('.city-error').hide();
	$('.name-result').hide();
	$('.email-result').hide();
	$('.meal-result').hide();
	$('.pay-mode-result').hide();
	$('.city-result').hide();
	$('.button').bind('click', function(event){  
		var name = $('.names').val();
		var len = name.length;

		if(valid_names(name)){
			if(len > 30){
				$('.name-error').hide();
				$('.name-result').hide();
				$('.length-error').show();
				$('.length-error').html('<h3>Los nombres y apellidos deben tener menos de 30 caracteres</h3>');
				console.log('len30');
			}
			else{
				$('.name-error').hide();
				$('.length-error').hide();
				localStorage.setItem('nombres', name);
				$('.name-result').show();
				$('.name-result').html('Los nombres y apellidos que escribio son: ' + localStorage.getItem('nombres'));
				console.log('len otro');
			}
		}
		else{
			$('.length-error').hide();
			$('.name-result').hide();
			$('.name-error').show();
			$('.name-error').html('<h3>Debe ingresar un nombre valido</h3>');
		}

		var data = $('.correo').val();

		if(valid_email(data)){
			$('.email-error').hide();
			localStorage.setItem('email', data);
			$('.email-result').show();
			$('.email-result').html('La dirección que escribio es: ' + localStorage.getItem('email'));
		}
		else{
			$('.email-result').hide();
			$('.email-error').show();
			$('.email-error').html('<h3>Ingrese una dirección de correo valida</h3>');
		}

		var data = $('.password').val();
		var len = data.length;

		if(len < 1){
			$('.password-error').show();
			$('.password-error').html('<h3>El campo de contraseña no puede estar vacio</h3>');
		}
		else{
			$('.password-error').hide();

			data = $('.confpass').val();
			len = data.length;

			if(len < 1){
			$('.password-conf-error').show();
			$('.password-conf-error').html('<h3>El campo de repetir contraseña no puede estar vacio</h3>');
			}
			else{
				$('.password-conf-error').hide();
				if($('.password').val() !== $('.confpass').val()){
					$('.valid-password-error').show();
					$('.valid-password-error').html('<h3>Las contraseñas no concuerdan</h3>');
				}
				else{
					$('.valid-password-error').hide();
					localStorage.setItem('password', data);
				}
			}
		}

		var amount = 0;
		var count = $('.meal:checked').length;

		if(count === 0){
			$('.meal-result').hide();
			$('.meal-error').show();
			$('.meal-error').html('<h3>Debe seleccionar almenos un alimento</h3>');
		}
		else{
			$('.meal:checked').each(function(){
				if($(this).is(':checked')){
					amount = amount + parseInt($(this).val());
				}
			});
			$('.meal-error').hide();
			localStorage.setItem('alimentos', amount);
			$('.meal-result').show();
			$('.meal-result').text('La suma de los alimentos es: ' + localStorage.getItem('alimentos'));
		}

		var count = $('.paymode:checked').length;

		if(count === 0){			
			$('.pay-mode-result').hide();
			$('.pay-mode-error').show();
			$('.pay-mode-error').html('<h3>Debe seleccionar un medio de pago</h3>');
		}
		else{
			$('.pay-mode-error').hide();
			localStorage.setItem('pagos', $('.paymode:checked').attr("value"));
			$('.pay-mode-result').show();
			$('.pay-mode-result').html("Usted selecciona: " + localStorage.getItem('pagos') + " como medio de pago");
		}

		var count = $('select option:selected').val();

		if(count == "0"){			
			$('.city-result').hide();
			$('.city-error').show();
			$('.city-error').html('<h3>Debe seleccionar una ciudad</h3>');
		}
		else{
			$('.city-error').hide();
			localStorage.setItem('ciudad', $('select option:selected').val());
			$('.city-result').show();
			$('.city-result').html("Usted vive en: " + localStorage.getItem('ciudad'));
		}	

		event.preventDefault();
	});
	
	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}

	function valid_names(nombres){
		var pattern = new RegExp(/^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})+$/);
		return pattern.test(nombres);
	}
});