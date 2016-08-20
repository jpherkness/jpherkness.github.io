$(document).ready(function() {
  $('.tooltip').tooltipster({
    theme: 'tooltip-theme',
    position: 'right',
    delay: 0
  });

  // Begin Highlighting pre code blocks
  hljs.initHighlightingOnLoad();

  $('.project-wrapper').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.project',
    // use element for option
    columnWidth: '.project',
    percentPosition: true,
    gutter: 20
  })
});
