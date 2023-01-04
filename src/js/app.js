import * as functions from "./modules/functions.js";
import Swiper, {Autoplay, EffectFade, Mousewheel, Navigation, Scrollbar} from "swiper";
import SmoothScroll from 'smoothscroll-for-websites'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)

const body = document.getElementById('body')
const preloader = document.getElementById("preloader")
const preloaderCon = document.querySelector(".preloader-con");
const percent = document.querySelector("#percent");
let perVal = 0;


function preloaderFunc() {
    body.style.overflowY = 'hidden'
    let timeout = 40
    let increment = setInterval(() => {
        perVal += 1;
        percent.textContent = `${perVal}%`;
        if (perVal === 100) {
            clearInterval(increment);
            preloaderCon.classList.remove("active");
        }
    }, timeout);
    setTimeout(() => {
        preloader.classList.add('close')
        body.style.overflowY = 'scroll'
        setTimeout(() => {preloader.style.display = 'none'},500)
    }, timeout*100)
}
preloaderFunc()

gsap.utils.toArray(".places-top").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%", 
                scrub: 2, 
                markers: false,
            },
        });
    tl
        .add('start')
        .from(section.querySelector(".box-left-side"), { 
            x: -200,
            opacity: 0,
            ease: "expo.ease",
        }, 'start')
        .from(section.querySelector(".box-right-side"), { 
            x: 200,
            opacity: 0,
            ease: "expo.ease",
        }, 'start')
})

gsap.utils.toArray(".places-bottom").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%", 
                scrub: 2, 
                markers: false,
            },
        });
    tl
        .add('start')
        .from(section.querySelector(".box-left-side"), { 
            x: -200,
            opacity: 0,
            ease: "expo.ease",
        }, 'start')
        .from(section.querySelector(".box-right-side"), { 
            x: 200,
            opacity: 0,
            ease: "expo.ease",
        }, 'start')
})

gsap.utils.toArray(".book-img").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "top 20%",
                scrub: 2,
                markers: false,
            },
        });
    tl
        .add('start')
        .fromTo(section, {
            x: 100,
            scale: 0.9,
            ease: "expo.ease",
        },{
            x: 0,
            scale: 1.1,
            opacity: 1,
        }, 'start')
})

gsap.utils.toArray(".formInput").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 70%",
                scrub: 2,
                markers: false,
            },
            stagger: 0.2
        });
    tl
        .add('start')
        .from(section, {
            x: -80,
            opacity: 0,
            ease: "expo.ease",
            stagger: 0.2
        }, 'start')
})

gsap.utils.toArray(".developerAnim").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 0%", 
                scrub: 1, 
                markers: false,
            },
        });
    tl
        .add('start')
        .from(section, { 
            y: 80,
            opacity: 0,
            stagger: 5,
        }, 'start')
})

gsap.utils.toArray(".book-container").forEach(section => {
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "30% 70%",
                end: "30% 50%", 
                scrub: 2, 
                markers: false,
            },
        });
    tl
        .add('start')
        .to(section.querySelector(".text"), { 
            scale: 1.2,
        }, 'start')
})

SmoothScroll({
    animationTime: 1000,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true
})

functions.isWebp();

const swiper = new Swiper('.mySwiper', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const autoSwiper = new Swiper(".twrSwiper", {
    modules: [Scrollbar, Autoplay],
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    spaceBetween: 0,
    simulateTouch: true,
    autoplay: {
        delay: 2000,
    },
});

const tabs = () => {
    if(document.querySelectorAll('.floor__tab-item')){
        const tabBtns = document.querySelectorAll('.floor__tab-item');
        const tabContents = document.querySelectorAll('.floor__content');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = btn.getAttribute('data-target');
                const el = document.querySelector(target)
                tabBtns.forEach(btn => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                tabContents.forEach(content => {
                    content.classList.remove('active')
                })
                el.classList.add('active')
            })
        })
    }
}
tabs()



const maps = () => {
    if(document.querySelectorAll('.map-btn')){
        const mapBtns = document.querySelectorAll('.map-btn');
        const maps = document.querySelectorAll('.bg-map');
        mapBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = btn.getAttribute('data-target');
                const el = document.querySelector(target)
                mapBtns.forEach(btn => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                maps.forEach(content => {
                    content.classList.remove('active')
                })
                el.classList.add('active')
            })
        })
    }
}
maps()

