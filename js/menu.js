function loadPage(id) {
	console.log("test");
	$("body").load("pages/" + id + "-page.html");
}

$(document).ready(function(){

	$("header").load ("inc/header.html");
	$("footer").load ("inc/footer.html", function(){
	$('.open-menu').click(function () {
	console.log("halo")
	$('footer').toggleClass('menu-opened');

		 return false;
		//$('<span class="fader"/>').appendTo('footer');
		});
		// $(".contact").load("inc/contact.html");
	});
