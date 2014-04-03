/*********************************************************************************/
/*Esse arquivo vai em todas as paginas, ou seja, aqui vai os scripts comuns de todos*/
/**********************************************************************************/
var midias_sociais = false;

$(document).ready(function(){	
	(function(){
		function mostrarMidiasSociais() {
			if(!midias_sociais) {
				/*if($('#home_rodape .midias_sociais .mensagem').visible(true, false)) {
					$('#home_rodape .midias_sociais .mensagem').delay(400).animate({
						opacity: 1
					},2000);
					//Verifica o tamanho da janela para saber ser responsivo
					if(jQuery(window).height() > 1024) {
						$('#home_rodape .midias_sociais .midias > div').each(function(i){
							$(this).delay(500*i).animate({
						 		'marginLeft':'30px'
						 	},1000);
						 });
					}else {				
						$('#home_rodape .midias_sociais .midias > div').each(function(i){
							$(this).delay(500 *i ).animate({
						 		'marginLeft':'10px'
						 	},1000);
						 });
						
					}
						
				midias_sociais = true;
				} */
				if($('#home_rodape .midias_sociais .mensagem').visible(true, false)) {
					$('#home_rodape .midias_sociais .mensagem').delay(400).animate({
						opacity: 1
					},2000);
					$('#home_rodape .midias_sociais .ch-info').each(function(i){
						$(this).delay(500 * i).animate({
					 		opacity: 1
					 	},500);
					 });
					 midias_sociais = true;
				}
			}
		}
		jQuery(document).on("ready", mostrarMidiasSociais);
		jQuery(window).scroll(mostrarMidiasSociais);
	})();	
	//Adiciona o efeito niceScroll e estiliza a barra de rolagem
	/*if(jQuery(window).width() > 480) {*/
	  $("body").niceScroll({
	  		scrollspeed:'80',
	  		mousescrollstep:'30'
	  	});	  
	  
	/*} */

	/*$('#menu ul li a').click(function(e){
		//$('#content > div') {
		e.preventDefault();
		var href= $(this).attr('href');
		var content = $('#content');
		$('#content > div').delay(200).slideToggle(1000,function() {
			$('#content').html('<div  class="carregando">Carregando</div>');
			
			$('#content .carregando').animate({
				marginTop:'200px',					
			},800);
			$('#content .carregando').animate({
				marginTop:'150px',					
			},300);			
		});
		$.ajax({
				url: href,
				success: function(response) {
					var data = $('<div>'+response+'</div>').find('#content').html();
					window.setTimeout(function() {
						$('#content').fadeOut('slow',function() {
							$('#content').html(data).slideToggle(1000);
						});
					},500);
				}					
			});
		
		//};
		//alert('hei 2');
		//$('#content').html('<div class="carregando">Carregando</div>');
		
		
	});*/
	//Efeito no formulario do rodape ao clicar no h4	
	$('html').click(function(e) {
		var target = $(e.target);    
		if (target.parents('#home_rodape .newsletter').length) {
			$('#home_rodape .newsletter h4').hide();
			$("#home_rodape .newsletter").animate({
				height : '39px'
			},500,function() {
				$("#home_rodape .newsletter form").show();
				$("#home_rodape .newsletter form input[type='text']").focus();
			});
		}else {
			$("#home_rodape .newsletter form").hide();
			$("#home_rodape .newsletter").animate({
				height : '22px'
			},500,function() {
				$('#home_rodape .newsletter h4').show();
			});
		}
	});
	$('#pull').click(function(e) {
		e.preventDefault();
		$('#menu ul').slideToggle();
	});
	//Faz com que o campo de inserir o email desaparece a mensagem aparece, fazer mais teste para ver se é viavel
	/*$("#home_rodape .newsletter form input").focusout(function(){
		$(this).hide();
		$("#home_rodape .newsletter h4").show();
	});*/	
});
