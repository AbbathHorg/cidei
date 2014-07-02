/* plugins.jquery.com/cookie */

var csrftoken = $.cookie('csrftoken');

function csrfSafeMethod(method){
	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function sameOrigin(url){
	var host = document.location.host;
	var protocol = document.location.protocol;
	var sr_origin = '//' + host;
	var origin = protocol + sr_origin;

	//Permitir cualquier esquema y estructura de la url
	return (url == origin || url.slice(0, origin.lenght + 1) == origin + '/') || (url == sr_origin || url.slice(0, sr_origin.lenght + 1) == sr_origin + '/') || !(/^(\/\/|http:|http:).*/.test(url));
}

$.ajaxSetup({
	beforeSend: function(shr, settings){
		if(!csrfSafeMethod(settings.type) && sameOrigin(settings.url)){
			//Enviar el token a urls relativas
			//Setear en la cabecera solo si el metodo garantiza CSRF
			//Usar el valor csrftoken que proporciona django
			xhr.setRequestHeader("X-CSRFToken", csrftoken);
		}
	}
});

$(document).ready(function(){
	$('#getAllItems').on('click', function(event){
		$.ajax({
			url: '/items/ajax/',
			type: 'GET',
			datatype: 'json',
			success: function(data){
				data = $.parseJSON(data);
				for(var i = 0; i < data.length; i++){
					$.each(data[i].fields, function(key, value){
						$('#resultAllItems').append('<span>El valor es: <strong>' + key + ': ' + value + '</strong></span><br />');
					});
				}
			},
			error: function(xhr, errmsg, err){
				alert(xhr.status + ": " + xhr.responseText);
			}
		});
	});
});