"use strict";
function fetchData() {
  var rawTemplate = $('#music-template').html();
  var resultString = '';

  $.get('https://larrybabcock.firebaseio.com/works.json', function(works) {

    for (var i = 0; i < works.length; i++) {
      resultString += Mustache.render(rawTemplate, works[i]);
    }

    $('#thumbnails-container').append(resultString);
    handleClickEvents();
  });
}

function handleClickEvents() {
  // If any movie thumbnail gets clicked, slide the mask curtain down.
  $('.movie-thumbnail').click(function(e) {
    var mask = $(e.target).children('.mask');
    mask.css('top', '0');
    // $('header').fadeOut();
  });

  // $('.mask').mouseout(function(e) {
  //   var mask = $(e.target).children('.mask');
  //   mask.css('transform', 'translateY(-365px)');
  // });

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $(e.target).parent();
    mask.css('top', '-365px');
  });
}

fetchData();