$(document).ready(function() {
  // Initializes the project grid
  $('.projects').masonry({
    itemSelector: '.project',
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20
  })
});
