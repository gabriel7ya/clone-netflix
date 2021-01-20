$('#menu').css('top',document.getElementById('header-menu').offsetHeight);


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:3
        },
        800:{
            items:4
        }
    }
})


$('.item').mouseenter(function() {
    $(this).find('.detalhe-filme').animate({
        opacity: 1,
        height: "40%",
        opacity: '1',
    });
    
}).mouseleave(function() {
    $(this).find('.detalhe-filme').animate({
        opacity: 0,
        height: "30%",
    })
});

$('#hamburguer').on('click', function(){
    if($('#menu').css("display") == 'none'){
        $('#menu').css({
            display: 'block',
        })
    } else {
        $('#menu').css({
            display: 'none',
        })
    }
});

$(window).resize(function(){
    if (window.innerWidth > 700){
        //$('#header-menu img').attr('src', './img/netflix-logo-n.svg')
        if($('#menu').css("display") == 'none'){
            $('#menu').css({
                display: 'block',
            });
            
        } else {

        }
    }
})