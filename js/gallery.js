function fetchData() {
  var rawTemplate = $('#music-template').html();
  var resultString = '';

  $.get('https://larrybabcock.firebaseio.com/works.json', function(works) {

    // Slightly different approach: every time we stamp out a new template, we "concatenate" (or glue) the string into a giant string that ultimately contains all our cards. We then take this giant string and append it in its entirety into the thumbnails-container <div>.
    console.log(works);
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
    mask.css('transform', 'translateY(0)');
  });

  // $('.mask').mouseout(function(e) {
  //   var mask = $(e.target).children('.mask');
  //   mask.css('transform', 'translateY(-365px)');
  // });

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $(e.target).parent();
    mask.css('transform', 'translateY(-365px)');
  });
}

fetchData();


