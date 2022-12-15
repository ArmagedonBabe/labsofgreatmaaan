$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $("#a1").css("display","block");
        } else {
            $("#a1").css("display","none");
        }
    });
});