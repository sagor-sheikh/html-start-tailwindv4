"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {
        // <========= Preloader Starts ============>
        $(window).on('load', function () {
            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            }, 1500);
        });
        // <========= Preloader Ends ============>
        // <========= PopUp video starts ============>
        $(function () {
            $('.playbtn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        // <========= PopUp video ends ============>
        // <========= Aos Animation ============>
        $(document).ready(function () {
            $('.zoomin').attr({
                "data-aos": "zoom-in",
                "data-aos-duration": "1500"
            });
            AOS.init({
                once: true,
            });
        });
        // <========= Aos Animation ============>
        // Testimonial Starts
        let bradCarouselShow = document.querySelector('.brad-carousel-show');
        if (bradCarouselShow) {
            const swiper = new Swiper(bradCarouselShow, {
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                breakpoints: {
                    1599: {
                        slidesPerView: 1,
                    },
                    1400: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    578: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }
            });
        }
        // Testimonial Ends

        // <========= Testimonial Starts ============>
        let categoriesCarousel = document.querySelector('.testimonial_slider');
        let categoriesBtn = document.querySelector('.testimonial_slider_btn');
        if (categoriesCarousel) {
            const swiper = new Swiper(categoriesCarousel, {
                loop: true,
                // autoplay: {
                //     delay: 5000,
                //     disableOnInteraction: false,
                // },
                spaceBetween: 0,
                slidesPerView: 1,
                paginationClickable: true,
                navigation: {
                    nextEl: categoriesBtn.querySelector('.ara-next'),
                    prevEl: categoriesBtn.querySelector('.ara-prev'),
                },
            });
        }
        // <========= Testimonial Ends ============>

        // <========= Odometer Init  ============>
        let windowHeight = $(window).height();
        $('.odometer').children().each(function () {
            if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
                var section = $(this).closest(".counters");
                section.find(".odometer").each(function () {
                    $(this).html($(this).attr("data-odometer-final"));
                });
            }
        });

        $(document).ready(function () {
            $(".odometer").each(function () {
                var $odometerElement = $(this);
                var elementValue = Number($odometerElement.attr("data-counter-value"));

                var od = new Odometer({
                    el: $odometerElement[0],
                    value: 0,
                    format: "",
                    theme: "digital"
                });

                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            od.update(elementValue);
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe($odometerElement.parent()[0]);
            });
        });
        // <========= Tab Starts ============>
        $(".tablinks .nav-links").each(function () {
            var targetTab = $(this).closest(".singletab");
            targetTab.find(".tablinks .nav-links").each(function () {
                var navBtn = targetTab.find(".tablinks .nav-links");
                navBtn.click(function () {
                    navBtn.removeClass('active');
                    $(this).addClass('active');
                    var indexNum = $(this).closest("li").index();
                    var tabcontent = targetTab.find(".tabcontents .tabitem");
                    $(tabcontent).removeClass('active');
                    $(tabcontent).eq(indexNum).addClass('active');
                });
            });
        });
        // <========= Tab Ends ============>
        // <========= custom Accordion ============>
        $('.accordion-single .header-area').on('click', function () {
            if ($(this).closest(".accordion-single").hasClass("active")) {
                $(this).closest(".accordion-single").removeClass("active");
                $(this).next(".content-area").slideUp();
            } else {
                $(".accordion-single").removeClass("active");
                $(this).closest(".accordion-single").addClass("active");
                $(".content-area").not($(this).next(".content-area")).slideUp();
                $(this).next(".content-area").slideToggle();
            }
        });
        // <========= Nice Select Starts ============>
        // $('select').niceSelect();
        // <========= Nice Select Ends ============>


    });
});
