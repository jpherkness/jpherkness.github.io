$(document).ready(function() {

  var nodes = document.getElementById('s').childNodes;
  for(var i=0; i<nodes.length; i++) {
    nodes[i].className = nodes[i].className + "skill pure-u-1-3 pure-u-sm-1-3 pure-u-lg-1-4 pure-u-xl-1-4";
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
