$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
            if(offset)$('html,body').scrollTop(offset.top);
    });
});