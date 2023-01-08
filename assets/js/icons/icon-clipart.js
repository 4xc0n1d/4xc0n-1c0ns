(function($) {
    "use strict";
    $('.icon-lists div').click( function() {
        $(".icon-lists").addClass('m-b-50');
        $(".fa-fa-icon-show-div").show();
        $(".fa-fa-icon-show-div").removeClass('opecity-0');
        var font_class = ($(this).children().attr('class'));
        var fafaclass= '&lt;i class="'+ font_class + '"&gt';
        var fafaclass1= '<i class="'+ font_class + '"></i>';
        $("#fclass").html(fafaclass);
        $("#fclass1").html(font_class);
        $("#icon_main").removeClass();
        $("#icon_main").addClass(font_class);
        $("#icon_main").addClass("fa-2x");
        $(".inp-val").val(fafaclass1);
    });
    $(".close-icon").click(function(){
        $(".icon-hover-bottom").addClass("opecity-0");
        $(".fa-fa-icon-show-div").hide();
        $(".icon-lists").removeClass('m-b-50');
    });
})(jQuery);
function copyHTML() {
    var copyText = document.getElementById("input_copy");
    copyText.select();
    document.execCommand("Copy");
};



(function($) {
    "use strict";
    $('.icon-lists div').click( function() {
        $(".icon-lists").addClass('m-b-50');
        $(".fa-fa-icon-show-div").show();
        $(".fa-fa-icon-show-div").removeClass('opecity-0');
        var font_class = ($(this).children().attr('class'));
        var svgclass= '&lt;i class="'+ font_class + '"&gt';
        var svgclass1= '<svg class="ax '+ font_class + '"><use xlink:href="#'+ font_class + '"></use></svg>';
        $("#svgclass").html(svgclass);
        $("#svgclass1").html(font_class);
        $("#icon_main").removeClass();
        $("#icon_main").addClass(font_class);
        $("#icon_main").addClass("fa-2x");
        $(".inp-svg").val(svgclass1);
    });
    $(".close-icon").click(function(){
        $(".icon-hover-bottom").addClass("opecity-0");
        $(".fa-fa-icon-show-div").hide();
        $(".icon-lists").removeClass('m-b-50');
    });
})(jQuery);
function copySVG() {
    var copyText = document.getElementById("input_svg");
    copyText.select();
    document.execCommand("Copy");
};