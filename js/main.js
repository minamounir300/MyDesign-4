$(function() {

    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(winH - (upperH + navH));



    // Featured Work Shuffle
    $(".featured-work ul li ").on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).data("class") === "all") {
            $(".shuffle-images .col-md").css("opacity", "1");
        } else {
            $(".shuffle-images .col-md").css("opacity", "0.1");
            $($(this).data("class")).css("opacity", 1);
        }
    });



    // Scroll to Top
    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        };
    });

    scrollButton.click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });



    // Nice Scroll
    $("html").niceScroll({
        cursorcolor: "#08526d",
        cursorwidth: "8px",
        cursoropacitymin: "0",
        cursoropacitymax: "1"
    });



});