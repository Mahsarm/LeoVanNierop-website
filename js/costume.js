

 //toggle nav-bar
 $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// active nav tabs by scrolling
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


$('#accordion').on('shown.bs.collapse', function (e) {
   var id = $(e.target).prev().find("[id]")[0].id;
   navigateToElement(id);
})

function navigateToElement(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}

    