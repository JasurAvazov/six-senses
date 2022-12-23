import * as functions from "./modules/functions.js";
import Swiper, {Autoplay, EffectFade, Mousewheel, Navigation, Scrollbar} from "swiper";
import SmoothScroll from 'smoothscroll-for-websites'
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger); 

SmoothScroll({
    animationTime: 200,
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

const autoSwiper = new Swiper('.autoSwiper',{
    modules: [Scrollbar, Autoplay],
    scrollbar: {
        el: ".swiper-scrollbar",
    },
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
})

const menu_btn = document.querySelector('.menu-nav__menu')
const menu_btn_back = document.getElementById('menu-back')
const menu = document.getElementById('menu')
menu_btn.addEventListener('click',() => {
    menu.style.display = 'block'
})
menu_btn_back.addEventListener('click', () => {
    menu.style.display = 'none'
})

const numberClass = document.querySelectorAll('.show-number')
numberClass?.forEach(el => {
    el.addEventListener('click', () => {
        el.innerHTML = el.getAttribute('data-number')
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