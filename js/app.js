$(document).foundation();
$(document).ready(function(){
    $('#serach-btn').click(function(e) {
        $('#search-input').toggle(1000);
        e.preventDefault();

    });


    $('.slider-slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button class="slick-prev slick-arrow  left-arrow" aria-label="Prev" type="button" style=""> <span class="icon-chevron-thin-right slider-arrows"></span></button>',
        nextArrow: '<button class="slick-next slick-arrow " aria-label="Next" type="button" style=""><span class="icon-chevron-thin-right slider-arrows"></span></button>'
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""> &lt; </button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""> &gt; </button>'
    });
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 2000,
        arrows:false
    });

});