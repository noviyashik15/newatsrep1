$('.menu-btn').on('click', function(e) { e.preventDefault;
    $(this).addClass('menu-btn_active');
    $('#butn1').addClass('ab1');
    $('#butn2').addClass('ab2');
    $('#butn3').addClass('ab3');
    $('#butn4').addClass('ab4');
    $('#butn5').addClass('ab5');
    $('#butn6').addClass('ab6');
    $('#butn7').addClass('ab7');
    $('#butn8').addClass('ab8');

    $('.menu-btn').text('Исчезаю');   
    $('.menu-btn').fadeOut(4000);    
/* setTimeout (vremya,2000); */
setTimeout (vremyap,4000);

});
$(document).ready(function(){
$('.menu-btn').dblclick(function()
{
    $(this).removeClass('menu-btn_active');
    $('#butn1').removeClass('ab1');
    $('#butn2').removeClass('ab2');
    $('#butn3').removeClass('ab3');
    $('#butn4').removeClass('ab4');
    $('#butn5').removeClass('ab5');
    $('#butn6').removeClass('ab6');
    $('#butn7').removeClass('ab7');
    $('#butn8').removeClass('ab8');
    $('.butn2shift').hide();
})    
});
function vremya() {
    $('#butnsite2').after('<span class="butn2shift">&nbspДвойное нажатие Шрифты вернёт кнопкам первоначальный вид&nbsp</span>')    
} 
$(function(){ var link = $('.menu-btn');
link.mouseover(function(){ 
})
link.mouseout(function(){
    $(this).removeClass('butnshr');
})    
});
$(function(){ var link = $('h3');
link.hover(
    function() { 
        $(this).addClass('butnshr');    
    },  function() {
        $(this).removeClass('butnshr');
    })    
});
function vremyap() {
$('.menu-btn').show(2500);    
$('.menu-btn').text('Шрифты');      
}
$(function(){ var link = $('.butnshr');
link.hover( function() { 
    $('.butnshr').slideUp(1500).slideDown(1500);       
})    
});

/* function remove() {this.remove();} */
/*  
});  
$('#butnshrift').on('click', function(){    
    $('<span id="butnshr">&nbspВыберите желаемый шрифт&nbsp&nbsp</span>').insertAfter($('#butnshrift'));    
    $('<button id="butn1">&nbspШрифт&nbsp1&nbsp</button>').insertAfter($('#butnshr'));
    $('<button id="butn2">&nbspШрифт&nbsp2&nbsp</button>').insertAfter($('#butn1'));
    $('<button id="butn3">&nbspШрифт&nbsp3&nbsp</button>').insertAfter($('#butn2'));
    $('<button id="butn4">&nbspШрифт&nbsp4&nbsp</button>').insertAfter($('#butn3'));
    $('<button id="butn5">&nbspШрифт&nbsp5&nbsp</button>').insertAfter($('#butn4'));
    $('<button id="butn6">&nbspШрифт&nbsp6&nbsp</button>').insertAfter($('#butn5'));
    $('<button id="butn7">&nbspШрифт&nbsp7&nbsp</button>').insertAfter($('#butn6'));
    $('<button id="butn8">&nbspШрифт&nbsp8&nbsp</button>').insertAfter($('#butn7'));
    $('<label class="checkbox" for="checkbox">').insertAfter($('#butn8'));
    $('.menu-btn').prop('disabled','true');
    $(this).removeClass('.menu-btn');
*/
