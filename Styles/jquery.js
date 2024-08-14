$('#butn1').on('click', function(){
$('#abouti').toggleClass('ab1');
$('#butn1').toggleClass('but1'); 
    /*
    $(this).text($(this).text() == 'Выкл.1' ? 'Вкл.1' : 'Выкл.1');
    $(this).css('color','red');
     Проверка подключения
     alert('Ваша версия jQuery ' + jQuery.fn.jquery);
    */
});
$(function(){
    var tag = $('.uehal').hide(8000);
    });    
$('#butn2').on('click', function(){
    $('#abouti').toggleClass('ab2');
    $('#butn2').toggleClass('but2'); 
});
$('#butn3').on('click', function(){
    $('#abouti').toggleClass('ab3');
    $('#butn3').toggleClass('but3'); 
});
$('#butn4').on('click', function(){
    $('#abouti').toggleClass('ab4');
    $('#butn4').toggleClass('but4'); 
});
$('#butn5').on('click', function(){
    $('#abouti').toggleClass('ab5');
    $('#butn5').toggleClass('but5'); 
});
$('#butn6').on('click', function(){
    $('#abouti').toggleClass('ab6');
    $('#butn6').toggleClass('but6'); 
});
$('#butn7').on('click', function(){
    $('#abouti').toggleClass('ab7');
    $('#butn7').toggleClass('but7'); 
});
$('#butn8').on('click', function(){
    $('#abouti').toggleClass('ab8');
    $('#butn8').toggleClass('but8'); 
});

$('#myModal').modal("toggle");
$('#myModal').on('shown.bs.modal', function(event){ alert("jQuery Ok"); });

$(document).ready(function(){
    $('a').hoverText();
});

/*
$(document).ready(function(){
    $('#buttonjQ').on('click', function(){
        alert('Hello from jQuery!');
    });
});
$('#butn1').addClass('ab1');
$('#butn2').addClass('ab2');
$('#butn3').addClass('ab3');
$('#butn4').addClass('ab4');
$('#butn5').addClass('ab5');
$('#butn6').addClass('ab6');
$('#butn7').addClass('ab7');
$('#butn8').addClass('ab8');
*/
