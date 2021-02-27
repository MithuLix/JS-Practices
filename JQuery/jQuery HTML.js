$(function() {
    $('#btn1').click(function() {alert('Text : ' +  $('#para1').text())});
    $('#btn2').click(function() {alert('Html : ' +  $('#para1').html())});
    $('#value').css('display', 'none');
    $('#btn3').click(function() {$('#text').val('Tried to show something after click "show Value" button')})
    $('#btn4').click(function() {$('#para2').html('<p><b>consectetur adipisicing elit. Ex, odio..</b></p>')})


    $('#btn5').click(function() {$('#para3').text(function(i, origText) {
        return "Olde text : " + origText + "New text: Hello world! (index: " + i + ")";
        });
    })
    $('#btn6').click(function() {$('#para4').html(function(i, origText) {
        return "Olde html : " + origText + "New html: Hello world! (index: " + i + ")";
        });
    });


    $('#btn7').click(function() {$('#btn7').attr('href', 'https://www.google.com/' );});



//add
    $('#btn8').click(function() {$('#para5').append('<b>Appended paragraph</b>.');});
    $('#btn9').click(function() {$('#para5').prepend('<b>Prepended paragraph</b>.');});

    $('#btn10').click(function() {$('ol').append('<li>Appended Items</li>');});
    $('#btn11').click(function() {$('ol').prepend('<li>Prepended Items</li>');});


//remove
    $('#btn12').click(function() {$('.add').remove();});
    $('#btn13').click(function() {$('p').empty();});

//css classes
    $("#btn14").click(function() {$("h3, p").addClass('pink');});
    $("#btn15").click(function() {$("h3, p").removeClass('pink');});
    $("#btn16").click(function() {$("h3, p").toggleClass('red');});
});