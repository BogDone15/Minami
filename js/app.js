// VANTA.CELLS({
//  el: "#body",
//  mouseControls: true,
//  touchControls: true,
//  gyroControls: false,
//  minHeight: 200.00,
//  minWidth: 200.00,
//  scale: 1.00,
//  color1: 0x1f2a2a,
//  color2: 0x141411
// })

$(document).ready(function () {
 $(".owl-carousel").owlCarousel({
  margin: 20,
  items: 2,
  nav: true,
  dots: false,
  navText: ["", ""]
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

// const nav = document.querySelector('#nav');
// const navWrap = document.querySelector('.navbar-wrap');
// const burger = document.querySelector('#burger');
// let scrolltop = pageYOffset;

// window.addEventListener("scroll", function () {
//  if (pageYOffset > navWrap.offsetHeight) {
//   burger.classList.add('showburger');
//   nav.classList.add('shownav');
//   // nav.style.display = 'none';
//  } else {
//   burger.classList.remove('showburger');
//   nav.classList.remove('shownav');
//   // nav.style.display = 'flex';
//  }
//  scrolltop = pageYOffset;
// });

// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//  animationTime = 700,
//  framesCount = 80;

// anchors.forEach(function (item) {
//  item.addEventListener('click', function (e) {
//   e.preventDefault();

//   let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

//   let scroller = setInterval(function () {
//    let scrollBy = coordY / framesCount;

//    if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//     window.scrollBy(0, scrollBy);
//    } else {
//     window.scrollTo(0, coordY);
//     clearInterval(scroller);
//    }
//   }, animationTime / framesCount);
//  });
// });

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