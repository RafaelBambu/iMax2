    $(document).ready(function(){
   $('#link_1').on('click', function(e) {

        e.preventDefault();
        $("html, body").animate({scrollTop:( $('#Inicio').offset().top) }, 1000);
    });

        $('#link_2').on('click', function(e) {
        e.preventDefault();
        console.log("loggin2g" , $('#Nosotros').offset().top);
        $("html, body").animate({scrollTop:( $('#Nosotros').offset().top - 90) }, 1000);
    });
            $('#link_3').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop:( $('#App').offset().top - 100)}, 1000);
    });
    });
 