$(function () {
    $(document).scroll(function(){

        var $nav = $("#mainnavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

