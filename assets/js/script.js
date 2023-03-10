(function ($) {
    "use strict";
    $(document).on('click', function (e) {
        var outside_space = $(".outside");
        if (!outside_space.is(e.target) &&
            outside_space.has(e.target).length === 0) {
            $(".menu-to-be-close").removeClass("d-block");
            $('.menu-to-be-close').css('display', 'none');
        }
    })

    $('.prooduct-details-box .close').on('click', function (e) {
        var tets = $(this).parent().parent().parent().parent().addClass('d-none');
        console.log(tets);
    })



    if ($('.page-wrapper').hasClass('horizontal-wrapper')){

        $(".sidebar-list").hover(
            function () {
              $(this).addClass("hoverd");
            },
            function () {
              $(this).removeClass("hoverd");
            }
        );
        $(window).on('scroll', function () {
            if ($(this).scrollTop() < 600) {
                $(".sidebar-list").removeClass("hoverd");
            }         
        });   
      }

    /*----------------------------------------
     passward show hide
     ----------------------------------------*/
    $('.show-hide').show();
    $('.show-hide span').addClass('show');

    $('.show-hide span').click(function () {
        if ($(this).hasClass('show')) {
            $('input[name="login[password]"]').attr('type', 'text');
            $(this).removeClass('show');
        } else {
            $('input[name="login[password]"]').attr('type', 'password');
            $(this).addClass('show');
        }
    });
    $('form button[type="submit"]').on('click', function () {
        $('.show-hide span').addClass('show');
        $('.show-hide').parent().find('input[name="login[password]"]').attr('type', 'password');
    });

    /*=====================
      02. Background Image js
      ==========================*/
    $(".bg-center").parent().addClass('b-center');
    $(".bg-img-cover").parent().addClass('bg-size');
    $('.bg-img-cover').each(function () {
        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'display': 'block'
        });
        el.hide();
    });

    $(".mega-menu-container").css("display", "none");
    $(".header-search").click(function () {
        $(".search-full").addClass("open");
    });
    $(".close-search").click(function () {
        $(".search-full").removeClass("open");
        $("body").removeClass("offcanvas");
    });
    $(".mobile-toggle").click(function () {
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-toggle-left").click(function () {
        $(".left-header").toggleClass("open");
    });
    $(".bookmark-search").click(function () {
        $(".form-control-search").toggleClass("open");
    })
    $(".filter-toggle").click(function () {
        $(".product-sidebar").toggleClass("open");
    });
    $(".toggle-data").click(function () {
        $(".product-wrapper").toggleClass("sidebaron");
    });
    $(".form-control-search input").keyup(function (e) {
        if (e.target.value) {
            $(".page-wrapper").addClass("offcanvas-bookmark");
        } else {
            $(".page-wrapper").removeClass("offcanvas-bookmark");
        }
    });

   $(".mode").on("click", function () {
        const bodyModeDark = $("body").hasClass("dark-only") 

        if(!bodyModeDark){
            $(".mode").addClass("active")
            localStorage.setItem("mode","dark-only")
            $("body").addClass("dark-only")
            $("body").removeClass("light")
        }
        if(bodyModeDark){

            $(".mode").removeClass("active")
            localStorage.setItem("mode","light")
            $("body").removeClass("dark-only")
            $("body").addClass("light")
        }

    })
    $("body").addClass(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light")
    $(".mode").addClass(localStorage.getItem("mode") === "dark-only" ? "active" : " ")

    // sidebar filter
    $('.md-sidebar .md-sidebar-toggle ').on('click', function(e) {
        $(".md-sidebar .md-sidebar-aside ").toggleClass("open");   
    });

})(jQuery);

$('.loader-wrapper').fadeOut('slow', function () {
    $(this).remove();
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
    } else {
        $('.tap-top').fadeOut();
    }
});



$('.tap-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
(function ($, window, document, undefined) {
    "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function (e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find(".c-ripple__circle");
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
            top: y + "px",
            left: x + "px"
        });
        $this.addClass("is-active");
    });
    $ripple.on(
        "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
        function (e) {
            $(this).removeClass("is-active");
        });


})(jQuery, window, document);


// active link

$(".chat-menu-icons .toogle-bar").click(function () {
    $(".chat-menu").toggleClass("show");
});

/* Search Icons */
$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".iconslist div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/* Tabs Class */
; (function (defaults, $, window, document, undefined) {

    'use strict';

    $.extend({
        // Function to change the default properties of the plugin
        // Usage:
        // jQuery.tabifySetup({property:'Custom value'});
        tabifySetup: function (options) {

            return $.extend(defaults, options);
        }
    }).fn.extend({
        // Usage:
        // jQuery(selector).tabify({property:'value'});
        tabify: function (options) {

            options = $.extend({}, defaults, options);

            return $(this).each(function () {
                var $element, tabHTML, $tabs, $sections;

                $element = $(this);
                $sections = $element.children();

                // Build tabHTML
                tabHTML = '<ul class="tab-nav">';
                $sections.each(function () {
                    if ($(this).attr("title") && $(this).attr("id")) {
                        tabHTML += '<li><a href="#' + $(this).attr("id") + '">' + $(this).attr("title") + '</a></li>';
                    }
                });
                tabHTML += '</ul>';

                // Prepend navigation
                $element.prepend(tabHTML);

                // Load tabs
                $tabs = $element.find('.tab-nav li');

                // Functions
                var activateTab = function (id) {
                    $tabs.filter('.active').removeClass('active');
                    $sections.filter('.active').removeClass('active');
                    $tabs.has('a[href="' + id + '"]').addClass('active');
                    $sections.filter(id).addClass('active');
                }

                // Setup events
                $tabs.on('click', function (e) {
                    activateTab($(this).find('a').attr('href'));
                    e.preventDefault();
                });

                // Activate first tab
                activateTab($tabs.first().find('a').attr('href'));

            });
        }
    });
})({
    property: "value",
    otherProperty: "value"
}, jQuery, window, document);


// Calling the plugin
$('.tab-group').tabify();