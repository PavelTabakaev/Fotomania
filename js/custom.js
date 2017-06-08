$("#item1").animated("bounceInLeft","zoomOutDown");
$("#item2").animated("bounceInLeft","zoomOutDown");
$("#item3").animated("bounceInRight","zoomOutDown");
$("#item4").animated("bounceInRight","zoomOutDown");

$(".preim1").animated("flipInY","zoomOutDown");
$(".preim3").animated("flipInY","zoomOutDown");
$(".preim2").animated("flipInY","zoomOutDown");
$(".preim4").animated("flipInY","zoomOutDown");

$(".vk").animated("flipInY","zoomOutDown");

$(".zagolovok").animated("bounceIn","zoomOutDown");

$(".thumbs").animated("bounceInLeft","zoomOutDown");
$(".thumbs2").animated("bounceInRight","zoomOutDown");

$(".thumbs1").animated("bounceInLeft","zoomOutDown");
$(".thumbs3").animated("bounceInLeft","zoomOutDown");
$(".imgtop").animated("bounceIn","zoomOutDown");

$(".p1").animated("bounceInLeft","zoomOutDown");
$(".p2").animated("bounceInLeft","zoomOutDown");

$(".p3").animated("bounceInRight","zoomOutDown");
$(".pluso").animated("bounceInRight","zoomOutDown");
$(function(){

$('.navbar-menu__link').click(function(){
	$('.navbar-menu__link').parents('.navbar-menu__item').removeClass('active')
	$(this).parents('.navbar-menu__item').addClass('active')
});

var options = {
  offset: 90
}
var header = new Headhesive('.wrapper', options);
var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();
	$('.content').css({
		'paddingTop': h_header,
		'paddingBottom': h_footer
	});
}

$(window).bind('load resize', hf);

});






