
jQuery(window).on('load', function(){

  $('.projects-grid').masonry({
    itemSelector: '.project',
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20,
    isAnimated: false
  });

  // Fade in the projects
  $('.project').removeClass('tada');
  $('.project').each(function(i){
    setTimeout(function () {
      $('.project').eq(i).addClass('tada');
    }, 200 * i);
  });
});
