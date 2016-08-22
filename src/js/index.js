
jQuery(window).on('load', function(){

  $('.projects-grid').masonry({
    itemSelector: '.project',
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20,
    isAnimated: false
  });

  // Fade in the projects
  $('.project').each(function(i){
    var project = $('.project').eq(i)
    project.removeClass('tada');
    setTimeout(function () {
      project.addClass('tada');
    }, 200 * i);
  });
});
