$(document).ready(function() {
    entryModal.init();
    mainNav.init();
  scrollTop.init();
  ageVerify.init()

});

var ageVerify = {
	init: function () {



  }
}


var entryModal = {
	init: function () {
    $(".ageVerifyModal, .overlay").hide();
    $(".ageVerifyModal button").on("click", function () {
      //$(".ageVerifyModal, .overlay").hide();
    });

  }
}

// lower, raise and close the hidden main menu
var mainNav = {
	init: function () {
		// Listen for nav clicks
    $(".closeMenu i").hide();
		$(".menu-container nav a").on("click", function (event) {
			event.preventDefault();
		   // Open megaMenu
			$('.hiddenMenu').slideDown('slow');
      $(".closeMenu i").show();
		});
		$(".closeMenu").on("click", function (event) {
			$('.hiddenMenu').slideUp('slow');
      $(".closeMenu i").hide();
		});

  }
}


var scrollTop = {
init: function () {

  // hide #back-top first
  	$(".cd-top").hide();

  	// fade in #back-top
  	$(function () {
  		$(window).scroll(function () {
  			if ($(this).scrollTop() > 100) {
  				$('.cd-top').fadeIn();
  			} else {
  				$('.cd-top').fadeOut();
  			}
  		});

  		// scroll body to 0px on click
  		$('.cd-top a').click(function () {
  			$('body,html').animate({
  				scrollTop: 0
  			}, 500);
  			return false;
  		});
  	});

}
};
