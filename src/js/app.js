import * as functions from "./modules/functions.js";
import Swiper, {Autoplay, EffectFade, FreeMode, Mousewheel, Navigation, Scrollbar} from "swiper";
// import SmoothScroll from 'smoothscroll-for-websites'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js"


// SmoothScroll({
//     animationTime: 1000,
//     stepSize: 60,
//     keyboardSupport: true,
//     arrowScroll: 100,
//     touchpadSupport: true
// })

gsap.registerPlugin(ScrollTrigger)

const body = document.getElementById('body')

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
    modules: [Scrollbar, Mousewheel, FreeMode],
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

const gallery = document.querySelector('.gallery')
const floor = document.querySelector('.floor')

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top top',
        end: 'top top',
        markers: false,
        onEnter: () => {
            console.log('hello')
            swiper1.mousewheel.enable()
            body.style.overflowY = 'hidden'
            gallery.style.position = 'fixed'
            gallery.style.top = '0'
            floor.style.marginTop = '100vh'
            // document.querySelector('.gallery').style.backgroundColor = 'red'
        },
        onEnterBack: () => {
            console.log('bye bye')
            swiper1.mousewheel.enable()
            body.style.overflowY = 'hidden'
            gallery.style.position = 'fixed'
            gallery.style.top = '0'
            floor.style.marginTop = '100vh'
            // document.querySelector('.gallery').style.backgroundColor = 'green'
        }
    }
});

swiper1.on('reachEnd', function(){
    swiper1.mousewheel.disable()
    gallery.style.position = 'relative'
    floor.style.marginTop = '0'
    body.style.overflowY = 'auto'
});

swiper1.on('reachBeginning', function(){
    swiper1.mousewheel.disable()
    gallery.style.position = 'relative'
    floor.style.marginTop = '0'
    body.style.overflowY = 'auto'
});






// ============================================================================

// const scrollbar = document.querySelector("#scrollbar");
//
// class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
//     static pluginName = "horizontalScroll";
//
//     transformDelta(delta, fromEvent) {
//         if (!/wheel/.test(fromEvent.type)) {
//             return delta;
//         }
//
//         const { x, y } = delta;
//
//         return {
//             y: 0,
//             x: Math.abs(x) > Math.abs(y) ? x : y
//         };
//     }
// }
//
// Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
// const myHorizontalScrollbar = Scrollbar.init(scrollbar, {
//     damping: 0.1,
//     alwaysShowTracks: true
// });
//
// myHorizontalScrollbar.setPosition(0, 0);
//
// ScrollTrigger.scrollerProxy(scrollbar, {
//     scrollLeft(value) {
//         if (arguments.length) {
//             myHorizontalScrollbar.scrollLeft = value;
//         }
//         return myHorizontalScrollbar.scrollLeft;
//     },
//     getBoundingClientRect() {
//         return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//         };
//     }
// });
//
// myHorizontalScrollbar.addListener(ScrollTrigger.update);
//
// const buttons = document.querySelectorAll("button");
//
// buttons.forEach((btn, index) => {
//
//     gsap.to(btn, {
//         scrollTrigger: {
//             id: `btn--round-${index}`,
//             trigger: btn,
//             toggleClass: "enable",
//             markers: true,
//             horizontal: true,
//             scroller: scrollbar,
//             refreshPriority: -1,
//             start: "0 80%",
//             end: "0 20%"
//         }
//     });
//
//
//
//     let proxy = { skew: 0 },
//         skewSetter = gsap.quickSetter(btn, "skewX", "deg"), // fast
//         clamp = gsap.utils.clamp(-45, 45); // don't let the skew go beyond those degrees.
//
//     ScrollTrigger.create({
//
//         trigger: btn,
//         horizontal: true,
//         scroller: scrollbar,
//         start: "0 100%",
//         end: "100% 0",
//
//         onUpdate: (self) => {
//             let skew = clamp(self.getVelocity() / -50);
//             if (Math.abs(skew) > Math.abs(proxy.skew)) {
//                 proxy.skew = skew;
//                 gsap.to(proxy, {
//                     skew: 0,
//                     duration: 0.8,
//                     ease: "power3",
//                     overwrite: true,
//                     onUpdate: () => skewSetter(proxy.skew)
//                 });
//             }
//         }
//     });
//
//
// });