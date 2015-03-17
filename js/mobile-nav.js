$(function(){
	$('.mobile-trigger').on('click', function(event){
		event.preventDefault();
		$(this).siblings('.navigation').toggleClass('hide-for-small-only');
	});
});