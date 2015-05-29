

 //toggle nav-bar
 $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// active nav tabs by scrolling
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


//smooth scrolling
$('li a, .navbar-brand').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});


// smooth active panel 
$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-title a').offset().top -100
            }, 800); 
        }
    }); 
});




