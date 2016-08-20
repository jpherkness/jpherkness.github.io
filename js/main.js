$(document).ready(function() {

  // Initializes the project grid
  $('.project-wrapper').masonry({
    itemSelector: '.project',
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20
  })

});
