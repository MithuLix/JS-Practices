$(function(){
    $('#hide_me').click(function() {$('#para1').hide('slow');});
    $('#show_me').click(function() {$('#para1').show(3000);});

    $('#para1').css('background', 'pink');
    $('#para2').css({'background': 'lightblue', 'display' : 'none'});
    $('#para3').css('background', 'khaki');
    $('#para4').css({'background': 'lightblue', 'display': 'none', 'overflow':'hidden', 'border': '2px solid green'});
    $('#para5').css('background', '#DEB887');



    //fade function
    $("button").click(function(){
        $("#div6").fadeIn();
        $("#div7").fadeIn("slow");
        $("#div8").fadeIn(3000);
      });

    $('#fade_para2').click(function() {$('#para2').fadeIn();});

    $('#fadeIn').click(function() {
        $('.div3').fadeIn();  $('.div4').fadeIn('slow');  $('.div5').fadeIn(3000);
    });

    $('#fadeOut').click(function() {
        $('.div3').fadeOut();  $('.div4').fadeOut('slow');  $('.div5').fadeOut(3000);
    });



    //slide function
    $('#slideUp').click(function() {$('#para3').slideUp();});
    $('#slideDown').click(function() {$('#para3').slideDown();});
    $('#slideToggle').click(function() {$('#para3').slideToggle();});



    // animate method
    $('#Queue').click(function() {var div = $('.div8');
        div.animate({height: '120px', opacity: '0.4'}, 'slow');
        div.animate({width: '270px', opacity: '0.7'}, 'slow')
        div.animate({height: '140px', opacity: '0.4'}, 'slow')
        div.animate({width: '400px', opacity: '0.8'}, 'slow')
    });

    $('#Queue2').click(function() {var div = $('.div9');
        div.animate({width: '500px'}, 'slow')
        div.animate({fontSize: '3rem'}, 'slow')
    });

    $('#start_animate').click(function() {$('#para4').slideDown(3000);});
    $('#stop_animate').click(function() {$('#para4').stop();});

    $('#Queue4').click(function() {var div = $('.div9');
        div.animate({width: '500px'}, 'slow')
        div.animate({fontSize: '3rem'}, 'slow')
    });



    //callback method
    $('#callback').click(function() {$('#para5').hide(2000); alert('The Para5 is hidden how')})



    //Chaining Method
    $('#chain').click(function() {$('#para6').css('background', 'pink').slideUp(2000).slideDown(3000);})




})
