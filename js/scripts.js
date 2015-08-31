// $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = 550;             // set to whatever you want it to be

//     if(y_scroll_pos > scroll_pos_test) {
//         //do stuff
//         console.log("I reached 150 in the scroll position");
//     }
// });

$(".si-icon svg").click(function(){
  $(".main-nav-list").toggleClass( "flex" );
});

// on vertical scroll up
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
      $('header').fadeOut();
   } else {
      // upscroll code
      $('header').fadeIn();

   }
   lastScrollTop = st;
});

// scroll to certain div
$(window).scroll(function() {
   var hT = $('#hero').offset().top,
       hH = $('#hero').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       console.log('you have scrolled to the h1!');
   }
});



// Smooth scroll to anchors
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});