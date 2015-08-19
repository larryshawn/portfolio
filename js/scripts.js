// $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = 550;             // set to whatever you want it to be

//     if(y_scroll_pos > scroll_pos_test) {
//         //do stuff
//         console.log("I reached 150 in the scroll position");
//     }
// });

$(window).scroll(function() {
   var hT = $('#hero-container').offset().top,
       hH = $('#hero-container').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       console.log('you have scrolled to the h1!');
   }
});