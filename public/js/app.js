$(window).bind("load", function () {
    var footer = $("#footer");
    var dash=$("dash");
    var pos = footer.position();
    var pos1 =dash.position();
    var height = $(window).height();

    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'

        });
        dash.css({
            'height': height + 'px'
        });
    }
});