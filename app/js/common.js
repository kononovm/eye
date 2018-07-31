$(function() {

$('.main-content__img, .cat-item__img-wrap').owlCarousel({
    loop:true,
    nav:true,
	items: 1,
	navText: ['<img src="../img/icons/left.svg">','<img src="../img/icons/left.svg">']
})

$('.cat-item__nav-item').on('click', function(e) {
	e.preventDefault()
	let $href = $(this).attr('href');
	$(this).addClass('cat-item__nav-item--active').siblings().removeClass('cat-item__nav-item--active')
	$($href).addClass('cat-cont--active').siblings().removeClass('cat-cont--active')
})

$('.scroll').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
      return false;
})


});
