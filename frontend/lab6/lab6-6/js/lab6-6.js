$(document).ready(function(){
	$('.error').hide();	
	$('.submit').click(function(event){
		$('.infobox').each(function(){
			var data = $(this).val();
			var len = data.length;

			if(len < 1){
				if($(this).attr("name") === 'userid'){
					$(this).parent().find('.error').show().text("El campo de usuario no puede estar vacio");	
				}
				if($(this).attr("name") === 'password'){
					$(this).parent().find('.error').show().text("El password no puede estar vacio");	
				}
			}
			else{
				$(this).parent().find('.error').hide();
			}
		});
		event.preventDefault();
	});
});