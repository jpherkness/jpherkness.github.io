
jQuery(window).on('load', function(){
  loadProjectGrid();
});

function loadProjectGrid(){
  $('.projects-grid').masonry({
    itemSelector: '.project-card',
    columnWidth: '.project-card',
    percentPosition: true,
    gutter: 20,
    isAnimated: false
  });

  // wait one second, then animate the projects
  setTimeout(function() {
    $('.project-card').css('transition', 'all 750ms ease-out');
    $('.project-card').each(function(i){
      var project = $('.project-card').eq(i)
      project.removeClass('is-visible');
      setTimeout(function () {
        project.addClass('is-visible');
      }, 200 * i);
    });
  }, 1);
}
