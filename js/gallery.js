$(function() {
  "use strict";
  init();

  function init() {
    loadJSON(function(response) {
      var works = JSON.parse(response);

      fetchData(works);
      handleEvents();
    });
  }

  function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/portfolio.json', true); 
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

  function fetchData(works) {
    var rawTemplate = $('#portfolio-template').html(),
    resultString = '';

    for (var i = 0; i < works.length; i++) {
      resultString += Mustache.render(rawTemplate, works[i]);
    }

    $('#card-container').append(resultString);
  }

  function handleEvents() {
    $('.portfolio-thumbnail').click(function(e) {
      showMask(e);
    });
    
    $('.close-btn').click(function(e) {
      hideMask(e);
    });

    $(window).scroll(function() {
      showNav();
    });
  }

  function showMask(e) {
    var mask = $(e.target).children('.mask');
    mask.css('top', '0');
    hideNav();
  }

  function hideMask(e) {
    var mask = $(e.target).parent();
    mask.css('top', '-365px');
  }

  function showNav() {
    if($(window).scrollTop() > 100){
      $('header').fadeIn();
    }
  }

  function hideNav() {
    $('header').fadeOut();
  }
});