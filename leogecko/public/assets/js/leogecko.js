$(document).ready(function() {
  dropMenu.init();
  readmeBtnColor.init();
  resourcesHeadingColor.init();
  textEllipsis.init();
  customScrollbar.init();
});


var dropMenu = {
  init: function () {

    $('.dropdown-menu').hide().removeClass('fallback');
      $('li.dropdown').hover(
        function (e) {
          e.preventDefault();
          $('.dropdown-menu').show();
        },
        function (e) {
          e.preventDefault();
          $('.dropdown-menu').hide();
        }
      );
  }
};


var readmeBtnColor = {
  init: function () {

    // apply one color for each read more button on front page
    $(".readmore a").css("background-color", function(i) {
      return ["#425bb4", "#6a3da1", "#df3e64"][i];
    });

  }
};


var resourcesHeadingColor = {
  init: function () {

    // apply one color for each resource heading on front page
    $(".col h2").css("color", function(i) {
      return ["#84b5ff", "#e0768f", "#000000"][i];
    });

  }
};


var textEllipsis = {
  init: function () {

    $(".excerpt").dotdotdot();

      ellipsis: '... '
      //	Remove these characters from the end of the truncated text
			// remove		: [ ' ', ',', ';', '.', '!', '?' ],
      height: 100
      tolerance	: 0

  }
}


var customScrollbar = {
  init: function () {

//     $('.news-media ul').mCustomScrollbar({
//     callbacks:{
//         onInit:function(){
//         console.log('scrollbar initialized');
//         }
//     }
// });

  }
}