new Swiper('.floor__swiper', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    slidesPerGroup: 1,
    preventClicks: true,
    preventClicksPropagation: true,
    noSwiping: true,
    noSwipingSelector: 'button',
    slideToClickedSlide: false,
    focusableElements: 'button',
    createElements: true,
    watchSlidesProgress: true,
    speed: 600,
    effect: "fade",
    navigation: {
        nextEl: '.floor__next',
        prevEl: '.floor__prev',
    },
})

let scrollBefore = 0;
const header = document.getElementById('header');
window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY;
    if (scrolled > 300){
        if(scrollBefore > scrolled){
            if(header.classList.contains('hide')){
                header.classList.remove('hide')
            }
            scrollBefore = scrolled;
        }else{
            scrollBefore = scrolled;
            if(!header.classList.contains('hide')){
                header.classList.add('hide')
            }
        }
    }
})

let menuOpened = false

const menu_btn = document.querySelector('.menu-nav__menu')
const menu_btn_back = document.querySelectorAll('.menu-close')
const menu = document.getElementById('menu')

menu_btn.addEventListener('click',() => {
    menu.classList.add('menuOpened')
    body.style.overflowY = 'hidden'
    menuOpened = true
})

menu_btn_back.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('menuOpened')
        body.style.overflowY = 'scroll'
    })
})

const numberClass = document.querySelectorAll('.show-number')
numberClass?.forEach(el => {
    el.addEventListener('click', () => {
        el.innerHTML = el.getAttribute('data-number')
        el.style.color = '#459A77'
    })
})

const swiper1 = new Swiper(".gallerySwiper", {
    modules: [Scrollbar, Mousewheel],
    mousewheel: false,
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true
    },
});

const obj = document.getElementById('obj')
//
// function animateFrom(elem) {
//     console.log(elem)
//     if (elem) {
//         elem.innerHTML = "55"
//     }
// }
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.utils.toArray(".numbers").forEach(function (elem) {
//
//         ScrollTrigger.create({
//             start: "top 20%",
//             trigger: elem,
//             markers: true,
//             onEnter: animateFrom(elem)
//         });
//     });
// });


// ScrollTrigger.addEventListener("scrollEnd", () => {
//     let top = window.scrollY
//     if (top === 0 && header.classList.contains('hide')){
//         header.classList.remove('hide')
//     }
//     if (top > 300){
//         setTimeout(() => {
//             header.classList.add('hide')
//         }, 2000)
//     }
// });

const broshureOpen = document.querySelectorAll(".broshure-open")
const broshureClose = document.querySelectorAll('.broshure-close')
const broshureContainer = document.getElementById('broshureContainer')

broshureOpen?.forEach(el => {
    el.addEventListener('click',() => {
        broshureContainer.classList.add('opening')
    })
})

broshureClose?.forEach(el => {
    el.addEventListener('click', () => {
        broshureContainer.classList.remove('opening')
    })
})






const towersHeight = document.querySelector('.twr-sticky').clientHeight / 2
gsap.utils.toArray(".twr-sticky").forEach(section => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "130% top",
            scrub: true,
            markers: false,
        },
    });
    tl
        .add('start')
        .to(section.querySelector('.twr-title'), {
            opacity: 0,
            scale: 2,
        }, 'start')
})

const bookHeight = document.querySelector('.twr-title').clientHeight / 2

gsap.utils.toArray(".book-sticky").forEach(section => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "150% top",
            scrub: true,
            markers: false,
        },
    });
    tl
        .add('start')
        .to(section.querySelector(".sticky-bg"), {
            opacity: 0,
            scale: 2,
            duration: .4,
        }, 'start')
        .fromTo(section.querySelector(".text"), {
            y: bookHeight*5
        },{
            y: -bookHeight+30
        }, 'start')
})


const menuBtns = document.querySelectorAll('.menu-con__btn')
menuBtns?.forEach(el => {
    el.addEventListener('click', () => {
        menuBtns?.forEach(all => {
            all.classList.remove('active')
            body.style.overflowY = 'hidden';
            el.classList.add('active')
        })
    })
})

// const foo = () => {
//     let attributes = document.querySelectorAll('.numbers')
//     attributes.forEach(el => {
//         let attribute = Number(el.getAttribute('data-number')) + 1
//         for (let i = 0; i < attribute; i++) {
//             setTimeout(() => {
//                 el.innerHTML = i.toString()
//             },400)
//         }
//     })
// }
//
// gsap.to(".payment", {
//     scrollTrigger: ".payment",
//     onStart: foo,
//     markers: true,
// });

