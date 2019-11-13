//Buttons
$(document).ready(function() {

    $('#aboutSec').toggle();
    $('#notesSec').toggle();
    $('#gamesSec').toggle();
    $('#linksSec').toggle();
    $('.fa-check-square').toggle();

    //$('#item').toggle();
    //$('#item1').toggle();
    //$('#item2').toggle();

    $('#aboutNav').on('click', function() {
        $('#aboutSec').toggle(1000);

    });

    $('#notesNav').on('click', function() {
        $('#notesSec').toggle(1000);

    });

    $('#gamesNav').on('click', function() {
        $('#gamesSec').toggle(1000);

    });

    $('#linksNav').on('click', function() {
        $('#menu3').toggle();
        $('#linksSec').toggle(1000);

    });

    $('#checkBox').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox1').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox2').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox3').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox4').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox5').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox6').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox7').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox8').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });

    $('#checkBox9').on('click', function() {
        $('.fa-square').toggle();
        $('.fa-check-square').toggle();
    });


    // $('#new').on('click', function() {
    //  count += 1;
    //  $('#item' + count).show()
    //$('#editList').append(`<p id="edit` + count + `" contenteditable="true" class="editableP"></p><button type="button " onclick="save`+ count +`()" class="saveButton">Save
    // <i class="fas fa-file-download"></i></button>`);

    // });
});

// this is adding numbers to the ID "edit"
var count = 0;
