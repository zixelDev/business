var slides = document.querySelectorAll('.solutions_slider_item'),
    CurrentSlide = 0,
    controls = document.querySelectorAll('.control'),
    anchor = document.querySelector('.anchor');
// right_but = querySelector('.solutions_left-arrow');

addEventListener('DOMContentLoaded', function () {
    slides[CurrentSlide].style.display = "block";
    slides.forEach((e) => e.classList.add("fadeIn"));
    addEventListener('click', function (event) {
        if (event.target == controls[0]) {
            PushPrevSlide();
        } else if (event.target == controls[1]) {
            PushNextSlide();
        }

    });

    addEventListener('scroll', function () {

        if (window.pageYOffset >= 500) {
            anchor.style.display = "block";
        } else {
            anchor.style.display = "none";
        }

        
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

function PushNextSlide() {
    slides[CurrentSlide].style.display = "none";
    if (CurrentSlide == slides.length - 1) {
        CurrentSlide = 0;
        slides[CurrentSlide].style.display = "block";
    } else {
        CurrentSlide++;
        slides[CurrentSlide].style.display = "block";
    }
}


function PushPrevSlide() {
    slides[CurrentSlide].style.display = "none";
    if (CurrentSlide == 0) {
        CurrentSlide = slides.length - 1;
        slides[CurrentSlide].style.display = "block";
    } else {
        CurrentSlide--;
        slides[CurrentSlide].style.display = "block";
    }
}