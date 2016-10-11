/*The size of a row or a column on our board in terms of blocks*/
var numBlocks = 30;

/*The size of a row or column on our board in terms of pixels*/
var pxSize = 600;


$(document).ready(function() {
  renewGrid(numBlocks);

    $('#board').on('mouseenter', '.block', function() {
        $(this).removeClass('highlighted');
        $(this).addClass('hover');
    });
    $('#board').on('mouseout', '.block', function() {
        $(this).removeClass('hover');
        $(this).addClass('highlighted');
    });

});

function renewGrid(size){
  $('#board *').remove();

  /*Calculate the proper height and width (or dimensions) for
   each block in order to maintain the proper grid size*/
   var dim = pxSize / numBlocks;

  for (var i = 0; i < (size * size); i++) {
      $('#board').append('<div class="block" style="width: '+dim+'px;height: '+dim+'px;"></div>');
      if (i !== 0 && (i + 1) % size === 0) {
          $('#board').append('<br>');
      }
  }
}

$('#clear').on('click', function(){
  renewGrid(numBlocks);
});
