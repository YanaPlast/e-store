@@include('dynamic_adapt.js', {})

$('.menu__icon').on('click', function(){
	$('.icon-menu').toggleClass('icon-menu_active');
	$('.menu__body').toggleClass('menu__body_active')
	//$('body').toggleClass('lock');
});