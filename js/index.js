/**********************************************************************/
/**************Esse é o arquivo somente para a pagina inicial**********/
/**********************************************************************/
//var como_trabalhamos = false;
//var noticias = false;

$(document).ready(function(){
	//Essa função faz com que todas as divs que tenha a classe wrapper tenham
	//o mesmo tamanho da janela 
	(function(){
		function wrapperInit(){
			if(jQuery(window).width() > 700) {
				var wrapper = jQuery('.wrapper'),
					ww = jQuery(window).width(),
					wh = jQuery(window).height(),
					wrapperHeight = wh;
				//wrapper.css({'min-height':+(wrapperHeight-10)+'px'});
				wrapper.css({'min-height':'95%'});
				//alert(window.screen.width);
				//var wrapperVcenter = $('.wrapper ')
				
			}
		}
		
		//jQuery(window).on("resize", wrapperInit);
		//jQuery(document).on("ready", wrapperInit);
	})();
	
	(function() {
		function mostrarComotrabalhamos() {
			//if(!como_trabalhamos) {
				if($('#home_comotrabalhamos > div').visible(true, false)) {
					$('#home_comotrabalhamos > div').each(function(i){
						$(this).delay(800 * i).animate({
							opacity: 1
						},1000);
					});
					//como_trabalhamos = true;
					window.removeEventListener('scroll', mostrarComotrabalhamos);
				};	
					
			//}
		}
		jQuery(document).on("ready", mostrarComotrabalhamos);
		//jQuery(document).on("scroll", mostrarComotrabalhamos);
		window.addEventListener('scroll', mostrarComotrabalhamos ,false);
		//jQuery(window).scroll(mostrarComotrabalhamos);
	})();
	
	(function(){
		function mostrarNoticias() {
			//if(!noticias) {
				if($('#home_noticias .noticias').visible(true, false)) {
					//alert('entrou');
					$('#home_noticias .item_noticia').each(function(i){
						$(this).children('hr').delay(800 * i).animate({
							width: '100%'
						},1000);
						$(this).children('h5').delay(800 * i).animate({
							'marginTop': '10px'
						},1000);
						$(this).children('p').delay(800 * i).animate({
							'opacity': '1',
							'marginTop': '45px'
						},1000);
					});
					$('#home_noticias .bt_padrao1').delay(2500).animate({
						opacity: '1'
					});
					//noticias = true;
					
					window.removeEventListener('scroll', mostrarNoticias);
				}
			//}
		}
		window.addEventListener('scroll', mostrarNoticias ,false);
		jQuery(document).on("ready", mostrarNoticias);
		//jQuery(document).on("scroll", mostrarNoticias);
		//jQuery(window).scroll(mostrarNoticias);
	})();
	
	(function() {
		function mostrarComoTrabalhamosFilhos() {
			//Efeito hover nos campos "como_Trabalhamos"
			//Caso seja deskop tera efeito no mouse click
			if(jQuery(window).width() > 1024) {
				$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child)').unbind('click');
				$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child)').mouseenter(function() {
					//$(this).find('.normal').hide();
					//$(this).find('.hover').css('display','inline-block');

					//$(this).find('.hover .titulo, .hover .texto').css('display','inline-block');
					//$(this).children('div').addClass('fundo_hover',1000);
				}).mouseleave(function(){
					//$(this).children('div').removeClass('fundo_hover',1500);
					//$(this).find('.hover').hide();
					//$(this).find('.normal').show();			
				});
			}else if(jQuery(window).width() > 481) {
				//Caso seja mobile (tablet, ipad) sera um efeito no on click
				//$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child)').unbind('mouseenter');
				//$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child)').unbind('mouseleave');
				
				var elementoativo = false;
				$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child)').click(function() {
					if(elementoativo == false) {
						elementoativo = true;
						$(this).find('.tb-info-frente').css({opacity:0});
						$(this).find('.tb-info-tras').css({opacity:1});
						
						var esse = $(this);
						$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child) ').each(function(i) {
							if(!$(esse).is($(this))) {
								$(this).animate({
									opacity: 0.55
								},400);
							}
						});
					}
				});
				$('#home_comotrabalhamos .tb-info-tras .voltar').click(function() {
					$(this).parents().eq(2).find('.tb-info-tras').css({opacity:0});
					$(this).parents().eq(2).find('.tb-info-frente').css({opacity:1});
					var esse = $(this);
					$('#home_comotrabalhamos > div:not(#home_comotrabalhamos > div:first-child) ').each(function(i) {
						if(!$(esse).is($(this))) {
							$(this).animate({
								opacity: 1
							},400);
						}
					});
					elementoativo = false;
					return false;
				});
			}
		}
		jQuery(document).on("ready", mostrarComoTrabalhamosFilhos);
		jQuery(window).on("resize",mostrarComoTrabalhamosFilhos);
	})();
	
	(function() {
		function efeitoDivisores() {
			var scrollorama = $.scrollorama({blocks: '.corpo'});
			if(detectmob() == false) {
				scrollorama
						.animate('#header',{duration:500, property:'padding-top', end: '30px'})
						.animate('#header',{duration:500, property:'padding-bottom', end: '30px'});
			}
			if(jQuery(window).height() >= 800 && jQuery(window).width() > 1024) {
				alert('1');
				scrollorama
					.animate('#home_trabalhos',{duration:700, property:'margin-top', end: '-300px'})
					.animate('#home_comotrabalhamos',{delay: 850,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_noticias',{delay: 1700,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_rodape',{delay: 2900,duration:550, property:'margin-top', end: '-300px'});
			}else if(jQuery(window).height() > 350 && $(window).width() > 1025 && detectmob() == false){
				alert('3');
				scrollorama
					.animate('#logo',{duration:500, property:'padding-top', end: '40px'})
					.animate('#logo',{duration:500, property:'padding-bottom', end: '40px'})
					.animate('#home_trabalhos',{duration:1000, property:'margin-top', end: '-300px'})
					.animate('#home_comotrabalhamos',{delay: 1400,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_noticias',{delay: 2400,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_rodape',{delay: 3600,duration:550, property:'margin-top', end: '-300px'});
			}else if(jQuery(window).width() < 500 && detectmob() != true){
				alert('4');
				scrollorama
					.animate('#home_trabalhos',{duration:500, property:'margin-top', end: '-300px'})
					.animate('#home_comotrabalhamos',{delay: 600,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_noticias',{delay: 1300,duration:550, property:'margin-top', end: '-300px'})
					.animate('#home_rodape',{delay: 2400,duration:550, property:'margin-top', end: '-300px'});
				}
		}
		jQuery(document).on("ready", efeitoDivisores);
		//jQuery(window).on("resize",efeitoDivisores);
	})();
	$(document).scroll(function(e){
		var top = $(window).scrollTop();
		if(top > 1000) {			
			$('#header span').fadeIn(1000);
			//$('#header span').css('opacity','1');
		}else if(top < 1000) {
			$('#header span').fadeOut(1000);
			//$('#header').css('background-color','f1f2f2');
		}	
	});
	//var controller = $.superscrollorama();
	//controller.addTween('#header',TweenMax.to($('#header'),.5,{css:{background: 'red'}}));
	//controller.addTween('#header',TweenMax.to($('#header'),1,{css:{rotation: '40'}}));
	//controller.addTween('#header', TweenMax.fromTo( $('#header'), .25, {css:{background:'#fff'}, immediateRender:true, ease:Quad.easeInOut}, {css:{background:'red'}, ease:Quad.easeInOut}));
	
	/*controller.addTween(
		'#header',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#header'), 1, 
				{css:{paddingTop:85}, immediateRender: true},
				{css: {paddingTop: 30}})				
			]),1000
	);*/
	
	
});
$(document).ready(function(){
	
	$('#home_trabalhos .trabalhos_recentes .bt_esconder').click(function(e) {
		e.preventDefault();
		if(!$(this).hasClass('escondido')) {
			$(this).addClass('escondido');
			$('#home_trabalhos .trabalhos_recentes').animate({
				width: '30px'
			},500);
			$('#home_trabalhos .projetos_slider').animate({
				marginLeft: '30px'
			},500);
		}else {
			$(this).removeClass('escondido');
			$('#home_trabalhos .trabalhos_recentes').animate({
				width: '450px',
			},500);
			$('#home_trabalhos .projetos_slider').animate({
				marginLeft: '450px'
			},500);
		}
	});
	
	$('.slider_menu input[type="range"]').change(moveSlider);
	
	function moveSlider() {
		//Pega a quantida de itens nop slide
		var tamanhotela = $('#home_trabalhos .projetos_slider .slider_imagens').width();
		var slideCount = $('#home_trabalhos .projetos_slider .slider_imagens ul li').length;
		var itemWidth = $('#home_trabalhos .projetos_slider .slider_imagens ul li').width();
		
		var sliderUlWidth = slideCount * itemWidth;
		//console.log('sliders: '+sliderUlWidth);
		//console.log('tela: '+tamanhotela);
		
		var a =sliderUlWidth - tamanhotela;
		
		var max = this.max;
		a = a/max;
		var posleft = a * $(this).val();
		//console.log(posleft+'</br>');
		
		$('#home_trabalhos .projetos_slider .slider_imagens ul').css({left: - posleft});
	}
	
	
	$("#home_noticias .noticias .item_noticia").each(function() {
		if($(window).width() >= 480 && $(window).width() < 1024) {
			Hammer(this).on("tap", function() {
				//if(!$(this).children.hasClass('mostrar_detalhe_materia')) {
					$(this).addClass('mostrar_detalhe_materia');
				//}else {
				//	$(this).removeClass('mostrar_detalhe_materia');
				//}
				//$(this).animate({
				//	height: 220,
				//},500, function(){
					//$(this).children('p').css({color:'#8dc63f'});
					//$(this).children('.wrapper_icon_noticias').css({opacity: 1,'z-index':0});
				//});
			});
		}else if($(window).width() < 480) {
			
			Hammer(this).on("tap", function() {
				$(this).addClass('mostrar_detalhe_materia');
				/*$(this).animate({
					height: 270,
				},500, function(){
					$(this).children('p').css({color:'#8dc63f'});
					$(this).children('.wrapper_icon_noticias').css({opacity: 1,'z-index':0});
				});*/
			});
		}
	});
	$("#home_noticias .noticias .item_noticia .compartilhar_noticia").each(function() {
		Hammer(this).on("tap", function() {
			$(this).addClass('mostrar_compartilhar');	
		});
	});
	
    
	
	Hammer(document.getElementById('newsletter')).on("tap", function(){
		if(detectmob()) {
			$('#home_rodape .newsletter').css('height','230');
			$('#home_rodape .newsletter h4').hide();
			$("#home_rodape .newsletter form").show();
			$("#home_rodape .newsletter form input[type='text']").focus();
		}
	});
	
	/*
	new Hammer(document.getElementById('projetos_slider')).on("release dragleft dragright swipeleft swiperight", dragSlider);
	
	function dragSlider(ev) {
		ev.preventDefault();
		ev.gesture.preventDefault();
		switch(ev.type) {
			case 'dragright':
				$('.slider_menu input[type="range"]').val(200);
				moveSlider();
				//$('#home_trabalhos .projetos_slider .slider_imagens ul').css({left: + 100});
				
				break;
			case 'dragleft':
				$('.slider_menu input[type="range"]').val(100);
				//$('#home_trabalhos .projetos_slider .slider_imagens ul').css({left: - 200});
				moveSlider();
				break;			
		}
	}
	/*
	$('#home_trabalhos .projetos_slider .slider_menu ul li a').click(function (e) {
		moveRight();	
	});
	
	var slideCount = $('#home_trabalhos .projetos_slider .slider_imagens ul li').length;
	var slideWidth = $('#home_trabalhos .projetos_slider .slider_imagens ul li').width();
	var slideHeight = $('#home_trabalhos .projetos_slider .slider_imagens ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	//$('#home_trabalhos .projetos_slider .slider_imagens').css({width:slideWidth, height: slideHeight });
	//$('#home_trabalhos .projetos_slider .slider_imagens ul').css({width: sliderUlWidth, marginLeft: - slideWidth});
	
	$('#home_trabalhos .projetos_slider .slider_imagens ul li:last-child').prependTo('#home_trabalhos .projetos_slider .slider_imagens ul');
	
	function moveRight() {
		$('#home_trabalhos .projetos_slider .slider_imagens ul').animate({
			left: + slideWidth
		}, 200, function () {
			$('#home_trabalhos .projetos_slider .slider_imagens ul li:first-child').appendTo('#home_trabalhos .projetos_slider .slider_imagens ul');
			$('#home_trabalhos .projetos_slider .slider_imagens ul').css('left','');
		});
	}
	*/
	//Efeito na introdução inicial onde aparece palavra por palavra
	$('#home_intro h1 span').each(function(i){
		$(this).delay(800 * i).animate({
			opacity: 1
		},800);
	});
	
	//Efeito para quado o circulo 'Continue' seja clicado a pagina desça até os trabalhos
	$('#home_intro .mensagem .continue').click(function(e) {
		$('html,body').animate({
	        scrollTop: $('#home_trabalhos').offset().top-330},
	    1200);
	});
});


