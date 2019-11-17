//Buttons
$(document).ready(function() {

    $('#aboutSec').toggle();
    $('#notesSec').show();
    $('#gamesSec').toggle();
    $('#linksSec').toggle();
    $('.fa-check-square').toggle();
    $('#headerwelcome').show();
    $('#headerabout').toggle();
    $('#headernotes').toggle();

    //$('#item').toggle();
    //$('#item1').toggle();
    //$('#item2').toggle();

    $('#aboutNav').on('click', function() {
        $('#aboutSec').show(1000);
        $('#notesSec').hide(1000);
        $('#headerwelcome').hide();
        $('#headerabout').show();
        $('#headernotes').hide();
    });

    $('#notesNav').on('click', function() {
        $('#notesSec').show(1000);
        $('#aboutSec').hide(1000);
        $('#headerwelcome').hide();
        $('#headernotes').show();
        $('#headerabout').hide();

    });

    $('#checkBox').on('click', function() {
        $('#fasquare').toggle();
        $('#fabox').toggle();
    });

    $('#checkBox1').on('click', function() {
        $('#fasquare1').toggle();
        $('#fabox1').toggle();
    });

    $('#checkBox2').on('click', function() {
        $('#fasquare2').toggle();
        $('#fabox2').toggle();
    });

    $('#checkBox3').on('click', function() {
        $('#fasquare3').toggle();
        $('#fabox3').toggle();
    });

    $('#checkBox4').on('click', function() {
        $('#fasquare4').toggle();
        $('#fabox4').toggle();
    });

    $('#checkBox5').on('click', function() {
        $('#fasquare5').toggle();
        $('#fabox5').toggle();
    });

    $('#checkBox6').on('click', function() {
        $('#fasquare6').toggle();
        $('#fabox6').toggle();
    });

    $('#checkBox7').on('click', function() {
        $('#fasquare7').toggle();
        $('#fabox7').toggle();
    });

    $('#checkBox8').on('click', function() {
        $('#fasquare8').toggle();
        $('#fabox8').toggle();
    });

    $('#checkBox9').on('click', function() {
        $('#fasquare9').toggle();
        $('#fabox9').toggle();
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
