/*The size of a row or a column on our board in terms of blocks*/
var numBlocks = 12;

/*Minimum and maximum allowed number of blocks*/
var minBlocks = 1;
var maxBlocks = 38;

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

function renewGrid(size) {
    $('#board *').remove();

    /*Calculate the proper height and width (or dimensions) for
     each block in order to maintain the proper grid size*/
    var dim = pxSize / numBlocks;

    for (var i = 0; i < (size * size); i++) {
        $('#board').append('<div class="block" style="width: ' + dim + 'px;height: ' + dim + 'px;"></div>');
        if (i !== 0 && (i + 1) % size === 0) {
            $('#board').append('<br>');
        }
    }

    $('#footer > p').text('Current size: ' + numBlocks);
}

$('#clear').on('click', function() {
    var input = +$('input').val();
    if (input >= minBlocks && input <= maxBlocks)
        numBlocks = +$('input').val();

    $('input').val('');

    renewGrid(numBlocks);
});
