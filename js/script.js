var slides = document.querySelectorAll('.solutions_slider_item'),
    pathBg = ['images/main_bg.jpg', 'images/scr2.jpg', 'images/scr3.jpg', 'images/scr4.jpg', 'images/scr5.jpg'],
    currentObjects = {
        slide: 0,
        promo: 0,
        round: 0
    },
    controls = document.querySelectorAll('.control'),
    promo = document.querySelector('.promo'),
    buttons = document.querySelectorAll('button'),
    leftPromo = document.querySelector('.promo_slider_arrow-left'),
    rightPromo = document.querySelector('.promo_slider_arrow-right'),
    rounds = document.querySelectorAll('.promo_slider_round'),
    anchor = document.querySelector('.anchor');
// right_but = querySelector('.solutions_left-arrow');

addEventListener('DOMContentLoaded', function () {
    new WOW().init();
    

    slides[currentObjects.slide].style.display = "block";
    slides.forEach((e) => e.classList.add("fadeIn"));
    addEventListener('click', function (event) {
        if (event.target == controls[0] || event.target == leftPromo) {
            PushPrevSlide(event.target);
        } else if (event.target == controls[1] || event.target == rightPromo) {
            PushNextSlide(event.target);
        }

    });

    addEventListener('scroll', function () {

        if (window.pageYOffset >= 500) {
            anchor.style.display = "block";
        } else {
            anchor.style.display = "none";
        }


    });

    buttons.forEach(()=>{
        $('[data-modal=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn();
            document.body.style.overflow = 'hidden';
        });

        $('.modal_close').on('click', function () {
            $('.overlay, #consultation, #order, #thanks').fadeOut();
            document.body.style.overflow = 'scroll';
        });
    });
    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            });
            return false;
        });
    });
});

function PushNextSlide(target) {
    if (target == controls[1]) {
        slides[currentObjects.slide].style.display = "none";
        if (currentObjects.slide == slides.length - 1) {
            currentObjects.slide = 0;
            slides[currentObjects.slide].style.display = "block";
        } else {
            currentObjects.slide++;
            slides[currentObjects.slide].style.display = "block";
        }

    } else {
        rounds[currentObjects.round].classList.remove('promo_slider_round_active');
        currentObjects.round = currentObjects.round == 4 ? 0 : currentObjects.round += 1;
        currentObjects.promo = currentObjects.promo == 4 ? 0 : currentObjects.promo += 1;
        rounds[currentObjects.round].classList.add('promo_slider_round_active');
        let img = new Image();
        img.src = pathBg[currentObjects.promo];
        img.onload = function () {
            console.log(this.src);
            promo.style.background = `url('${this.src}')`;
            promo.style.backgroundPosition = 'center';
            promo.style.backgroundSize = 'cover';
            promo.style.backgroundRepeat = "no-repeat";
        };
    }

}

function PushPrevSlide(target) {
    if (target == controls[0]) {
        slides[currentObjects.slide].style.display = "none";
        if (currentObjects.slide == 0) {
            currentObjects.slide = slides.length - 1;
            slides[currentObjects.slide].style.display = "block";
        } else {
            currentObjects.slide--;
            slides[currentObjects.slide].style.display = "block";
        }
    } else {
        rounds[currentObjects.round].classList.remove('promo_slider_round_active');
        currentObjects.round = currentObjects.round == 0 ? 4 : currentObjects.round -= 1;
        currentObjects.promo = currentObjects.promo == 0 ? 4 : currentObjects.promo -= 1;
        rounds[currentObjects.round].classList.add('promo_slider_round_active');
        let img = new Image();
        img.src = pathBg[currentObjects.promo];
        img.onload = function () {
            promo.style.background = `url('${this.src}')`;
            promo.style.backgroundPosition = 'center';
            promo.style.backgroundSize = 'cover';
            promo.style.backgroundRepeat = "no-repeat";
        };
    }
}