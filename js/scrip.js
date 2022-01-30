$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 },1500,'easeInOutExpo');

 e.preventDefault();
});







// paralak
// about
$(window).on('load' , function(){
	$('.kiri').addClass('muncul');
	$('.kanan').addClass('muncul');


});




$(window).scroll(function(){
	var	wScroll = $(this).scrollTop();

// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'
	});


	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/1.2+'%)'
	});


// biodata

 if( wScroll > $('.biodata').offset().top-250) {
 	$('.biodata .thumbnail').each(function(i) {
 		setTimeout(function() {
 				$('.biodata .thumbnail').eq(i).addClass('nongol');
 			},300 * (i+1) );
 	

 		});



 }



});