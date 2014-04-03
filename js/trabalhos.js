$(document).ready(function() {
	$('.image-info').click(function(el) {
		if(!$(this).hasClass('mobile-image-fundo')) {
		
			
			//Pega o centro da tela
			var top = (Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
			$(this).addClass('mobile-image-fundo');
			//Coloca ele bem no meio
			//$(this).children('img').css('margin-top',(viewportH/2));
			$(this).children('img').css('margin-top', top);
			
			$(this).children('p').addClass("mobile-image-legenda-icon");
			
			$(this).children('p').css('display', 'block');
		
		}else {
			$(this).removeClass('mobile-image-fundo');
			$(this).children('img').css('margin-top',0);
			$(this).children('p').hide();
		}
	});
	$('.image-info > p').click(function(el) {
		if(!$(this).hasClass('mobile-image-legenda')) {
			var widthp = $(this).width();
			$(this).css('margin-top', (-widthp)+65);
			$(this).addClass('mobile-image-legenda');
			
		}else {
			$(this).css('margin-top', '-65px');
			$(this).removeClass('mobile-image-legenda');
			
		}
		return false;
	});
	//Adiciona os span nas legendas das imagens
	$('#trabalhos .detalhe_trabalho .detalhe .full-info img').after('<span class="span"> </span> <span class="span"> </span>');
	
	
	//Quando é aberto em dispositivos moveis ele cria o efeito de click nos itens do trabalho
	$('#trabalho_detalhe_menu li').click(function(e) {
		e.preventDefault();
		$('.intro-info').hide();
		$('#trabalho_detalhe_menu li').removeClass('ativo');
		var link = $(this).children('a').attr('href');
		$(link).css('margin-bottom',30);
		$(link).slideToggle( "slow");
		/*var altura = parseInt(($(link).height())) + 30;
		
		$(this).addClass('ativo');
		
		$(link).css('height','0');
		$(link).css('display','inline-table');
		$(link).animate({
	 		height:altura
	 	},800);
		*/
	});
	
});

//Para quando ele redimensiona a janela, e foçar mostrar as informaçoes do trabalho
$(window).on("resize", function() {
	if($(window).width() > 481) {
		$('.intro-info').css('display','block');
	}else if($(window).width() < 481){
		$('.intro-info').hide();
	}
});