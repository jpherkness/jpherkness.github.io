$(document).ready(function() {

  $('.tooltip').tooltipster({
    theme: 'tooltip-theme',
    position: 'right',
    delay: 0
  });

  var nodes = document.getElementById('s').childNodes;
  for(var i=0; i<nodes.length; i++) {
    nodes[i].className = nodes[i].className + "col-md-3 col-sm-3 col-xs-4";
  }

  $( ".smi-COMMENT" ).hover(
    function() {
      $(this).css('background-color','#5f5f80')
      $(this).css('color','#ffffff')
    }, function() {
      $(this).css('background-color', '')
      $(this).css('color','')
    }
  );

});
