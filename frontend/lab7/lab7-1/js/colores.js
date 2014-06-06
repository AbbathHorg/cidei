$(document).ready(function(){
	$('.button').bind('click', function(){
		$('.label1').addClass('nuevocolor1');
	});

	$('.button2').bind('click', function(){
		$('.label2').addClass('nuevocolor2');
	});
	event.preventDefault();
});