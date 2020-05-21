
$(function(){
    $(document).scroll(function(){
        var $nav = $('#main-navbar')
        $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height())
        $('#to-top').toggleClass('display',$(this).scrollTop() > $nav.height())

        // Add active class on scroll
        var scrollPos = $(document).scrollTop();
        $('#main-navbar ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#main-navbar ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    })
})

$('.navbar-toggler').on('click',() => {
    $('#main-navbar').toggleClass('pressed')
})

$("#to-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 100);
 });

