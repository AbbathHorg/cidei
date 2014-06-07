$(document).ready(function(){
	$('.button').bind('click', function(event){
		$('#division').addClass('color');
		event.preventDefault();
	});	
});