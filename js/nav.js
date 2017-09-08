$(document).ready(function () {
    $('#link_1').on('click', function (e) {

        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Inicio').offset().top) }, 1000);
    });

    $('#link_2').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Nosotros').offset().top - 100) }, 1000);
    });
    $('#link_3').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#App').offset().top - 100) }, 1000);
    });
    $('#link_4').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Inicio').offset().top) }, 1000);
    });
    $('#link_5').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Nosotros').offset().top -150) }, 1000);
    });
    $('#link_6').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#App').offset().top - 100) }, 1000);
    });
    $('#link_7').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Inicio').offset().top - 100) }, 1000);
    });
    $('#link_8').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#Nosotros').offset().top - 100) }, 1000);
    });
    $('#link_9').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: ($('#App').offset().top - 100) }, 1000);
    });
});
