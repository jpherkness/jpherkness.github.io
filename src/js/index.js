
jQuery(window).on('load', function(){
  $('.projects-grid').masonry({
    itemSelector: '.project',
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20,
    isAnimated: true
  })

  // Fade in the projects
  $('.project').css('display', 'none');
  $('.project').css('visibility', 'visible');
  $('.project').fadeIn(1250);
});
