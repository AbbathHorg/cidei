$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		$('.userid').blur(function(){
			var data = $('.userid').val();
			var len = data.length;

			if(len < 1){
				$('.userid').next().show();
				$('.password').attr('disabled', true);
				$('.confpass').attr('disabled', true);
			}
			else{
				$('.userid').next().hide();
				$('.password').removeAttr('disabled', true);
				$('.confpass').removeAttr('disabled', true);	
			}
		});
		
		$('.password').blur(function(){
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
		});
		event.preventDefault();
	});
});