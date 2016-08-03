$(document).ready(function() {
  getMyJson.init();
  scrollTop.init();
  contactModal.init();
});

var getMyJson = {
init: function () {

$("button").click(function(){
    $.getJSON("assets/js/demo_ajax_json.js", function(result){
        $.each(result, function(i, field){
            $("div").append("<div>"+ field + " " + "</div>");
        });
    });
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



var contactModal = {
init: function () {
//  $('.contact-modal').hide();

  // open mobile menu and background overlay
    $('a.open').on('click', function () {
        $('.contact-modal').fadeIn(200);
    });

  //  close click button function
    $("a.close").on("click", function () {
      $('.contact-modal').fadeOut(200);
    })

    $('a.close').hover(
       function(){ $(this).addClass('spin-close') },
       function(){ $(this).removeClass('spin-close') }
)

}
};
