// Language
var tnum = 'en';

$(document).ready(function () {

    if (localStorage.getItem("primary") != null) {
        var primary_val = localStorage.getItem("primary");
        $("#ColorPicker1").val(primary_val);
        var secondary_val = localStorage.getItem("secondary");
        $("#ColorPicker2").val(secondary_val);
    }


    $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
    });
    $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');

        setTimeout(function () {
            $('.more_lang').toggleClass('active');
        }, 5);
    });


    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        var i = $(this).find('i').attr('class');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang i').attr('class', i);


    });
});

function translate(tnum) {
    $('.home').text(trans[0][tnum]);
    $('.icon').text(trans[1][tnum]);
    $('.logo').text(trans[2][tnum]);
    $('.3d').text(trans[3][tnum]);
    /* Help */
    $('.starter-kit').text(trans[4][tnum]);
    $('.faq').text(trans[5][tnum]);
    $('.about').text(trans[6][tnum]);
}

var trans = [
    /* Trans 0 Home */
    {
        en: 'Dashboards',
        id: 'Home'
    }, 
    /* Trans 1 Icon */
    {
        en: 'Icons',
        id: 'Ikon'
        
    }, 
    /* Trans 2 Logo */
    {
        en: 'Logos',
        id: 'Logo'
        
    }, 
    /* Trans 3 3d */
    {
        en: '3D',
        id: '3D'
        
    }, 

    /* Help */

    /* Trans 4 Starter Kit */
    {
        en: 'Starter Kit',
        id: 'Starter Kit'
        
    }, 
    /* Trans 5 faq */
    {
        en: 'Faq',
        id: 'Tanya jawab'
        
    }, 
    /* Trans 6 about */
    {
        en: 'About',
        id: 'Tentang'
        
    }, 
];

$(".mobile-title svg").click(function () {
    $(".header-mega").toggleClass("d-block");
});

$(".onhover-dropdown").on("click", function () {
    $(this).children('.onhover-show-div').toggleClass("active");
});

$("#flip-btn").click(function(){
    $(".flip-card-inner").addClass("flipped")
});

$("#flip-back").click(function(){
    $(".flip-card-inner").removeClass("flipped")
})