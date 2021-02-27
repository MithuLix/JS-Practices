$(function(){
    $('h2').click(function(){
        $(this).hide();
    });
});
$(function(){
    $('p:first').click(function(){
        $(this).hide();
    });
});
$(function(){
    $('input').focus(function(){
        $(this).css('background-color', 'wheat');
    });
});

$(function(){
    $('ul li:first').click(function(){
        $(this).hide();
    });
});
$(function(){
    $("button").click(function(){
        $("a[target='_blank']").hide();
    });
});
$(function(){
    $('tr:even').css('background-color', 'red')
})
$(function(){
    $('tr:odd').on('click', function(){
        $(this).hide();
    });
});




/*--
$("#Lastname")
$(".intro")
$(".intro, #Lastname")
$("h1")
$("h1, p")
$("p:first")
$("p:last")
$("tr:even")
$("tr:odd")
$("p:first-child")
$("p:first-of-type")
$("p:last-child")
$("p:last-of-type")
$("li:nth-child(1)")
$("li:nth-last-child(1)")
$("li:nth-of-type(2)")
$("li:nth-last-of-type(2)")
$("b:only-child")
$("h3:only-of-type")
$("div > p")
$("div p")
$("ul + p")
$("ul ~ table")
$("ul li:eq(0)")
$("ul li:gt(0)")
$("ul li:lt(2)")
$(":header")
$(":header:not(h1)")
$(":animated")
$(":focus")
$(":contains(Duck)")
$("div:has(p)")
$(":empty")
$(":parent")
$("p:hidden")
$("table:visible")
$(":root")
$("p:lang(it)")
$("[id]")
$("[id=my-Address]")
$("p[id!=my-Address]")
$("[id$=ess]")
$("[id|=my]")
$("[id^=L]")
$("[title~=beautiful]")
$("[id*=s]")
$(":input")
$(":text")
$(":password")
$(":radio")
$(":checkbox")
$(":submit")
$(":reset")
$(":button")
$(":image")
$(":file")
$(":enabled")
$(":disabled")
$(":selected")
$(":checked")
$("*")
--*/