function renderObjectsFromArray() {
  var rawTemplate = $('#music-template').html();
  var resultString = '';
  var works = [
    {
      description: "My personal project, which I created from a thought to production. It's using parallax scrolling in mobile first design. This website is fully responsive and supports all major browsers.",
      name: "Katoomba",
      thumbnail: "images/Katoomba.jpg",
      website: "http://larryshawn.github.io/parallax/"
    },

    {
      description: "I replicated Facebook's Parse product landing page. This website is fully responsive and supports all major browsers.",
      name: "Parse Landing Page",
      thumbnail: "images/parse.gif",
      website: "http://larryshawn.github.io/parse/"
    },

     {
      description: "This mobile first design is beautifully coded for all screen sizes. Here I incorporate the trailer movie and an image slider of key images.This website is fully responsive and supports all major browsers.",
      name: "300 Movie Landing Page",
      thumbnail: "images/300.jpg",
      website: "http://larryshawn.github.io/300movie/"
    },

     {
      description: "Hey! It's the page that you're already on :) This website, as you may have guessed was designed and coded by me using HTML5, CSS3, jQuery, and javaScript on a bootstrap framework. It is fully responsive and supports all major browsers.",
      name: "Portfolio",
      thumbnail: "images/portfolio.jpg",
      website: "http://larryshawn.github.io/portfolio/"
    },
  ];

  console.log(works);
    for (var i = 0; i < works.length; i++) {
      resultString += Mustache.render(rawTemplate, works[i]);
    }

    $('#thumbnails-container').append(resultString);
    handleClickEvents();

}


function fetchData() {
  var rawTemplate = $('#music-template').html();
  var resultString = '';

  $.get('https://ga-music.firebaseio.com/artists.json', function(artists) {

    // Slightly different approach: every time we stamp out a new template, we "concatenate" (or glue) the string into a giant string that ultimately contains all our cards. We then take this giant string and append it in its entirety into the thumbnails-container <div>.
    console.log(artists);
    for (var i = 0; i < artists.length; i++) {
      resultString += Mustache.render(rawTemplate, artists[i]);
    }

    $('#thumbnails-container').append(resultString);
    handleClickEvents();
  });
}

function handleClickEvents() {
  // If any movie thumbnail gets clicked, slide the mask curtain down.
  $('.movie-thumbnail').click(function(e) {
    // the e.target is the event target. It means, "whichever DOM element was clicked referring to .movie-thumbnail"
    var mask = $(e.target).children('.mask');
    // transform has a bunch of methods like 
    // translate(x-axis-in px) y-axis-in-px); - moves it around 
    // rotate(90deg) - rotates clockwise and counter clockwise
    // scale(0.1,14) - everything under 1 goes smaller
    // skewX(139deg) - top and bottom slant
    // skewY(-20deg) - sides slant
    // skew(25deg,186deg) - skews on x and y axis unless you only put one value in. In that case it functions just like a skewX()
    // matrix(scalex, rotate, scaley, translatex, translatey) - all at once
    mask.css('transform', 'translateY(0)');
  })

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $(e.target).parent();
    mask.css('transform', 'translateY(-365px)');
  });
}

// fetchData();
renderObjectsFromArray();

