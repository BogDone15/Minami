$(document).ready(function () {
 $(".owl-carousel").owlCarousel({
  items: 2,
  nav: true,
  dots: false,
  navText: ["", ""],
  responsive: {
   0: {
    items: 1
   },
   1025: {
    items: 2,
    margin: 20
   }
  }
 });
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
 window.addEventListener('scroll', animOnScroll);
 function animOnScroll(params) {
  for (let index = 0; index < animItems.length; index++) {
   const animItem = animItems[index];
   const animItemHeight = animItem.offsetHeight;
   const animItemOffset = offset(animItem).top;
   const animStart = 4;

   let animItemPoint = window.innerHeight - animItemHeight / animStart;

   if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
   }

   if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
    animItem.classList.add('_active');
   } else {
    if (!animItem.classList.contains('_anim-no-hide')) {
     animItem.classList.remove('_active');
    }
   }
  }
 }

 function offset(el) {
  const rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
 }

 setTimeout(() => {
  animOnScroll();
 }, 500);
}

const burger = document.querySelector('#burger');
const topLine = document.querySelector('.top-line');
const botLine = document.querySelector('.bot-line');
const navColumn = document.querySelector('.nav__column');
const intro__title = document.querySelector('.intro__title');

burger.addEventListener('click', () => {
 topLine.classList.toggle('toggleTop');
 botLine.classList.toggle('toggleBot');
 navColumn.classList.toggle('nav__column-active');
 intro__title.classList.toggle('opacity__text');
})

let linkNav = document.querySelectorAll('[href^="#"]'),
 V = 0.2;
for (let i = 0; i < linkNav.length; i++) {
 linkNav[i].addEventListener('click', function (e) {
  e.preventDefault();
  let w = window.pageYOffset,
   hash = this.href.replace(/[^#]*(.*)/, '$1');
  t = document.querySelector(hash).getBoundingClientRect().top,
   start = null;
  requestAnimationFrame(step);
  function step(time) {
   if (start === null) start = time;
   let progress = time - start,
    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
   window.scrollTo(0, r);
   if (r != w + t) {
    requestAnimationFrame(step)
   } else {
    location.hash = hash
   }
  }
 }, false);
}